import { useState, useEffect } from 'react'
import { Post, Category, mockPosts, mockCategories } from '@/lib/supabase'

// Custom hook for blog operations
export const useBlog = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Simulate API calls with mock data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        setPosts(mockPosts)
        setCategories(mockCategories)
      } catch (err) {
        setError('Failed to fetch blog data')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const createPost = async (postData: Omit<Post, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      setLoading(true)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const newPost: Post = {
        ...postData,
        id: Date.now().toString(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }
      
      setPosts(prev => [newPost, ...prev])
      return newPost
    } catch (err) {
      setError('Failed to create post')
      throw err
    } finally {
      setLoading(false)
    }
  }

  const updatePost = async (id: string, postData: Partial<Post>) => {
    try {
      setLoading(true)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500))
      
      setPosts(prev => prev.map(post => 
        post.id === id 
          ? { ...post, ...postData, updated_at: new Date().toISOString() }
          : post
      ))
    } catch (err) {
      setError('Failed to update post')
      throw err
    } finally {
      setLoading(false)
    }
  }

  const deletePost = async (id: string) => {
    try {
      setLoading(true)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500))
      
      setPosts(prev => prev.filter(post => post.id !== id))
    } catch (err) {
      setError('Failed to delete post')
      throw err
    } finally {
      setLoading(false)
    }
  }

  const getPostById = (id: string) => {
    return posts.find(post => post.id === id)
  }

  const getPostsByCategory = (categoryId: string) => {
    return posts.filter(post => post.category_id === categoryId)
  }

  const searchPosts = (query: string) => {
    return posts.filter(post => 
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.content.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase())
    )
  }

  return {
    posts,
    categories,
    loading,
    error,
    createPost,
    updatePost,
    deletePost,
    getPostById,
    getPostsByCategory,
    searchPosts,
  }
}