import React, { useState } from 'react'
import { BlogHeader } from '@/components/blog/BlogHeader'
import { PostList } from '@/components/blog/PostList'
import { useBlogContext } from '@/components/blog/BlogContext'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tag, BookOpen } from 'lucide-react'

export const CategoriesPage: React.FC = () => {
  const { categories, posts } = useBlogContext()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const selectedCategoryData = selectedCategory 
    ? categories.find(cat => cat.id === selectedCategory)
    : null

  const categoryPostCounts = categories.map(category => ({
    ...category,
    postCount: posts.filter(post => post.category_id === category.id).length
  }))

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-muted/30 to-background py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Explore Categories
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover content organized by topics that interest you most.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <aside className="lg:col-span-1">
            <Card className="shadow-elegant sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Tag className="h-5 w-5 mr-2" />
                  All Categories
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant={!selectedCategory ? "default" : "ghost"}
                  className="w-full justify-between"
                  onClick={() => setSelectedCategory(null)}
                >
                  <span>All Posts</span>
                  <Badge variant="outline">{posts.length}</Badge>
                </Button>
                
                {categoryPostCounts.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "ghost"}
                    className="w-full justify-between"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <span>{category.name}</span>
                    <Badge variant="outline">{category.postCount}</Badge>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {!selectedCategory ? (
              <>
                {/* All Categories Overview */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Browse by Category</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categoryPostCounts.map((category) => (
                      <Card 
                        key={category.id}
                        className="hover-glow cursor-pointer transition-all duration-300"
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">{category.name}</CardTitle>
                            <div className="flex items-center space-x-1">
                              <BookOpen className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">
                                {category.postCount} posts
                              </span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">
                            {category.description || `Explore all posts in the ${category.name} category.`}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Latest Posts */}
                <PostList />
              </>
            ) : (
              <>
                {/* Selected Category Header */}
                <div className="mb-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedCategory(null)}
                    >
                      ← All Categories
                    </Button>
                  </div>
                  
                  <h1 className="text-3xl font-bold text-foreground mb-2">
                    {selectedCategoryData?.name}
                  </h1>
                  <p className="text-muted-foreground">
                    {selectedCategoryData?.description || `All posts in the ${selectedCategoryData?.name} category.`}
                  </p>
                  
                  <div className="flex items-center space-x-4 mt-4">
                    <Badge variant="secondary" className="px-3 py-1">
                      <BookOpen className="h-3 w-3 mr-1" />
                      {posts.filter(post => post.category_id === selectedCategory).length} posts
                    </Badge>
                  </div>
                </div>

                {/* Category Posts */}
                <PostList categoryFilter={selectedCategory} />
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}