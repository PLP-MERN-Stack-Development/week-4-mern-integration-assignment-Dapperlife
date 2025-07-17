# BlogStack - Modern Blog Platform

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)

A modern, full-stack blog platform demonstrating the power of React, Supabase, and beautiful design. Built as a comprehensive learning project showcasing modern web development practices and seamless integration between front-end and back-end components.

## 🚀 Project Overview

BlogStack is a comprehensive blog platform originally designed as a MERN stack learning project, now adapted to leverage the power of React and Supabase. It provides a robust, scalable solution for content management with a focus on modern web development practices, clean code architecture, and beautiful user experience.

### Key Highlights

- **Modern Tech Stack**: Built with React 18, TypeScript, and Supabase
- **Responsive Design**: Beautiful, accessible design that works on all devices
- **Rich Content Editor**: Intuitive post creation and editing experience
- **Real-time Features**: Live updates and seamless data synchronization
- **Category Management**: Organized content with filtering capabilities
- **Search Functionality**: Fast and efficient content discovery
- **Optimistic UI**: Immediate feedback for better user experience

## ✨ Features Implemented

### Core Features

- ✅ **Complete CRUD Operations** - Create, read, update, and delete blog posts
- ✅ **Category-based Organization** - Organize content with categories and tags
- ✅ **Advanced Search & Filtering** - Find content quickly with powerful search
- ✅ **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- ✅ **Rich Text Support** - Comprehensive content formatting options
- ✅ **Post Editor with Preview** - Real-time preview while writing
- ✅ **Modern UI Components** - Beautiful, accessible interface elements
- ✅ **Real-time Data Sync** - Instant updates across the application
- ✅ **Image Support** - Featured images and media integration
- ✅ **Author Management** - Track and display post authors
- ✅ **Publication Dates** - Full date and time management
- ✅ **Reading Time Estimation** - Automatic calculation of reading time
- ✅ **Pagination** - Efficient content loading and navigation
- ✅ **Dark/Light Mode Support** - Theme switching capability

### Pages & Components

- **HomePage** - Featured posts, categories, and search functionality
- **PostDetailPage** - Full post view with author information and actions
- **CreatePostPage** - Rich post creation form with real-time preview
- **EditPostPage** - Comprehensive post editing functionality
- **CategoriesPage** - Browse and filter content by categories
- **AboutPage** - Project information and developer details
- **BlogHeader** - Responsive navigation with search and mobile menu
- **PostCard** - Reusable post preview component
- **PostList** - Efficient post listing with pagination
- **PostForm** - Advanced form handling for post creation/editing

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Beautiful, accessible component library
- **Lucide React** - Modern icon library
- **React Router DOM** - Client-side routing

### Backend & Database
- **Supabase** - Backend-as-a-Service with PostgreSQL
- **Real-time subscriptions** - Live data updates
- **Row Level Security** - Secure data access patterns

### Development Tools
- **ESLint** - Code linting and quality checks
- **PostCSS** - CSS processing and optimization
- **GitHub Integration** - Version control and collaboration

## 📋 Setup Instructions

### Prerequisites

- **Node.js** (v18 or higher) - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- **npm** or **yarn** package manager
- **Git** for version control

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Dapperlife/blogstack.git
   cd blogstack
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration** (Optional - for Supabase integration)
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your Supabase credentials
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   Navigate to: http://localhost:5173
   ```

### Production Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Docker Setup (Optional)

```bash
# Build and run with Docker
docker build -t blogstack .
docker run -p 3000:3000 blogstack
```

## 🔌 API Documentation

### Mock Data Structure

The application currently uses mock data with the following structure:

#### Post Object
```typescript
interface Post {
  id: string
  title: string
  content: string
  excerpt: string
  author: string
  category: string
  publishedAt: string
  readingTime: number
  featured: boolean
  image?: string
}
```

#### Category Object
```typescript
interface Category {
  id: string
  name: string
  description: string
  color: string
  postCount: number
}
```

### Available Operations

#### Posts
- `GET /posts` - Retrieve all posts with optional filtering
- `GET /posts/:id` - Get a specific post by ID
- `POST /posts` - Create a new post
- `PUT /posts/:id` - Update an existing post
- `DELETE /posts/:id` - Delete a post

#### Categories
- `GET /categories` - Get all categories with post counts
- `POST /categories` - Create a new category

#### Search & Filtering
- `GET /posts?search={query}` - Search posts by title and content
- `GET /posts?category={categoryId}` - Filter posts by category
- `GET /posts?featured=true` - Get featured posts only

### Supabase Integration

When connected to Supabase, the following database schema is recommended:

```sql
-- Posts table
CREATE TABLE posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  author TEXT NOT NULL,
  category_id UUID REFERENCES categories(id),
  published_at TIMESTAMP DEFAULT NOW(),
  reading_time INTEGER,
  featured BOOLEAN DEFAULT FALSE,
  image_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Categories table
