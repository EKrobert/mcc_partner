import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { navLinks } from '../data'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Logo */}
        <NavLink to="/" className="navbar-logo">
          <span className="logo-m">M</span>
          <span className="logo-cc">CC</span>
          <span className="logo-partners">PARTNERS</span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="navbar-links hide-mobile">
          {navLinks.map(l => (
            <NavLink
              key={l.path}
              to={l.path}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <NavLink to="/webinaire" className="btn btn-primary btn-sm hide-mobile">
          S'inscrire au Webinaire
        </NavLink>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
        </button>
      </div>

      {/* Tricolor */}
      <div className="tricolor">
        <span /><span /><span />
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map(l => (
            <NavLink
              key={l.path}
              to={l.path}
              className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/webinaire" className="btn btn-primary btn-full" style={{ marginTop: 16 }}>
            S'inscrire au Webinaire
          </NavLink>
        </div>
      )}
    </header>
  )
}
