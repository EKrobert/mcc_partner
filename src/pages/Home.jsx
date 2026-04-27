import { NavLink } from 'react-router-dom'
import { stats, atouts, values } from '../data'
import './Home.css'

export default function Home() {
  return (
    <main className="home">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="container hero-inner">

          {/* Texte à gauche */}
          <div className="hero-content">
            <div className="hero-eyebrow animate-fadeIn">
              <span className="label" style={{ color: 'var(--red)' }}>Morocco China Connect</span>
              <div className="hero-flags">
                <span className="flag-dot" style={{ background: 'var(--green)' }} />
                <span className="flag-dot" style={{ background: 'var(--red)' }} />
                <span className="flag-dot" style={{ background: 'var(--yellow)' }} />
              </div>
            </div>

            <h1 className="hero-title animate-fadeUp">
              Le Pont <em>Stratégique</em><br />
              entre deux <em>Civilisations</em>
            </h1>

            <p className="hero-sub animate-fadeUp" style={{ animationDelay: '0.2s' }}>
              MCC Partners transforme les intentions d'investissement entre le Maroc et la Chine
              en trajectoires économiques solides - fondées sur la confiance, l'intelligence
              culturelle et l'expertise de réseau.
            </p>

            <div className="hero-actions animate-fadeUp" style={{ animationDelay: '0.4s' }}>
              <NavLink to="/webinaire" className="btn btn-primary btn-lg">
                Webinaire le 11 Mai 2026
              </NavLink>
              <NavLink to="/about" className="btn btn-outline btn-lg">
                Découvrir MCC Partners
              </NavLink>
            </div>
          </div>

          {/* Image drapeaux à droite */}
          <div className="hero-image-wrap animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <img
              src="/flags-morocco-china.png"
              alt="Drapeaux Maroc et Chine - MCC Partners"
              className="hero-flags-img"
            />
          </div>

        </div>
      </section>

      {/* ── BANNER ────────────────────────────────────────────────── */}
      <div className="banner-bar">
        <div className="container banner-inner">
          <span>🏔 Toubkal - Maroc &nbsp;|&nbsp; 🏔 Shishapangma - Chine</span>
          <em style={{ fontFamily: 'var(--font-display)', fontSize: 18 }}>
            « Le respect reconnaît le respect »
          </em>
          <span>🇲🇦 Maroc · 🇨🇳 Chine · 🌍 Afrique · 🌐 Monde</span>
        </div>
      </div>

      {/* ── STATS ─────────────────────────────────────────────────── */}
      <section className="section section-sm">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div key={i} className="stat-card card">
                <div className="stat-num">{s.value}</div>
                <div className="stat-label">{s.label}</div>
                <div className="stat-sub">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION ───────────────────────────────────────────────── */}
      <section className="section mission-section">
        <div className="container mission-grid">
          <div className="mission-left">
            <div className="section-label">Notre Mission</div>
            <h2 className="display display-lg">
              Une Culture<br />avant une <em>Entreprise</em>
            </h2>
            <p className="mission-text">
              MCC Partners repose sur des valeurs d'honnêteté, de confiance et de respect mutuel.
              Nous ne créons pas seulement des connexions commerciales - nous bâtissons des
              trajectoires pérennes entre deux civilisations millénaires.
            </p>
            <div className="values-list">
              {values.map((v, i) => (
                <div key={i} className="value-item">
                  <div className="value-icon">{v.icon}</div>
                  <div>
                    <div className="value-title">{v.title}</div>
                    <div className="value-text">{v.text}</div>
                  </div>
                </div>
              ))}
            </div>
            <NavLink to="/about" className="btn btn-outline" style={{ marginTop: 32 }}>
              Notre Histoire →
            </NavLink>
          </div>

          <div className="mission-right">
            <div className="quote-card card">
              <div className="quote-mark">"</div>
              <blockquote>
                Entre la vision et l'exécution...<br />
                il y a l'intelligence culturelle.
              </blockquote>
              <cite>- MCC Partners, Philosophie Fondatrice</cite>
            </div>
            <div className="corridor-visual">
              {[
                ['🇲🇦', 'Maroc',       'Hub logistique mondial',      'var(--green)'],
                ['🌍', 'Afrique',      '54 marchés en croissance',    'var(--gold-dark)'],
                ['🇨🇳', 'Chine',       '1,4 Md consommateurs',        'var(--red)'],
                ['🌐', 'Europe & USA', 'Accès via ALE',               '#4A7DBF'],
              ].map(([em, label, sub, color]) => (
                <div key={label} className="corridor-item" style={{ borderLeftColor: color }}>
                  <span>{em}</span>
                  <div>
                    <strong style={{ color }}>{label}</strong>
                    <span>{sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ATOUTS APERÇU ─────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="section-label green">Levier de Croissance</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
            <h2 className="display display-md">Le Corridor <em>Maroc–Chine</em></h2>
            <NavLink to="/atouts" className="btn btn-outline-green btn-sm">Voir tous les atouts →</NavLink>
          </div>
          <div className="atouts-grid">
            {atouts.slice(0, 3).map((a, i) => (
              <div key={i} className="atout-card card">
                <div className="atout-emoji">{a.emoji}</div>
                <h3 className="atout-title">{a.title}</h3>
                <p className="atout-text">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ÉVÉNEMENTS CTA ────────────────────────────────────────── */}
      <section className="section events-cta">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Agenda 2026</div>
            <h2 className="display display-lg">Rejoignez le <em>Mouvement</em></h2>
            <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '16px auto 0', fontWeight: 300 }}>
              Deux rendez-vous majeurs pour connecter les décideurs et bâtir les partenariats de demain.
            </p>
          </div>
          <div className="events-grid">
            <div className="event-card event-red">
              <div className="event-emoji">📡</div>
              <div className="event-tag label" style={{ color: 'var(--red)' }}>En ligne</div>
              <h3>Webinaire Stratégique</h3>
              <p>11 Mai 2026 - 10e anniversaire du partenariat Maroc–Chine. Inscription gratuite.</p>
              <NavLink to="/webinaire" className="btn btn-primary">S'inscrire maintenant</NavLink>
            </div>
            <div className="event-card event-green">
              <div className="event-emoji">🏛</div>
              <div className="event-tag label" style={{ color: 'var(--green)' }}>Physique</div>
              <h3>Salon MCC - Oriental</h3>
              <p>Fin 2026 - Nador West Med. Stands Chinois & Invitations Marocaines.</p>
              <NavLink to="/salon" className="btn btn-green">Accéder au Salon</NavLink>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}