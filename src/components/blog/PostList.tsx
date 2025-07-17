import React, { useState } from 'react'
import { PostCard } from './PostCard'
import { useBlogContext } from './BlogContext'
import { Button } from '@/components/ui/button'
import { Loader } from 'lucide-react'

interface PostListProps {
  searchQuery?: string
  categoryFilter?: string
}

export const PostList: React.FC<PostListProps> = ({ searchQuery, categoryFilter }) => {
  const { posts, loading, searchPosts, getPostsByCategory } = useBlogContext()
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  // Filter posts based on search and category
  let filteredPosts = posts
  if (searchQuery) {
    filteredPosts = searchPosts(searchQuery)
  } else if (categoryFilter) {
    filteredPosts = getPostsByCategory(categoryFilter)
  }

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const currentPosts = filteredPosts.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2 text-muted-foreground">Loading posts...</span>
      </div>
    )
  }

  if (filteredPosts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold text-foreground mb-2">No posts found</h3>
        <p className="text-muted-foreground">
          {searchQuery 
            ? `No posts match your search for "${searchQuery}"`
            : 'No posts available at the moment'
          }
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Featured Post */}
      {currentPage === 1 && !searchQuery && !categoryFilter && currentPosts.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Featured Post</h2>
          <PostCard post={currentPosts[0]} variant="featured" />
        </div>
      )}

      {/* Regular Posts Grid */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          {searchQuery ? `Search Results (${filteredPosts.length})` : 'Latest Posts'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPosts.slice(currentPage === 1 && !searchQuery && !categoryFilter ? 1 : 0).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 pt-8">
          <Button
            variant="outline"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          
          <div className="flex space-x-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => handlePageChange(page)}
                className="w-10 h-10"
              >
                {page}
              </Button>
            ))}
          </div>

          <Button
            variant="outline"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  )
}