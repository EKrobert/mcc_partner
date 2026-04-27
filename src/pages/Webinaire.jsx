import { useState } from 'react'
import { speakers } from '../data'
import './Pages.css'
import './Webinaire.css'

export default function Webinaire() {
  const [form, setForm] = useState({ nom: '', email: '', tel: '', entreprise: '', pays: '', secteur: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  const update = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

  return (
    <main style={{ paddingTop: 80 }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="page-hero webinaire-hero">
        <div className="container wh-grid">
          <div>
            <div className="section-label">Événement en ligne</div>
            <h1 className="display display-lg">Webinaire <em>Stratégique</em></h1>
            <p className="page-hero-sub">
              10e anniversaire de la visite royale en Chine (2016) - moteur des grands projets structurants actuels.
              Un événement pour connecter les décideurs marocains et chinois.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
              <span className="wh-badge red">📡 En ligne</span>
              <span className="wh-badge green">✓ Accès gratuit</span>
              <span className="wh-badge gold">🕙 10:00 GMT+1</span>
            </div>
          </div>
          <div className="countdown-card card">
            <div className="label" style={{ color: 'var(--red)', marginBottom: 8 }}>Date de l'événement</div>
            <div className="countdown-date">11 Mai 2026</div>
            <div className="countdown-boxes">
              {[['40', 'Jours'], ['11', 'Heures'], ['30', 'Min']].map(([v, l]) => (
                <div key={l} className="cbox">
                  <span>{v}</span>
                  <small>{l}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────── */}
      <section className="section">
        <div className="container webinaire-grid">

          {/* Infos left */}
          <div className="webinaire-info">
            <div className="section-label">Programme</div>
            <h2 className="display display-md" style={{ marginBottom: 24 }}>Ce que vous<br /><em>découvrirez</em></h2>
            <ul className="programme-list">
              {[
                '10e anniversaire du partenariat Maroc–Chine 2016–2026',
                'Opportunités d\'investissement bilatéral 2026–2030',
                'Focus Nador West Med et potentiel de l\'Oriental',
                '0% droits de douane Chine–Afrique - impact concret',
                'Présentation des projets MCC Partners',
                'Networking & identification d\'opportunités',
              ].map((item, i) => (
                <li key={i}>
                  <span className="prog-dot" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="section-label" style={{ marginTop: 48 }}>Intervenants</div>
            <div className="speakers-list">
              {speakers.map((s, i) => (
                <div key={i} className="speaker-card card">
                  <div className="speaker-flag">{s.flag}</div>
                  <div>
                    <div className="speaker-name">{s.name}</div>
                    <div className="speaker-role">{s.role}</div>
                    <div className="speaker-bio">{s.bio}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form right */}
          <div className="webinaire-form-wrap">
            <div className="card" style={{ padding: '40px 36px', position: 'sticky', top: 100 }}>
              {submitted ? (
                <div className="success-state">
                  <div className="success-icon">✅</div>
                  <h3>Inscription Confirmée !</h3>
                  <p>Vous recevrez vos informations de connexion par email avant le 11 Mai 2026.</p>
                  <p style={{ marginTop: 8 }}>Bienvenue dans l'écosystème MCC Partners 🇲🇦🇨🇳</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="form-title">Inscription au Webinaire</h3>
                  <p className="form-subtitle">Gratuit · Confirmation par email</p>

                  <div className="form-group">
                    <label className="form-label">Prénom & Nom *</label>
                    <input className="form-input" required placeholder="Votre nom complet" value={form.nom} onChange={update('nom')} />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Email *</label>
                      <input className="form-input" type="email" required placeholder="email@entreprise.com" value={form.email} onChange={update('email')} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Téléphone</label>
                      <input className="form-input" placeholder="+212 / +86" value={form.tel} onChange={update('tel')} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Entreprise *</label>
                    <input className="form-input" required placeholder="Nom de votre entreprise" value={form.entreprise} onChange={update('entreprise')} />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Pays *</label>
                      <select className="form-select" required value={form.pays} onChange={update('pays')}>
                        <option value="">Sélectionner</option>
                        <option>Maroc</option>
                        <option>Chine</option>
                        <option>France</option>
                        <option>Autre pays africain</option>
                        <option>Autre</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Secteur</label>
                      <select className="form-select" value={form.secteur} onChange={update('secteur')}>
                        <option value="">Sélectionner</option>
                        <option>Industrie & Manufacturing</option>
                        <option>Commerce & Distribution</option>
                        <option>Agroalimentaire</option>
                        <option>Logistique & Transport</option>
                        <option>Finance & Investissement</option>
                        <option>Technologie</option>
                        <option>Énergie Renouvelable</option>
                        <option>Autre</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message (optionnel)</label>
                    <textarea className="form-textarea" placeholder="Vos attentes pour ce webinaire..." value={form.message} onChange={update('message')} />
                  </div>

                  <button type="submit" className="btn btn-primary btn-full btn-lg" disabled={loading}>
                    {loading ? '⏳ Inscription en cours...' : '✓ Confirmer Mon Inscription'}
                  </button>
                  <p style={{ fontSize: 11, color: 'var(--muted)', textAlign: 'center', marginTop: 12, fontWeight: 300 }}>
                    Accès gratuit · Confirmation par email · Places limitées
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* ── REPLAY ───────────────────────────────────────────────── */}
      <section className="section-sm" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="section-label">Replays disponibles</div>
          <h2 className="display display-md" style={{ marginBottom: 32 }}>Sessions <em>précédentes</em></h2>
          <div className="replays-grid">
            {[
              { title: 'Webinaire MCC - Janvier 2026', dur: '1h45', views: '342' },
              { title: 'Session export argan - Déc 2025', dur: '55 min', views: '218' },
              { title: 'Forum B2B Oujda - Nov 2025', dur: '2h10', views: '487' },
            ].map((r, i) => (
              <div key={i} className="replay-card card">
                <div className="replay-play">▶</div>
                <div>
                  <div className="replay-title">{r.title}</div>
                  <div className="replay-meta">{r.dur} · {r.views} vues</div>
                </div>
                <div className="replay-dl">⬇</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
