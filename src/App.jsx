import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html, Environment, OrbitControls } from '@react-three/drei'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function GlossySphere() {
  return (
    <Html
      center
      position={[0, 0, 0]}
      style={{ pointerEvents: 'none' }}
      transform
      sprite
    >
      <Canvas.Sphere />
    </Html>
  )
}

function Scene() {
  return (
    <>
      <Environment
        preset="city"
        background
        ground={false}
      />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.3}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
      <GlossySphere />
    </>
  )
}

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App