CREATE TABLE categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  description TEXT,
  color TEXT DEFAULT '#3B82F6',
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 📸 Application Screenshots

### Homepage - Modern Dashboard
![Homepage](https://via.placeholder.com/800x600/3B82F6/FFFFFF?text=BlogStack+Homepage)
*Clean, modern interface with featured posts, categories, and search functionality*

### Post Detail View
![Post Detail](https://via.placeholder.com/800x600/10B981/FFFFFF?text=Post+Detail+View)
*Comprehensive post view with author information and action buttons*

### Create/Edit Post Interface
![Post Editor](https://via.placeholder.com/800x600/8B5CF6/FFFFFF?text=Rich+Post+Editor)
*Intuitive post creation form with rich text editing capabilities*

### Categories Page
![Categories](https://via.placeholder.com/800x600/F59E0B/FFFFFF?text=Categories+Page)
*Organized content browsing with category-based filtering*

### Mobile Responsive Design
![Mobile View](https://via.placeholder.com/400x800/EF4444/FFFFFF?text=Mobile+Responsive)
*Fully responsive design optimized for mobile devices*

### About Page - Developer Information
![About Page](https://via.placeholder.com/800x600/6366F1/FFFFFF?text=About+Page)
*Project information, technology stack, and developer details*

## 🎯 Future Enhancements

### Planned Features
- [ ] **User Authentication** - Login, registration, and user profiles
- [ ] **Comments System** - Interactive commenting on posts
- [ ] **Advanced Search** - Full-text search with filters
- [ ] **Post Scheduling** - Schedule posts for future publication
- [ ] **Image Upload** - Direct image uploads and management
- [ ] **Social Sharing** - Share posts on social media platforms
- [ ] **Email Notifications** - Notify users of new posts
- [ ] **RSS Feed** - Generate RSS feeds for posts
- [ ] **Analytics Dashboard** - Track post views and engagement
- [ ] **SEO Optimization** - Meta tags and structured data

### Technical Improvements
- [ ] **Performance Optimization** - Code splitting and lazy loading
- [ ] **PWA Features** - Offline support and service workers
- [ ] **Testing Suite** - Unit, integration, and e2e tests
- [ ] **CI/CD Pipeline** - Automated testing and deployment
- [ ] **Internationalization** - Multi-language support

## 🤝 Contributing

We welcome contributions to BlogStack! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Use semantic commit messages
- Ensure responsive design for all new features
- Add proper error handling and loading states
- Write meaningful component and function names

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Max Nkosi**  
Full-Stack Developer

- 📧 Email: [nngenee@gmail.com](mailto:nngenee@gmail.com)
- 🐙 GitHub: [@Dapperlife](https://github.com/Dapperlife)
- 🌐 Portfolio: [Coming Soon]

## 🙏 Acknowledgments

- **Vite Team** - For the amazing build tool and development experience
- **React Team** - For the powerful UI library
- **Supabase** - For the excellent backend-as-a-service platform
- **Shadcn** - For the beautiful component library
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For the comprehensive icon library

## 📚 Learning Resources

This project demonstrates concepts from:
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Guides](https://tailwindcss.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

---

**Built with ❤️ using modern web technologies**