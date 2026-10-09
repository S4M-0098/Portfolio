import { motion } from 'framer-motion'
import './Footer.css'

const footerLinks = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Integrations'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  Resources: ['Documentation', 'Community', 'Templates', 'Webinars', 'Support'],
  Legal: ['Privacy', 'Terms', 'Cookie Policy', 'Security'],
}

const socialLinks = [
  { name: 'GitHub', href: '#', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg> },
  { name: 'Twitter', href: '#', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 9.724-3.308.852L13.388 12.1l-1.732 1.993-6.345-7.258h3.307l3.64 4.163 3.876-4.163z" /></svg> },
  { name: 'LinkedIn', href: '#', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { name: 'Dribbble', href: '#', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zm7.752 13.752c-1.212 1.98-2.784 3.66-4.668 5.016-1.848-1.404-3.348-2.892-4.608-4.452 1.44-1.872 3.096-3.456 4.932-4.716 1.764 1.128 3.36 2.544 4.824 4.236-1.74 1.524-3.276 3.204-4.668 4.884 2.892-.096 5.16-2.328 5.928-5.064-.768 2.328-2.712 4.296-5.016 5.46-.9-1.56-1.872-3.156-2.904-4.764 2.616-1.116 4.704-2.88 5.964-5.064.684 2.124 1.848 4.152 3.672 6.048zM12 2.94C8.724 2.94 5.76 5.256 5.76 8.556c0 2.136.852 4.056 2.22 5.508.144.144.288.288.432.444C9.444 14.76 10.68 14.028 12 12.828c1.344 1.212 2.58 1.944 3.804 2.256.144-.144.3-.288.432-.444 1.368-1.452 2.22-3.372 2.22-5.508C18.24 5.256 15.264 2.94 12 2.94z"/></svg> },
]

export default function Footer() {
  return (
    <footer className="footer" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="footer-main">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="#hero" className="footer-logo" style={{ textDecoration: 'none', color: 'inherit' }}>
              <span style={{ color: 'var(--accent)' }}>S</span>hams
            </a>
            <p className="footer-tagline">
              Creative developer crafting immersive digital experiences with React, Three.js, and modern web technologies.
            </p>
            <div className="footer-social">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} className="social-link" aria-label={social.name}>
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.nav
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="footer-column">
                <h4 className="footer-column-title">{category}</h4>
                <ul>
                  {links.map((link) => (
                    <li key={link}>
                      <a href={`#${link.toLowerCase()}`} className="footer-link">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.nav>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="copyright">
            &copy; {new Date().getFullYear()} Shams. All rights reserved.
          </p>
          <p className="footer-note">
            Built with React, Three.js, Framer Motion, and a lot of <span style={{ color: 'var(--accent)' }}>☕</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}