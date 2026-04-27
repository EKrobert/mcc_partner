import { values } from '../data'
import './About.css'

export default function About() {
  const pillars = [
    { flag: '🇲🇦🇫🇷', title: 'Le Pilier Marocain', color: 'var(--green)', text: 'Porté par un MRE de double nationalité franco-marocaine, il apporte la maîtrise des cadres institutionnels occidentaux et marocains, ainsi qu\'une compréhension fine des enjeux de souveraineté économique du Royaume.' },
    { flag: '🇨🇳', title: 'Le Pilier Chinois', color: 'var(--red)', text: 'Incarné par M. Lu et Mme Dai, deux partenaires seniors de haute compétence. Leur présence garantit un accès aux écosystèmes décisionnels chinois et une maîtrise totale des protocoles d\'affaires sino-africains.' },
    { flag: '🌍', title: 'La Vision Africaine', color: 'var(--gold-dark)', text: 'MCC Partners se positionne comme l\'ambassadeur des opportunités du Maroc - symbolisées par Nador West Med et Tanger Med - portes d\'entrée vers les 54 nations africaines en pleine croissance.' },
  ]

  return (
    <main style={{ paddingTop: 80 }}>

      {/* PAGE HERO  */}
      <section className="page-hero about-hero">
        <div className="container">
          <div className="section-label">Notre Identité</div>
          <h1 className="display display-lg">L'ADN de la <em>Connexion</em></h1>
          <p className="page-hero-sub">
            MCC Partners transcende la simple mise en relation. Nous sommes un mécanisme d'alignement
            stratégique - fusionnant deux cultures de l'excellence au service d'un corridor économique durable.
          </p>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section">
        <div className="container">
          <div className="section-label">Structure Fondatrice</div>
          <h2 className="display display-md" style={{ marginBottom: 48 }}>Une Synergie de <em>Civilisations</em></h2>
          <div className="pillars-grid">
            {pillars.map((p, i) => (
              <div key={i} className="pillar-card card" style={{ borderTopColor: p.color }}>
                <div className="pillar-flag">{p.flag}</div>
                <h3 className="pillar-title" style={{ color: p.color }}>{p.title}</h3>
                <p className="pillar-text">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES  */}
      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="section-label green">Valeurs Fondamentales</div>
          <h2 className="display display-md" style={{ marginBottom: 48 }}>Le Socle de l'<em>Excellence</em></h2>
          <div className="values-full-grid">
            {values.map((v, i) => (
              <div key={i} className="value-full-card card">
                <div className="value-full-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section">
        <div className="container philosophy">
          <div className="philosophy-left">
            <div className="section-label">Philosophie Narrative</div>
            <h2 className="display display-md">Le Parallélisme<br />des <em>Sommets</em></h2>
            <p>La communication de MCC Partners repose sur une métaphore géographique forte - le <strong>Toubkal</strong> (Maroc) et le <strong>Shishapangma</strong> (Chine) - deux sommets qui symbolisent deux civilisations millénaires unies par une quête commune d'excellence.</p>
            <p>L'histoire ne se répète pas - <em>elle s'écrit à nouveau.</em></p>
          </div>
          <div className="philosophy-right">
            <div className="summit-visual">
              <div className="summit ma">
                <span>🏔</span>
                <strong>Toubkal</strong>
                <small>4 167 m · Maroc</small>
              </div>
              <div className="summit-bridge">✦</div>
              <div className="summit cn">
                <span>🏔</span>
                <strong>Shishapangma</strong>
                <small>8 027 m · Chine</small>
              </div>
            </div>
            <div className="timeline">
              {[
                ['🏛', '7e siècle', 'Premières relations commerciales Maroc–Chine via la Route de la Soie'],
                ['🤝', '2016', 'Visite Royale en Chine - naissance des grands projets structurants'],
                ['🚢', '2026', 'Nador West Med + 0% droits de douane - nouveau départ historique'],
                ['🌍', '2030+', 'Corridor Maroc–Chine–Afrique - plateforme de référence mondiale'],
              ].map(([icon, year, text]) => (
                <div key={year} className="timeline-item">
                  <div className="timeline-dot">{icon}</div>
                  <div>
                    <strong>{year}</strong>
                    <span>{text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*  QUOTE  */}
      <section className="section-sm" style={{ background: 'var(--red)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,4vw,52px)', fontWeight: 300, fontStyle: 'italic', color: '#fff', lineHeight: 1.3 }}>
            « Entre la vision et l'exécution...<br />il y a l'intelligence culturelle. »
          </p>
          <p style={{ marginTop: 16, fontSize: 11, letterSpacing: 3, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', fontWeight: 600 }}>
            MCC Partners - Philosophie Fondatrice
          </p>
        </div>
      </section>

    </main>
  )
}
