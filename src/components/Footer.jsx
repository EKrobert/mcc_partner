import { NavLink } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="tricolor"><span /><span /><span /></div>
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-m">M</span>
            <span className="logo-cc">CC</span>
          </div>
          <div className="footer-logo-sub">PARTNERS</div>
          <p className="footer-tagline">
            Le pont stratégique entre l'ambition du Maroc et la vision internationale de la Chine.
          </p>
          <div className="footer-flags">🇲🇦 &nbsp;✦&nbsp; 🇨🇳</div>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            {[['/', 'Accueil'], ['/about', 'À Propos'], ['/atouts', 'Nos Atouts'], ['/webinaire', 'Webinaire'], ['/salon', 'Salon MCC'], ['/contact', 'Contact']].map(([path, label]) => (
              <li key={path}><NavLink to={path}>{label}</NavLink></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Événements</h4>
          <ul>
            <li><NavLink to="/webinaire">Webinaire — 11 Mai 2026</NavLink></li>
            <li><NavLink to="/salon">Salon Oriental 2026</NavLink></li>
            <li><NavLink to="/salon?parcours=chinese">Réserver un Stand</NavLink></li>
            <li><NavLink to="/salon?parcours=moroccan">Invitation Visiteur</NavLink></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><span>📍 Oujda - Oriental, Maroc</span></li>
            <li><span>📧 contact@mcc-partners.ma</span></li>
            <li><span>📱 +212 668-473658</span></li>
            <li><span>💬 WeChat : MCC-Partners</span></li>
          </ul>
          <div className="footer-socials">
            {['LinkedIn', 'WeChat', 'Douyin', 'Instagram'].map(s => (
              <span key={s} className="social-chip">{s}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>2026 MCC Partners Maroc China Connect. Tous droits réservés.</span>
          <span>FR &nbsp;|&nbsp; AR &nbsp;|&nbsp; ZH &nbsp;|&nbsp; EN</span>
        </div>
      </div>
    </footer>
  )
}
