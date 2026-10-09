import { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls, Float } from '@react-three/drei'
import { motion } from 'framer-motion'
import './Hero.css'

function GlossySphere() {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.15
      meshRef.current.rotation.x = Math.sin(t * 0.5) * 0.15
    }
  })

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.1 : 1}
    >
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshPhysicalMaterial
        color="#00d4aa"
        metalness={0.3}
        roughness={0.1}
        clearcoat={1}
        clearcoatRoughness={0.03}
        transmission={0.5}
        thickness={0.5}
        ior={1.5}
        envMapIntensity={2}
        side={2}
      />
    </mesh>
  )
}

function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 35 }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1 }}
    >
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>
    </Canvas>
  )
}

function HeroScene() {
  return (
    <>
      <Environment preset="city" />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
        autoRotate
        autoRotateSpeed={0.2}
      />
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <GlossySphere />
      </Float>
      <Float speed={2} rotationIntensity={-0.2} floatIntensity={0.3}>
        <mesh scale={0.8}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshPhysicalMaterial
            color="#00d4aa"
            metalness={0}
            roughness={0}
            emissive="#00d4aa"
            emissiveIntensity={2}
            transparent
            opacity={0.15}
          />
        </mesh>
      </Float>
      <pointLight position={[10, 10, 10]} intensity={100} color="#00d4aa" />
      <pointLight position={[-10, -10, 10]} intensity={50} color="#ffffff" />
    </>
  )
}

function HeroContent() {
  return (
    <div className="hero-content">
      <motion.div
        className="hero-badge"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <span className="badge-dot" />
        <span>Creative Developer & Designer</span>
      </motion.div>

      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Crafting Digital
        <br />
        <span className="highlight">Experiences</span>
        <br />
        <span className="typing-text">That Inspire</span>
      </motion.h1>

      <motion.p
        className="hero-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        I build immersive web experiences with React, Three.js, and modern tools.
        Passionate about clean code, beautiful design, and pushing the boundaries
        of what's possible in the browser.
      </motion.p>

      <motion.div
        className="hero-actions"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <a href="#projects" className="btn btn-primary">
          View Work
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        <a href="#contact" className="btn btn-outline">
          Get in Touch
        </a>
      </motion.div>

      <motion.div
        className="hero-stats"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="stat">
          <span className="stat-value">50+</span>
          <span className="stat-label">Projects</span>
        </div>
        <div className="stat">
          <span className="stat-value">3+</span>
          <span className="stat-label">Years Exp</span>
        </div>
        <div className="stat">
          <span className="stat-value">20+</span>
          <span className="stat-label">Clients</span>
        </div>
        <div className="stat">
          <span className="stat-value">100%</span>
          <span className="stat-label">Satisfaction</span>
        </div>
      </motion.div>
    </div>
  )
}

function ScrollIndicator() {
  return (
    <motion.div
      className="scroll-indicator"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 5v14M19 12l-7 7-7-7" />
      </svg>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero"
      style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
    >
      <HeroCanvas />
      <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: '72px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', minHeight: 'calc(100vh - 72px)' }}>
          <HeroContent />
        </div>
        <ScrollIndicator />
      </div>

      <div className="hero-glow" style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(0, 212, 170, 0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
        borderRadius: '50%',
        filter: 'blur(60px)',
      }} />
    </section>
  )
}