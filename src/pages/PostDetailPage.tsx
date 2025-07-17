import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import { BlogHeader } from '@/components/blog/BlogHeader'
import { useBlogContext } from '@/components/blog/BlogContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PostCard } from '@/components/blog/PostCard'
import { ArrowLeft, Calendar, User, Tag, Edit, Trash2, Share2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export const PostDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { toast } = useToast()
  const { getPostById, posts, deletePost } = useBlogContext()

  const post = id ? getPostById(id) : null
  const relatedPosts = posts
    .filter(p => p.id !== id && p.category_id === post?.category_id)
    .slice(0, 3)

  const handleDelete = async () => {
    if (!post || !window.confirm('Are you sure you want to delete this post?')) return
    
    try {
      await deletePost(post.id)
      toast({
        title: "Success!",
        description: "Post deleted successfully.",
      })
      navigate('/')
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete post.",
        variant: "destructive",
      })
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post?.title,
          text: post?.excerpt,
          url: window.location.href,
        })
      } catch (error) {
        // User cancelled or error occurred
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      toast({
        title: "Link copied!",
        description: "Post URL copied to clipboard.",
      })
    }
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <BlogHeader />
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The post you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      
      <main className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-3">
            {/* Featured Image */}
            {post.featured_image && (
              <div className="relative h-96 rounded-lg overflow-hidden mb-8 shadow-elegant">
                <img
                  src={post.featured_image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            )}

            {/* Post Header */}
            <header className="mb-8">
              <Badge variant="secondary" className="mb-4">
                <Tag className="h-3 w-3 mr-1" />
                {post.category?.name}
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                {post.title}
              </h1>
              
              {post.excerpt && (
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-border pb-6">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>By {post.author?.full_name || post.author?.username}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{formatDistanceToNow(new Date(post.created_at), { addSuffix: true })}</span>
                </div>
                <div className="flex items-center gap-2 ml-auto">
                  <Button size="sm" variant="outline" onClick={handleShare}>
                    <Share2 className="h-4 w-4 mr-1" />
                    Share
                  </Button>
                  <Link to={`/edit/${post.id}`}>
                    <Button size="sm" variant="outline">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                  </Link>
                  <Button size="sm" variant="outline" onClick={handleDelete}>
                    <Trash2 className="h-4 w-4 mr-1" />
                    Delete
                  </Button>
                </div>
              </div>
            </header>

            {/* Post Content */}
            <div className="prose prose-lg max-w-none">
              <div className="text-foreground leading-8 whitespace-pre-wrap">
                {post.content}
              </div>
            </div>

            {/* Tags or Additional Actions */}
            <footer className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Last updated: {formatDistanceToNow(new Date(post.updated_at), { addSuffix: true })}
                </div>
                <Button variant="gradient" onClick={handleShare}>
                  <Share2 className="h-4 w-4 mr-2" />
                  Share this post
                </Button>
              </div>
            </footer>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Author Card */}
            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-primary-glow mx-auto mb-4 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary-foreground">
                      {(post.author?.full_name || post.author?.username || 'A').charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {post.author?.full_name || post.author?.username}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {post.author?.bio || 'Content creator and developer sharing insights about modern web development.'}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <Card className="shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Related Posts</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <PostCard key={relatedPost.id} post={relatedPost} variant="compact" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Table of Contents (if content is long) */}
            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">In this article</h3>
                <div className="space-y-2 text-sm">
                  <div className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    Introduction
                  </div>
                  <div className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    Key Concepts
                  </div>
                  <div className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    Implementation
                  </div>
                  <div className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    Conclusion
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  )
}