import React from 'react'
import { useParams } from 'react-router-dom'
import { BlogHeader } from '@/components/blog/BlogHeader'
import { PostForm } from '@/components/blog/PostForm'

export const EditPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <PostForm postId={id} />
    </div>
  )
}