import React from 'react'
import { BlogHeader } from '@/components/blog/BlogHeader'
import { PostForm } from '@/components/blog/PostForm'

export const CreatePostPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <PostForm />
    </div>
  )
}