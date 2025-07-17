import { createClient } from '@supabase/supabase-js'

// For this demo, you'll need to replace these with your actual Supabase credentials
// In a real app, these would come from environment variables
const supabaseUrl = 'https://your-project.supabase.co'
const supabaseKey = 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Type definitions for our blog
export interface Post {
  id: string
  title: string
  content: string
  excerpt: string
  featured_image?: string
  category_id: string
  author_id: string
  published: boolean
  created_at: string
  updated_at: string
  category?: Category
  author?: Profile
  comments?: Comment[]
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  created_at: string
}

export interface Profile {
  id: string
  username: string
  full_name?: string
  avatar_url?: string
  bio?: string
  created_at: string
}

export interface Comment {
  id: string
  post_id: string
  author_id: string
  content: string
  created_at: string
  author?: Profile
}

// Mock data for demonstration (replace with real Supabase calls)
export const mockPosts: Post[] = [
  {
    id: '1',
    title: 'Getting Started with MERN Stack',
    content: 'Learn how to build modern web applications with MongoDB, Express.js, React, and Node.js...',
    excerpt: 'A comprehensive guide to building full-stack applications with the MERN stack.',
    featured_image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
    category_id: '1',
    author_id: '1',
    published: true,
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
    category: { id: '1', name: 'Technology', slug: 'technology', created_at: '2024-01-01T00:00:00Z' },
    author: { id: '1', username: 'johndoe', full_name: 'John Doe', created_at: '2024-01-01T00:00:00Z' }
  },
  {
    id: '2',
    title: 'Advanced React Patterns',
    content: 'Explore advanced React patterns including render props, higher-order components, and custom hooks...',
    excerpt: 'Master advanced React patterns to build scalable and maintainable applications.',
    featured_image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
    category_id: '1',
    author_id: '1',
    published: true,
    created_at: '2024-01-10T10:00:00Z',
    updated_at: '2024-01-10T10:00:00Z',
    category: { id: '1', name: 'Technology', slug: 'technology', created_at: '2024-01-01T00:00:00Z' },
    author: { id: '1', username: 'johndoe', full_name: 'John Doe', created_at: '2024-01-01T00:00:00Z' }
  },
  {
    id: '3',
    title: 'Database Design Best Practices',
    content: 'Learn how to design efficient and scalable databases for modern applications...',
    excerpt: 'Essential principles for designing robust database schemas and optimizing performance.',
    featured_image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop',
    category_id: '1',
    author_id: '1',
    published: true,
    created_at: '2024-01-05T10:00:00Z',
    updated_at: '2024-01-05T10:00:00Z',
    category: { id: '1', name: 'Technology', slug: 'technology', created_at: '2024-01-01T00:00:00Z' },
    author: { id: '1', username: 'johndoe', full_name: 'John Doe', created_at: '2024-01-01T00:00:00Z' }
  }
]

export const mockCategories: Category[] = [
  { id: '1', name: 'Technology', slug: 'technology', description: 'Latest in tech and programming', created_at: '2024-01-01T00:00:00Z' },
  { id: '2', name: 'Design', slug: 'design', description: 'UI/UX and visual design', created_at: '2024-01-01T00:00:00Z' },
  { id: '3', name: 'Business', slug: 'business', description: 'Business insights and strategies', created_at: '2024-01-01T00:00:00Z' }
]