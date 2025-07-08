import { createClient } from "@supabase/supabase-js"

// Get environment variables with proper error handling
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Supabase environment variables not found. Some features may not work.")
}

// Create client with fallback for development
export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder-key",
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    },
  },
)

// Connection test function that actually works
export async function testConnection() {
  try {
    if (!supabaseUrl || !supabaseAnonKey) {
      return {
        success: false,
        message: "Environment variables NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are required",
      }
    }

    const { data, error } = await supabase.from("profiles").select("count", { count: "exact", head: true })

    if (error) {
      return {
        success: false,
        message: `Database error: ${error.message}. Make sure you've run the SQL scripts in your Supabase project.`,
      }
    }

    return { success: true, message: "Connected to Supabase successfully" }
  } catch (error) {
    return {
      success: false,
      message: `Connection failed: ${error instanceof Error ? error.message : "Unknown error"}`,
    }
  }
}

// Auth helper functions
export async function signUp(
  email: string,
  password: string,
  userData: { full_name: string; role: UserRole; school_name?: string; grade_level?: number },
) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: userData,
    },
  })
  return { data, error }
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  return { data, error }
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
  return { error }
}

export async function getCurrentUser() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()
  return { user, error }
}

// Types for our database
export type UserRole = "teacher" | "student"

export interface Profile {
  id: string
  email: string
  full_name: string
  role: UserRole
  school_name?: string
  grade_level?: number
  created_at: string
  updated_at: string
}

export interface Competition {
  id: string
  title: string
  description: string
  created_by: string
  start_date: string
  end_date: string
  is_active: boolean
  max_team_size: number
  created_at: string
}

export interface Lesson {
  id: string
  title: string
  description: string
  content: string
  skill_focus: string
  grade_level: number[]
  created_by: string
  is_published: boolean
  created_at: string
}

export interface Workshop {
  id: string
  title: string
  description: string
  facilitator_id: string
  max_participants: number
  duration_minutes: number
  skill_focus: string
  grade_levels: number[]
  scheduled_at: string
  is_live: boolean
  meeting_link?: string
  materials_link?: string
  created_at: string
}

export interface WorkshopRegistration {
  id: string
  workshop_id: string
  student_id: string
  registered_at: string
  attended: boolean
  completion_notes?: string
}
