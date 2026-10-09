import { motion } from 'framer-motion'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'Nebula Explorer',
    category: '3D Web Experience',
    description: 'Interactive 3D solar system exploration with real-time planetary data, built with React Three Fiber and GSAP.',
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&h=600&fit=crop',
    tags: ['React Three Fiber', 'GSAP', 'WebGL'],
    link: '#',
    github: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Aurora Dashboard',
    category: 'Data Visualization',
    description: 'Real-time analytics dashboard with interactive charts, WebSocket integration, and customizable widgets.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['Next.js', 'D3.js', 'TypeScript', 'Tailwind'],
    link: '#',
    github: '#',
    featured: false,
  },
  {
    id: 3,
    title: 'Quantum Portfolio',
    category: 'Creative Portfolio',
    description: 'Award-winning personal portfolio with WebGL shaders, scroll-triggered animations, and immersive storytelling.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    tags: ['Three.js', 'GLSL', 'Framer Motion', 'React'],
    link: '#',
    github: '#',
    featured: true,
  },
  {
    id: 4,
    title: 'Echo E-commerce',
    category: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with 3D product viewer, AR try-on, and seamless checkout experience.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tags: ['Next.js', 'Stripe', 'Three.js', 'PostgreSQL'],
    link: '#',
    github: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Vertex Studio',
    category: 'Design Tool',
    description: 'Browser-based 3D design tool with real-time collaboration, export to GLTF, and plugin architecture.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop',
    tags: ['React', 'WebGL', 'WebRTC', 'Node.js'],
    link: '#',
    github: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'Lumina Blog',
    category: 'Content Platform',
    description: 'Modern blogging platform with MDX support, syntax highlighting, reading time estimation, and SEO optimization.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
    tags: ['Next.js', 'MDX', 'Tailwind', 'Vercel'],
    link: '#',
    github: '#',
    featured: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Selected Work</span>
          <h2 className="section-title">Featured <span>Projects</span></h2>
        </div>

        <div className="projects-filter">
          <button className="filter-btn active" data-filter="all">All</button>
          <button className="filter-btn" data-filter="3d">3D & WebGL</button>
          <button className="filter-btn" data-filter="web">Web Apps</button>
          <button className="filter-btn" data-filter="design">Design Tools</button>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.link} className="project-link" aria-label="View project">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                    <a href={project.github} className="project-link" aria-label="View code">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
                {project.featured && <span className="featured-badge">Featured</span>}
              </div>
              <div className="project-content">
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p>Want to see more of my work?</p>
          <a href="#contact" className="btn btn-primary">Let's Collaborate</a>
        </motion.div>
      </div>
    </section>
  )
}