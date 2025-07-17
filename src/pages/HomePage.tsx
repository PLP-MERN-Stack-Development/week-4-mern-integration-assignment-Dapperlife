import React, { useState } from 'react'
import { BlogHeader } from '@/components/blog/BlogHeader'
import { PostList } from '@/components/blog/PostList'
import { useBlogContext } from '@/components/blog/BlogContext'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PostCard } from '@/components/blog/PostCard'

export const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const { categories, posts } = useBlogContext()

  // Get recent posts for sidebar
  const recentPosts = posts.slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader onSearch={setSearchQuery} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-muted/30 to-background py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6 animate-fade-in">
            Welcome to BlogStack
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up">
            A modern MERN-inspired blog platform built with React, Supabase, and beautiful design. 
            Discover insights, tutorials, and stories from developers around the world.
          </p>
          <div className="flex flex-wrap justify-center gap-2 animate-fade-in">
            {categories.slice(0, 3).map((category) => (
              <Badge 
                key={category.id} 
                variant="secondary" 
                className="px-4 py-2 text-sm hover:bg-accent cursor-pointer transition-colors"
              >
                {category.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <PostList searchQuery={searchQuery} />
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Categories */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div
                      key={category.id}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-muted cursor-pointer transition-colors"
                    >
                      <span className="text-sm font-medium">{category.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {posts.filter(post => post.category_id === category.id).length}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Posts */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Recent Posts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentPosts.map((post) => (
                  <PostCard key={post.id} post={post} variant="compact" />
                ))}
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="shadow-elegant bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Stay Updated</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the latest posts and updates delivered to your inbox.
                </p>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 text-sm border border-input rounded-md bg-background"
                  />
                  <button className="w-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-2 px-4 rounded-md text-sm font-medium hover:from-primary/90 hover:to-primary-glow/90 transition-all">
                    Subscribe
                  </button>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  )
}