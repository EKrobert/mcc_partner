import { useState } from 'react'
import './Pages.css'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', tel: '', entreprise: '', objet: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)

  const update = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <main style={{ paddingTop: 80 }}>

      <section className="page-hero contact-hero">
        <div className="container">
          <div className="section-label">Nous Rejoindre</div>
          <h1 className="display display-lg">Contactez <em>MCC Partners</em></h1>
          <p className="page-hero-sub">
            Que vous soyez une entreprise chinoise souhaitant s'implanter en Afrique via le Maroc,
            ou une entreprise marocaine cherchant à accéder au marché chinois - parlons-en.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">

          {/* Left - Info */}
          <div className="contact-info">
            <div className="section-label">Nos coordonnées</div>
            <h2 className="display display-md" style={{ marginBottom: 32 }}>
              Construisons votre<br /><em>Trajectoire</em>
            </h2>

            <div className="contact-items">
              {[
                ['📍', 'Siège Principal', 'Oujda - Région de l\'Oriental, Maroc'],
                ['📧', 'Email', 'contact@mcc-partners.ma'],
                ['📱', 'Téléphone / WhatsApp', '+212 668-473658'],
                ['💬', 'WeChat', 'MCC-Partners-Officiel'],
                ['🌐', 'Site Web', 'mcc-partners.ma'],
              ].map(([icon, label, value]) => (
                <div key={label} className="contact-item">
                  <div className="contact-icon">{icon}</div>
                  <div>
                    <div className="contact-label">{label}</div>
                    <div className="contact-value">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-socials card">
              <div className="label" style={{ color: 'var(--muted)', marginBottom: 14 }}>Présence sur les réseaux</div>
              <div className="socials-grid">
                {[
                  ['LinkedIn', '💼', 'Profil officiel'],
                  ['WeChat', '💬', '微信公众号'],
                  ['Douyin', '🎵', 'TikTok Chine'],
                  ['Instagram', '📸', '@mcc.partners'],
                  ['Facebook', '👥', 'Page MCC'],
                  ['YouTube', '▶️', 'Chaîne MCC'],
                ].map(([name, emoji, sub]) => (
                  <div key={name} className="social-item">
                    <span>{emoji}</span>
                    <div>
                      <strong>{name}</strong>
                      <small>{sub}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact-langs card">
              <div className="label" style={{ color: 'var(--muted)', marginBottom: 12 }}>Langues de communication</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {[['🇫🇷', 'Français'], ['🇲🇦', 'Arabe'], ['🇨🇳', '中文'], ['🇬🇧', 'English']].map(([f, l]) => (
                  <span key={l} className="lang-chip">{f} {l}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="contact-form-wrap">
            <div className="card" style={{ padding: '40px 36px' }}>
              {submitted ? (
                <div className="success-state" style={{ textAlign: 'center', padding: '20px 0' }}>
                  <div className="success-icon">✅</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: 'var(--green)', fontWeight: 400, marginBottom: 12 }}>
                    Message Envoyé !
                  </h3>
                  <p style={{ fontSize: 14, color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7 }}>
                    L'équipe MCC Partners vous répondra dans les <strong>48h ouvrées</strong>.
                    Toutes les langues sont acceptées - FR / AR / EN / ZH.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="form-title">Envoyer un Message</h3>
                  <p className="form-subtitle">Réponse sous 48h · FR / AR / EN / ZH</p>

                  <div className="form-group">
                    <label className="form-label">Prénom & Nom *</label>
                    <input className="form-input" required placeholder="Votre nom" value={form.nom} onChange={update('nom')} />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Email *</label>
                      <input className="form-input" type="email" required placeholder="votre@email.com" value={form.email} onChange={update('email')} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Téléphone</label>
                      <input className="form-input" placeholder="+212 / +86..." value={form.tel} onChange={update('tel')} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Entreprise</label>
                    <input className="form-input" placeholder="Votre entreprise" value={form.entreprise} onChange={update('entreprise')} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Objet de votre demande</label>
                    <select className="form-select" value={form.objet} onChange={update('objet')}>
                      <option value="">Sélectionner</option>
                      <option>Investissement au Maroc</option>
                      <option>Export vers la Chine</option>
                      <option>Partenariat industriel</option>
                      <option>Webinaire 11 Mai 2026</option>
                      <option>Salon MCC 2026 - Stand</option>
                      <option>Salon MCC 2026 - Invitation</option>
                      <option>Autre renseignement</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea
                      className="form-textarea"
                      required
                      rows={5}
                      placeholder="Décrivez votre projet ou votre demande..."
                      value={form.message}
                      onChange={update('message')}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-full btn-lg" disabled={loading}>
                    {loading ? '⏳ Envoi en cours...' : '✉ Envoyer Mon Message'}
                  </button>
                  <p style={{ fontSize: 11, color: 'var(--muted)', textAlign: 'center', marginTop: 12, fontWeight: 300 }}>
                    Vos données sont confidentielles et ne seront pas partagées.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* ── MAP / LOCATION ───────────────────────────────────────── */}
      <section className="section-sm" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="section-label green">Localisation</div>
          <h2 className="display display-md" style={{ marginBottom: 32 }}>Le Cœur de l'<em>Oriental</em></h2>
          <div className="location-grid">
            {[
              { emoji: '🏙', title: 'Oujda', sub: 'Siège MCC Partners · Berceau d\'AfrikHub', color: 'var(--green)' },
              { emoji: '⚓', title: 'Nador West Med', sub: 'Hub logistique · Salon MCC 2026', color: 'var(--red)' },
              { emoji: '🚢', title: 'Tanger Med', sub: '1er port d\'Afrique & Méditerranée', color: 'var(--gold-dark)' },
              { emoji: '🌍', title: 'Casablanca', sub: 'Hub financier & commercial du Maroc', color: 'var(--green)' },
            ].map(l => (
              <div key={l.title} className="location-card card" style={{ borderTop: `3px solid ${l.color}` }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{l.emoji}</div>
                <strong style={{ fontSize: 15, color: 'var(--ink)', display: 'block', marginBottom: 4 }}>{l.title}</strong>
                <span style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 300 }}>{l.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
