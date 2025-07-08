-- Create workshops table
CREATE TABLE workshops (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  facilitator_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  max_participants INTEGER DEFAULT 12,
  duration_minutes INTEGER DEFAULT 90,
  skill_focus TEXT NOT NULL,
  grade_levels INTEGER[] NOT NULL,
  scheduled_at TIMESTAMP WITH TIME ZONE NOT NULL,
  is_live BOOLEAN DEFAULT false,
  meeting_link TEXT,
  materials_link TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create workshop_registrations table
CREATE TABLE workshop_registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  workshop_id UUID REFERENCES workshops(id) ON DELETE CASCADE NOT NULL,
  student_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  registered_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  attended BOOLEAN DEFAULT false,
  completion_notes TEXT,
  UNIQUE(workshop_id, student_id)
);

-- Create workshop_materials table for storing resources
CREATE TABLE workshop_materials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  workshop_id UUID REFERENCES workshops(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  file_url TEXT,
  material_type TEXT CHECK (material_type IN ('presentation', 'worksheet', 'reading', 'video', 'other')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE workshops ENABLE ROW LEVEL SECURITY;
ALTER TABLE workshop_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE workshop_materials ENABLE ROW LEVEL SECURITY;

-- Create policies for workshops
CREATE POLICY "Anyone can view upcoming workshops" ON workshops
  FOR SELECT USING (scheduled_at > NOW() OR is_live = true);

CREATE POLICY "Teachers can create workshops" ON workshops
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'teacher'
    )
  );

CREATE POLICY "Facilitators can update their workshops" ON workshops
  FOR UPDATE USING (facilitator_id = auth.uid());

-- Create policies for workshop registrations
CREATE POLICY "Students can view their registrations" ON workshop_registrations
  FOR SELECT USING (student_id = auth.uid());

CREATE POLICY "Students can register for workshops" ON workshop_registrations
  FOR INSERT WITH CHECK (
    student_id = auth.uid() AND
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'student'
    )
  );

CREATE POLICY "Teachers can view registrations for their workshops" ON workshop_registrations
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM workshops w
      JOIN profiles p ON p.id = auth.uid()
      WHERE w.id = workshop_id AND w.facilitator_id = auth.uid() AND p.role = 'teacher'
    )
  );

-- Create policies for workshop materials
CREATE POLICY "Anyone can view materials for registered workshops" ON workshop_materials
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM workshop_registrations wr
      WHERE wr.workshop_id = workshop_materials.workshop_id 
      AND wr.student_id = auth.uid()
    ) OR
    EXISTS (
      SELECT 1 FROM workshops w
      WHERE w.id = workshop_materials.workshop_id 
      AND w.facilitator_id = auth.uid()
    )
  );

CREATE POLICY "Facilitators can manage materials for their workshops" ON workshop_materials
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM workshops w
      WHERE w.id = workshop_id AND w.facilitator_id = auth.uid()
    )
  );

-- Create indexes for better performance
CREATE INDEX idx_workshops_scheduled_at ON workshops(scheduled_at);
CREATE INDEX idx_workshops_grade_levels ON workshops USING GIN(grade_levels);
CREATE INDEX idx_workshop_registrations_student ON workshop_registrations(student_id);
CREATE INDEX idx_workshop_registrations_workshop ON workshop_registrations(workshop_id);

-- Create function to check workshop capacity
CREATE OR REPLACE FUNCTION check_workshop_capacity()
RETURNS trigger AS $$
BEGIN
  IF (
    SELECT COUNT(*) 
    FROM workshop_registrations 
    WHERE workshop_id = NEW.workshop_id
  ) >= (
    SELECT max_participants 
    FROM workshops 
    WHERE id = NEW.workshop_id
  ) THEN
    RAISE EXCEPTION 'Workshop is at full capacity';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to enforce workshop capacity
CREATE TRIGGER enforce_workshop_capacity
  BEFORE INSERT ON workshop_registrations
  FOR EACH ROW EXECUTE FUNCTION check_workshop_capacity();
