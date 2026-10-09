import { motion } from 'framer-motion'
import './Blog.css'

const posts = [
  {
    id: 1,
    title: 'Building Immersive 3D Experiences with React Three Fiber',
    excerpt: 'A deep dive into creating performant 3D web experiences using React Three Fiber, covering optimization techniques, shader integration, and animation patterns.',
    category: '3D Graphics',
    readTime: '12 min',
    date: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=450&fit=crop',
    slug: 'building-immersive-3d-experiences',
  },
  {
    id: 2,
    title: 'Mastering Framer Motion for Complex Animations',
    excerpt: 'Learn advanced animation techniques with Framer Motion including layout animations, shared layout transitions, and orchestrating complex sequences.',
    category: 'Animation',
    readTime: '8 min',
    date: '2024-01-08',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop',
    slug: 'mastering-framer-motion',
  },
  {
    id: 3,
    title: 'WebGL Shaders 101: From Basics to Advanced Effects',
    excerpt: 'An introduction to GLSL shaders for web developers. Covering vertex and fragment shaders, noise functions, and creating stunning visual effects.',
    category: 'WebGL',
    readTime: '15 min',
    date: '2024-01-01',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=450&fit=crop',
    slug: 'webgl-shaders-101',
  },
  {
    id: 4,
    title: 'Optimizing React Performance: A Practical Guide',
    excerpt: 'Real-world strategies for optimizing React applications including memoization, code splitting, virtual scrolling, and profiling techniques.',
    category: 'Performance',
    readTime: '10 min',
    date: '2023-12-20',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop',
    slug: 'optimizing-react-performance',
  },
  {
    id: 5,
    title: 'Designing Accessible 3D Web Experiences',
    excerpt: 'How to make your Three.js and WebGL experiences accessible to everyone. Covering reduced motion, screen readers, and keyboard navigation.',
    category: 'Accessibility',
    readTime: '7 min',
    date: '2023-12-10',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=450&fit=crop',
    slug: 'accessible-3d-web-experiences',
  },
  {
    id: 6,
    title: 'Building a Design System with React and TypeScript',
    excerpt: 'Step-by-step guide to creating a scalable design system with theming, component composition, documentation, and automated testing.',
    category: 'Architecture',
    readTime: '11 min',
    date: '2023-12-01',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=450&fit=crop',
    slug: 'building-design-system',
  },
]

const categories = ['All', '3D Graphics', 'Animation', 'WebGL', 'Performance', 'Accessibility', 'Architecture']

export default function Blog() {
  return (
    <section id="blog" className="section blog" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Latest Articles</span>
          <h2 className="section-title">Thoughts & <span>Tutorials</span></h2>
        </div>

        <div className="blog-categories" role="tablist" aria-label="Blog categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-btn ${cat === 'All' ? 'active' : ''}`}
              role="tab"
              aria-selected={cat === 'All'}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="blog-grid">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              className="blog-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="blog-image">
                <img src={post.image} alt="" loading="lazy" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-date">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  <span className="blog-read-time">{post.readTime} read</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a href={`/blog/${post.slug}`} className="blog-link">
                  Read More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="blog-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p>Want to get notified when I publish new articles?</p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
              required
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
          <p className="newsletter-note">No spam, unsubscribe anytime.</p>
        </motion.div>
      </div>
    </section>
  )
}