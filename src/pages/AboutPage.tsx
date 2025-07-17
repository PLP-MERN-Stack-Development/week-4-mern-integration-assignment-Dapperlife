import React from 'react'
import { BlogHeader } from '@/components/blog/BlogHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Github, Mail, Code, Database, Globe, Zap } from 'lucide-react'
import viteLogo from '@/assets/vite-logo.svg'

export const AboutPage: React.FC = () => {
  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Supabase', icon: '🔥' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'Vite', icon: '⚡' },
    { name: 'Shadcn/ui', icon: '🎯' }
  ]

  const features = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: 'Modern Stack',
      description: 'Built with React, TypeScript, and Supabase for a modern development experience.'
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: 'Real-time Database',
      description: 'Powered by Supabase for instant updates and seamless data management.'
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: 'Responsive Design',
      description: 'Beautiful, accessible design that works perfectly on all devices.'
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: 'High Performance',
      description: 'Optimized for speed with modern build tools and best practices.'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-muted/30 to-background py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About BlogStack
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A modern, full-stack blog platform demonstrating the power of React, Supabase, and beautiful design.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Overview */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Project Overview</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  BlogStack is a comprehensive blog platform built to demonstrate modern web development practices. 
                  Originally designed as a MERN stack learning project, it has been adapted to leverage the power 
                  of React and Supabase, providing a robust, scalable solution for content management.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  This platform showcases essential features including user authentication, CRUD operations, 
                  real-time updates, responsive design, and modern UI patterns. It serves as both a functional 
                  blog platform and a learning resource for developers interested in full-stack development.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-4 mt-8">Key Features</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Complete CRUD operations for blog posts</li>
                  <li>• Category-based content organization</li>
                  <li>• Search and filtering functionality</li>
                  <li>• Responsive design with dark mode support</li>
                  <li>• Rich text content support</li>
                  <li>• User-friendly post editor with preview</li>
                  <li>• Modern, accessible UI components</li>
                  <li>• Real-time data synchronization</li>
                </ul>
              </CardContent>
            </Card>

            {/* Features Grid */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Core Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="hover-glow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground text-sm">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Technology Stack */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Technology Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Built with modern tools and frameworks to ensure performance, scalability, and developer experience.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {technologies.map((tech, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="font-medium text-foreground">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Project Stats */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>Project Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Version</span>
                  <Badge variant="secondary">1.0.0</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Built with</span>
                  <Badge variant="outline">React 18</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Database</span>
                  <Badge variant="outline">Supabase</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Styling</span>
                  <Badge variant="outline">Tailwind CSS</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Developer Info */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>Developer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-primary-glow mx-auto mb-4 flex items-center justify-center">
                    <img src={viteLogo} alt="Vite" className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">Max Nkosi</h3>
                  <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  Passionate about creating modern web applications with clean code and beautiful design.
                </p>

                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://github.com/Dapperlife" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="mailto:nngenee@gmail.com">
                      <Mail className="h-4 w-4 mr-1" />
                      Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Get Started */}
            <Card className="shadow-elegant bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/20">
              <CardHeader>
                <CardTitle>Get Started</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Ready to start writing? Create your first blog post and share your thoughts with the world.
                </p>
                <Button variant="gradient" className="w-full">
                  Create Your First Post
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  )
}