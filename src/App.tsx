import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Splash from './components/Splash'
import Presentation from './pages/Presentation'
import Experiences from './pages/Experiences'
import Creations from './pages/Creations'
import Contact from './pages/Contact'

function App() {
  const location = useLocation()
  const [showSplash, setShowSplash] = useState(true)
  useEffect(() => {
    const handler = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      const root = document.documentElement
      root.style.setProperty('--mx', `${x}%`)
      root.style.setProperty('--my', `${y}%`)
    }
    window.addEventListener('pointermove', handler)
    return () => window.removeEventListener('pointermove', handler)
  }, [])

  return (
    <div className="app-shell">
      {showSplash ? (
        <Splash onComplete={() => setShowSplash(false)} />
      ) : (
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.14, delayChildren: 0.12 },
            },
          }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: -12, filter: 'blur(6px)' }, show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
          >
            <Header />
          </motion.div>
          <motion.main
            className="page-container"
            variants={{ hidden: { opacity: 0, y: 12, scale: 0.98, filter: 'blur(6px)' }, show: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } } }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Presentation />
                </motion.div>
              }
            />
            <Route
              path="/experiences"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Experiences />
                </motion.div>
              }
            />
            <Route
              path="/creations"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Creations />
                </motion.div>
              }
            />
            <Route
              path="/contact"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Contact />
                </motion.div>
              }
            />
              </Routes>
            </AnimatePresence>
          </motion.main>
          <Footer />
        </motion.div>
      )}
    </div>
  )
}

export default App
