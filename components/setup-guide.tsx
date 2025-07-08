"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, XCircle, ExternalLink, Copy, Database } from "lucide-react"
import { testConnection } from "@/lib/supabase"

export function SetupGuide() {
  const [connectionStatus, setConnectionStatus] = useState<"idle" | "testing" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const testSupabaseConnection = async () => {
    setConnectionStatus("testing")
    const result = await testConnection()

    if (result.success) {
      setConnectionStatus("success")
    } else {
      setConnectionStatus("error")
      setErrorMessage(result.message)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <Database className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Setup Researchable Platform</h1>
          <p className="text-gray-600">Follow these steps to get your local development environment running</p>
        </div>

        <div className="space-y-6">
          {/* Step 1: Create Supabase Project */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  1
                </span>
                Create Supabase Project
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                First, you'll need to create a free Supabase project to handle authentication and database.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild>
                  <a href="https://supabase.com/dashboard" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Go to Supabase Dashboard
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://supabase.com/docs/guides/getting-started" target="_blank" rel="noopener noreferrer">
                    View Setup Guide
                  </a>
                </Button>
              </div>
              <Alert>
                <AlertDescription>
                  <strong>Quick Steps:</strong>
                  <ol className="list-decimal list-inside mt-2 space-y-1">
                    <li>Sign up at supabase.com</li>
                    <li>Click "New Project"</li>
                    <li>Choose a name like "researchable-platform"</li>
                    <li>Set a strong database password</li>
                    <li>Select a region close to you</li>
                  </ol>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Step 2: Get API Keys */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  2
                </span>
                Get Your API Keys
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Once your project is created, get your API keys from the project settings.
              </p>
              <Alert>
                <AlertDescription>
                  <strong>Where to find them:</strong>
                  <ol className="list-decimal list-inside mt-2 space-y-1">
                    <li>Go to your project dashboard</li>
                    <li>Click "Settings" in the sidebar</li>
                    <li>Click "API" in the settings menu</li>
                    <li>Copy the "Project URL" and "anon public" key</li>
                  </ol>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Step 3: Environment Variables */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  3
                </span>
                Set Environment Variables
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Create a <code className="bg-gray-100 px-2 py-1 rounded">.env.local</code> file in your project root
                with these variables:
              </p>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-gray-400"># .env.local</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() =>
                      copyToClipboard(`NEXT_PUBLIC_SUPABASE_URL=your-project-url-here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here`)
                    }
                    className="text-gray-400 hover:text-white"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
                <div>NEXT_PUBLIC_SUPABASE_URL=your-project-url-here</div>
                <div>NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here</div>
              </div>
              <Alert>
                <AlertDescription>
                  Replace <code>your-project-url-here</code> and <code>your-anon-key-here</code> with the actual values
                  from your Supabase project.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Step 4: Run Database Scripts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  4
                </span>
                Set Up Database
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">Run the SQL scripts to create your database tables and policies.</p>
              <Alert>
                <AlertDescription>
                  <strong>How to run the scripts:</strong>
                  <ol className="list-decimal list-inside mt-2 space-y-1">
                    <li>Go to your Supabase project dashboard</li>
                    <li>Click "SQL Editor" in the sidebar</li>
                    <li>
                      Copy and paste the contents of <code>scripts/001_initial_schema.sql</code>
                    </li>
                    <li>Click "Run" to execute</li>
                    <li>
                      Repeat for <code>scripts/002_workshops_schema.sql</code>
                    </li>
                  </ol>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Step 5: Test Connection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  5
                </span>
                Test Connection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">Test your Supabase connection to make sure everything is working.</p>
              <div className="flex items-center gap-4">
                <Button onClick={testSupabaseConnection} disabled={connectionStatus === "testing"}>
                  {connectionStatus === "testing" ? "Testing..." : "Test Connection"}
                </Button>
                {connectionStatus === "success" && (
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span>Connected successfully!</span>
                  </div>
                )}
                {connectionStatus === "error" && (
                  <div className="flex items-center gap-2 text-red-600">
                    <XCircle className="w-5 h-5" />
                    <span>Connection failed</span>
                  </div>
                )}
              </div>
              {connectionStatus === "error" && (
                <Alert>
                  <AlertDescription>
                    <strong>Error:</strong> {errorMessage}
                    <br />
                    <strong>Common fixes:</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Check your environment variables are correct</li>
                      <li>Make sure you've run the database scripts</li>
                      <li>Verify your Supabase project is active</li>
                      <li>Restart your development server after adding .env.local</li>
                    </ul>
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          {/* Step 6: Start Development */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  6
                </span>
                Start Development
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">Once everything is set up, you can start developing!</p>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div>npm run dev</div>
                <div className="text-gray-400"># or</div>
                <div>yarn dev</div>
              </div>
              <Alert>
                <AlertDescription>
                  Your platform will be available at <code>http://localhost:3000</code>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>

        {connectionStatus === "success" && (
          <div className="mt-8 text-center">
            <Button asChild size="lg">
              <a href="/">Go to Platform</a>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
