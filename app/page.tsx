import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Trophy, Target, Brain, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Researchable</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
              Features
            </Link>
            <Link href="#workshops" className="text-gray-600 hover:text-blue-600 transition-colors">
              Workshops
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/auth/signin">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link href="/auth/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Making Research Skills{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Fun & Accessible
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Research Olympiad teaches K–8 students critical research skills through engaging competitions, interactive
            workshops, and structured lessons. Build curiosity, analytical thinking, and collaboration skills that last
            a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup?role=teacher">
              <Button size="lg" className="text-lg px-8 py-3">
                <Users className="w-5 h-5 mr-2" />
                I'm a Teacher
              </Button>
            </Link>
            <Link href="/auth/signup?role=student">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent">
                <BookOpen className="w-5 h-5 mr-2" />
                I'm a Student
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why 95%+ of Students Avoid Research</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              It's not about ability—it's about engagement. High school isn't the "formative years" anymore. Academic
              identity forms in K-8, and we're here to make it count.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="text-red-700">School Disengagement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  25-54% of K-12 students report low engagement. Fewer than 20% find classwork important or relevant.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="text-orange-700">Digital Distractions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Students spend 98+ minutes per day on devices in school, leading to reduced focus and performance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-500">
              <CardHeader>
                <CardTitle className="text-yellow-700">Early Identity Lock-in</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  By 8th grade, students decide if they're "academic." We need to reach them before it's too late.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Skills */}
      <section id="features" className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Five Core Research Skills</h2>
            <p className="text-lg text-gray-600">Building the foundation for lifelong learning and critical thinking</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Lightbulb className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Idea Creation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Guided research on real problems to spark curiosity and innovation.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle>Literature Review</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Multi-source synthesis, comparison, and analysis skills.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Brain className="w-8 h-8 text-purple-600 mb-2" />
                <CardTitle>Ethical AI Use</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Learn to use AI tools responsibly without sacrificing integrity.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="w-8 h-8 text-red-600 mb-2" />
                <CardTitle>Source Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Fact-checking and credibility assessment from an early age.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-8 h-8 text-orange-600 mb-2" />
                <CardTitle>Team Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Group work that mirrors real research environments.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Trophy className="w-8 h-8 text-yellow-600 mb-2" />
                <CardTitle>Competition Format</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Engaging triathlon: Solo quiz, team project, and literature review.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section id="workshops" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Interactive Workshops</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Live, hands-on sessions where students practice research skills in real-time with expert guidance and peer
              collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Live Research Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Interactive workshops where students work together on real research problems, guided by experienced
                  facilitators.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• 60-90 minute focused sessions</li>
                  <li>• Small groups (8-12 students)</li>
                  <li>• Real-time feedback and guidance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Brain className="w-8 h-8 text-purple-600 mb-2" />
                <CardTitle>Skill-Building Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Targeted sessions focusing on specific research skills like source evaluation, data analysis, and
                  presentation techniques.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Grade-level appropriate content</li>
                  <li>• Progressive skill development</li>
                  <li>• Certificate of completion</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Workshop Topics</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">Live</div>
                <div className="text-gray-600">Interactive Sessions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">Expert</div>
                <div className="text-gray-600">Facilitators</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Learning?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of educators and students already building research skills through engaging competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup?role=teacher">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Start Teaching Research
              </Button>
            </Link>
            <Link href="/auth/signup?role=student">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Join as Student
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-6 h-6" />
                <span className="text-xl font-bold">Researchable</span>
              </div>
              <p className="text-gray-400">Making research skills fun and accessible for K-8 students worldwide.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/features" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/competitions" className="hover:text-white transition-colors">
                    Competitions
                  </Link>
                </li>
                <li>
                  <Link href="/workshops" className="hover:text-white transition-colors">
                    Workshops
                  </Link>
                </li>
                <li>
                  <Link href="/lessons" className="hover:text-white transition-colors">
                    Lessons
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:text-white transition-colors">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Researchable. Founded by Rishab Jain. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
