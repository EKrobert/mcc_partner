import { atouts } from '../data'
import './Pages.css'

export default function Atouts() {
  return (
    <main style={{ paddingTop: 80 }}>

      <section className="page-hero atouts-hero">
        <div className="container">
          <div className="section-label green">Levier de Croissance</div>
          <h1 className="display display-lg">Le Corridor <em>Maroc-Chine</em></h1>
          <p className="page-hero-sub">
            Six atouts stratégiques font du Maroc la plateforme incontournable pour toute ambition
            entre l'Afrique, l'Europe et l'Asie.
          </p>
        </div>
      </section>

      {/* 6 ATOUTS */}
      <section className="section">
        <div className="container">
          <div className="atouts-full-grid">
            {atouts.map((a, i) => (
              <div key={i} className="atout-full-card card" data-num={`0${i+1}`}
                style={{ borderTop: `3px solid ${a.color}` }}>
                <div className="atout-full-emoji">{a.emoji}</div>
                <h3 className="atout-full-title">{a.title}</h3>
                <p className="atout-full-text">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  CORRIDOR */}
      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="section-label">Architecture Géo-Économique</div>
          <h2 className="display display-md">Le Maroc sur la <em>Route de la Soie</em></h2>
          <div className="corridor-map">
            {[
              { emoji: '🇲🇦', label: 'Maroc', sub: 'Hub logistique mondial', color: 'var(--green)', bg: 'var(--green-tint)' },
              { emoji: '🌍', label: 'Afrique', sub: '54 marchés accessibles', color: 'var(--gold-dark)', bg: 'var(--yellow-tint)' },
              { emoji: '🇨🇳', label: 'Chine', sub: 'Belt & Road Initiative', color: 'var(--red)', bg: 'var(--red-tint)' },
              { emoji: '🌐', label: 'Europe & USA', sub: 'Accès via accords ALE', color: '#4A7DBF', bg: '#EEF3FA' },
            ].map((n) => (
              <div key={n.label} className="corridor-node card" style={{ background: n.bg, border: `1px solid ${n.color}22` }}>
                <span>{n.emoji}</span>
                <strong style={{ color: n.color }}>{n.label}</strong>
                <p>{n.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  DOUANE */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Opportunité Historique</div>
            <h2 className="display display-md">0% Droits de Douane<br /><em>Chine → Afrique</em></h2>
            <p style={{ fontSize: 16, color: 'var(--muted)', fontWeight: 300, lineHeight: 1.85, margin: '24px 0 40px' }}>
              À partir de <strong style={{ color: 'var(--red)' }}>mai 2026</strong>, la Chine lève les droits de douane
              pour la quasi-totalité des pays africains, dont le Maroc. Cette mesure historique favorise
              directement l'exportation des produits marocains premium - argan, huile d'olive, Green Business -
              vers 1,4 milliard de consommateurs chinois.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
              {[['🫒', 'Huile d\'Olive AOC', 'Oriental'], ['🌿', 'Huile d\'Argan', 'Bio Certifiée'], ['☀️', 'Green Business', 'Énergies Propres']].map(([e, n, s]) => (
                <div key={n} className="card" style={{ padding: '24px 20px', textAlign: 'center' }}>
                  <div style={{ fontSize: 32, marginBottom: 10 }}>{e}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)', marginBottom: 4 }}>{n}</div>
                  <div style={{ fontSize: 12, color: 'var(--green)', fontWeight: 500 }}>{s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
