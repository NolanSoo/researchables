# Researchable Platform

A comprehensive platform for K-8 research education featuring competitions, workshops, and lessons.

## Quick Start

1. **Visit Setup Guide**: Go to `/setup` in your browser for a complete setup walkthrough
2. **Or follow these steps**:

### Prerequisites
- Node.js 18+ 
- npm or yarn
- A Supabase account (free)

### Installation

1. Clone and install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Set up Supabase:
   - Create a new project at [supabase.com](https://supabase.com)
   - Copy `.env.local.example` to `.env.local`
   - Add your Supabase URL and anon key

3. Run database migrations:
   - Go to your Supabase SQL Editor
   - Run `scripts/001_initial_schema.sql`
   - Run `scripts/002_workshops_schema.sql`

4. Start development server:
\`\`\`bash
npm run dev
\`\`\`

5. Visit `http://localhost:3000/setup` to verify everything works

## Features

- **Competitions**: Gamified research challenges
- **Workshops**: Live interactive learning sessions  
- **Lessons**: Self-paced structured content
- **Progress Tracking**: Monitor student development
- **Role-based Access**: Separate teacher and student experiences

## Tech Stack

- **Frontend**: Next.js 14, React, Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Auth)
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## Project Structure

\`\`\`
├── app/                 # Next.js app router pages
├── components/          # React components
├── lib/                # Utilities and configurations
├── scripts/            # Database migration scripts
└── public/             # Static assets
\`\`\`

## Development

- Visit `/setup` for guided setup
- Check `lib/supabase.ts` for database types
- Database schemas are in `scripts/` folder
- UI components use shadcn/ui patterns

## Support

For issues or questions, check the setup guide at `/setup` or create an issue.
