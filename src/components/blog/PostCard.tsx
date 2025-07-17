import React from 'react'
import { Link } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import { Calendar, User, Tag, Clock } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Post } from '@/lib/supabase'

interface PostCardProps {
  post: Post
  variant?: 'default' | 'featured' | 'compact'
}

export const PostCard: React.FC<PostCardProps> = ({ post, variant = 'default' }) => {
  const formatDate = (dateString: string) => {
    return formatDistanceToNow(new Date(dateString), { addSuffix: true })
  }

  if (variant === 'featured') {
    return (
      <Card className="overflow-hidden hover-glow animate-fade-in group">
        <div className="relative h-64 overflow-hidden">
          {post.featured_image && (
            <img
              src={post.featured_image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <Badge variant="secondary" className="mb-2">
              <Tag className="h-3 w-3 mr-1" />
              {post.category?.name}
            </Badge>
            <h2 className="text-2xl font-bold text-white mb-2 line-clamp-2">
              {post.title}
            </h2>
          </div>
        </div>
        <CardContent className="p-6">
          <p className="text-muted-foreground line-clamp-3 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {post.author?.full_name || post.author?.username}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {formatDate(post.created_at)}
            </div>
          </div>
        </CardContent>
        <CardFooter className="px-6 pb-6">
          <Link 
            to={`/post/${post.id}`}
            className="w-full"
          >
            <button className="w-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-3 px-6 rounded-lg font-medium hover:from-primary/90 hover:to-primary-glow/90 transition-all duration-300 shadow-elegant hover-glow">
              Read Full Article
            </button>
          </Link>
        </CardFooter>
      </Card>
    )
  }

  if (variant === 'compact') {
    return (
      <Card className="hover-glow animate-fade-in group">
        <CardContent className="p-4">
          <div className="flex space-x-4">
            {post.featured_image && (
              <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                <img
                  src={post.featured_image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <Badge variant="outline" className="mb-2">
                {post.category?.name}
              </Badge>
              <Link to={`/post/${post.id}`}>
                <h3 className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-2 mb-2">
                  {post.title}
                </h3>
              </Link>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-3 w-3 mr-1" />
                {formatDate(post.created_at)}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden hover-glow animate-fade-in group">
      <div className="relative h-48 overflow-hidden">
        {post.featured_image && (
          <img
            src={post.featured_image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute top-4 left-4">
          <Badge variant="secondary">
            <Tag className="h-3 w-3 mr-1" />
            {post.category?.name}
          </Badge>
        </div>
      </div>
      <CardHeader>
        <Link to={`/post/${post.id}`}>
          <h3 className="text-xl font-semibold text-foreground hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>
        <p className="text-muted-foreground line-clamp-2">
          {post.excerpt}
        </p>
      </CardHeader>
      <CardFooter className="flex items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center">
          <User className="h-4 w-4 mr-1" />
          {post.author?.full_name || post.author?.username}
        </div>
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-1" />
          {formatDate(post.created_at)}
        </div>
      </CardFooter>
    </Card>
  )
}