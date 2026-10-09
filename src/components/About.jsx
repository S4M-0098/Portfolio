import { motion } from 'framer-motion'
import './About.css'

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { category: '3D & Graphics', items: ['Three.js', 'React Three Fiber', 'WebGL', 'Blender', 'GSAP'] },
  { category: 'Backend', items: ['Node.js', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs'] },
  { category: 'Tools', items: ['Git', 'Docker', 'Vercel', 'Figma', 'VS Code'] },
]

const experience = [
  {
    role: 'Senior Creative Developer',
    company: 'Digital Agency',
    period: '2022 - Present',
    description: 'Leading development of immersive web experiences for global brands. Specializing in 3D web graphics and interactive storytelling.',
  },
  {
    role: 'Frontend Developer',
    company: 'Tech Startup',
    period: '2020 - 2022',
    description: 'Built scalable React applications and design systems. Collaborated with design team to implement pixel-perfect interfaces.',
  },
  {
    role: 'Junior Developer',
    company: 'Web Studio',
    period: '2019 - 2020',
    description: 'Developed responsive websites and web applications. Learned modern JavaScript frameworks and best practices.',
  },
]

export default function About() {
  return (
    <section id="about" className="section about" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Get to Know <span>Me Better</span></h2>
        </div>

        <div className="about-grid">
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="about-text lead">
              I'm a creative developer passionate about building immersive digital experiences that push the boundaries of what's possible on the web.
            </p>
            <p className="about-text">
              With over 3 years of experience, I specialize in creating interactive 3D web experiences using React Three Fiber, Three.js, and modern web technologies. I believe the best digital experiences come from the intersection of clean code, thoughtful design, and technical innovation.
            </p>
            <p className="about-text">
              When I'm not coding, you'll find me experimenting with new web technologies, contributing to open-source projects, or exploring the latest in generative art and WebGL.
            </p>

            <div className="about-highlights">
              <motion.div
                className="highlight-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <span className="highlight-number">50+</span>
                <span className="highlight-label">Projects Delivered</span>
              </motion.div>
              <motion.div
                className="highlight-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className="highlight-number">30+</span>
                <span className="highlight-label">Happy Clients</span>
              </motion.div>
              <motion.div
                className="highlight-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <span className="highlight-number">15+</span>
                <span className="highlight-label">Open Source Contributions</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="about-skills"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="skills-title">Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  className="skill-category"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index + 0.3 }}
                >
                  <span className="skill-category-name">{skill.category}</span>
                  <ul className="skill-list">
                    {skill.items.map((item) => (
                      <li key={item} className="skill-item">
                        <span className="skill-dot" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="experience-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="experience-title">Experience</h3>
          <div className="experience-timeline">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.role}
                className="experience-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index + 0.5 }}
              >
                <div className="experience-marker">
                  <span className="marker-dot" />
                  <span className="marker-line" />
                </div>
                <div className="experience-content">
                  <div className="experience-header">
                    <h4 className="experience-role">{exp.role}</h4>
                    <span className="experience-period">{exp.period}</span>
                  </div>
                  <p className="experience-company">{exp.company}</p>
                  <p className="experience-description">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}