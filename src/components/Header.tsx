import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const navItems = [
  { to: '/', label: 'Présentation' },
  { to: '/experiences', label: 'Expériences' },
  { to: '/creations', label: 'Créations' },
  { to: '/contact', label: 'Contact' },
]

function useRevealHover() {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target || !target.classList.contains('nav-btn')) return
      const rect = target.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      target.style.setProperty('--x', `${x}px`)
      target.style.setProperty('--y', `${y}px`)
    }
    el.addEventListener('mousemove', handler)
    return () => el.removeEventListener('mousemove', handler)
  }, [])
  return ref
}

export default function Header() {
  const containerRef = useRevealHover()
  return (
    <header className="win11-header">
      <div className="header-inner" ref={containerRef}>
        <div className="brand">
          <div className="dot" />
          <div className="title">Portofolio Atoshi</div>
        </div>
        <nav className="nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-btn${isActive ? ' active' : ''}`}
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <motion.span
                      className="underline"
                      layoutId="nav-underline"
                      transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
