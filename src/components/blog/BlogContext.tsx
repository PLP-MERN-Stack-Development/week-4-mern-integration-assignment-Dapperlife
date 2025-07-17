import React, { createContext, useContext, ReactNode } from 'react'
import { useBlog } from '@/hooks/useBlog'
import { Post, Category } from '@/lib/supabase'

interface BlogContextType {
  posts: Post[]
  categories: Category[]
  loading: boolean
  error: string | null
  createPost: (postData: Omit<Post, 'id' | 'created_at' | 'updated_at'>) => Promise<Post>
  updatePost: (id: string, postData: Partial<Post>) => Promise<void>
  deletePost: (id: string) => Promise<void>
  getPostById: (id: string) => Post | undefined
  getPostsByCategory: (categoryId: string) => Post[]
  searchPosts: (query: string) => Post[]
}

const BlogContext = createContext<BlogContextType | undefined>(undefined)

export const BlogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const blogData = useBlog()

  return (
    <BlogContext.Provider value={blogData}>
      {children}
    </BlogContext.Provider>
  )
}

export const useBlogContext = () => {
  const context = useContext(BlogContext)
  if (context === undefined) {
    throw new Error('useBlogContext must be used within a BlogProvider')
  }
  return context
}