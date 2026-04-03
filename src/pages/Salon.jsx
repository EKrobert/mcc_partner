import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { stands } from '../data'
import './Pages.css'
import './Salon.css'

export default function Salon() {
  const [searchParams] = useSearchParams()
  const [activeRoute, setActiveRoute] = useState(null) // null | 'chinese' | 'moroccan'
  const [selectedStand, setSelectedStand] = useState(null)
  const [step, setStep] = useState(0) // 0=choose, 1=form, 2=payment, 3=done
  const [marocDone, setMarocDone] = useState(false)
  const [loadingCN, setLoadingCN] = useState(false)
  const [loadingMA, setLoadingMA] = useState(false)
  const [formCN, setFormCN] = useState({ entreprise: '', contact: '', email: '', wechat: '', secteur: '', produits: '' })
  const [formMA, setFormMA] = useState({ nom: '', entreprise: '', email: '', tel: '', ville: '', secteur: '', profil: '', objectifs: '' })

  useEffect(() => {
    const p = searchParams.get('parcours')
    if (p === 'chinese' || p === 'moroccan') setActiveRoute(p)
  }, [searchParams])

  const updateCN = k => e => setFormCN(f => ({ ...f, [k]: e.target.value }))
  const updateMA = k => e => setFormMA(f => ({ ...f, [k]: e.target.value }))

  const submitCN = async (e) => {
    e.preventDefault()
    setLoadingCN(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoadingCN(false)
    setStep(3)
  }
  const submitMA = async (e) => {
    e.preventDefault()
    setLoadingMA(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoadingMA(false)
    setMarocDone(true)
  }

  return (
    <main style={{ paddingTop: 80 }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="page-hero salon-hero">
        <div className="container">
          <div className="section-label green">Événement Physique</div>
          <h1 className="display display-lg">Salon <em>Maroc China</em> Connect</h1>
          <p className="page-hero-sub">
            Le grand rendez-vous annuel B2B — région de l'Oriental, Nador West Med.
            Deux parcours distincts pour entreprises chinoises et marocaines.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
            <span className="wh-badge green">📍 Oriental, Maroc</span>
            <span className="wh-badge gold">📅 Fin 2026</span>
            <span className="wh-badge red">🏭 Nador West Med</span>
          </div>
        </div>
      </section>

      {/* ── ROUTE SELECTION ─────────────────────────────────────── */}
      {!activeRoute && (
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="section-label" style={{ justifyContent: 'center' }}>Choisissez votre parcours</div>
              <h2 className="display display-md">Deux portails,<br /><em>une même ambition</em></h2>
            </div>
            <div className="routes-grid">
              <div className="route-card route-chinese" onClick={() => setActiveRoute('chinese')}>
                <div className="route-flag">🇨🇳</div>
                <div className="route-tag label" style={{ color: 'var(--red)' }}>企业 · Entreprises Chinoises</div>
                <h3>Réservation de Stand</h3>
                <p>Accédez au marché marocain et africain. Choisissez votre espace d'exposition et réservez en ligne avec paiement sécurisé.</p>
                <ul className="route-features">
                  <li>✓ Stands 9 m² à 36 m²</li>
                  <li>✓ Reçu numérique immédiat</li>
                  <li>✓ Accès au réseau B2B MCC</li>
                </ul>
                <button className="btn btn-primary">Réserver un Stand →</button>
              </div>

              <div className="route-card route-moroccan" onClick={() => setActiveRoute('moroccan')}>
                <div className="route-flag">🇲🇦</div>
                <div className="route-tag label" style={{ color: 'var(--green)' }}>شركات · Entreprises Marocaines</div>
                <h3>Invitation Visiteur</h3>
                <p>Rencontrez des investisseurs chinois qualifiés. Accès gratuit sur demande d'invitation officielle — places limitées.</p>
                <ul className="route-features">
                  <li>✓ Accès gratuit</li>
                  <li>✓ Badge nominatif officiel</li>
                  <li>✓ Networking B2B ciblé</li>
                </ul>
                <button className="btn btn-green">Demander une Invitation →</button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── CHINESE ROUTE ────────────────────────────────────────── */}
      {activeRoute === 'chinese' && (
        <section className="section">
          <div className="container">
            <button className="back-btn" onClick={() => { setActiveRoute(null); setStep(0); setSelectedStand(null) }}>
              ← Retour aux parcours
            </button>

            {/* Step indicator */}
            <div className="steps">
              {['Choisir un stand', 'Vos coordonnées', 'Paiement'].map((s, i) => (
                <div key={i} className={`step ${step >= i ? 'active' : ''} ${step > i ? 'done' : ''}`}>
                  <div className="step-num">{step > i ? '✓' : i + 1}</div>
                  <span>{s}</span>
                  {i < 2 && <div className="step-line" />}
                </div>
              ))}
            </div>

            {/* Step 0 — Stand selection */}
            {step === 0 && (
              <div className="stands-section">
                <h2 className="display display-md" style={{ marginBottom: 8 }}>Choisissez votre <em>Stand</em></h2>
                <p style={{ color: 'var(--muted)', fontWeight: 300, marginBottom: 40 }}>Sélectionnez la formule adaptée à vos besoins</p>
                <div className="stands-grid">
                  {stands.map(s => (
                    <div
                      key={s.id}
                      className={`stand-card card ${selectedStand?.id === s.id ? 'selected' : ''} ${s.popular ? 'popular' : ''}`}
                      onClick={() => setSelectedStand(s)}
                      style={{ borderTopColor: selectedStand?.id === s.id ? s.color : 'var(--border)' }}
                    >
                      {s.popular && <div className="stand-badge">⭐ Populaire</div>}
                      <h3 className="stand-name">{s.name}</h3>
                      <div className="stand-size">{s.size}</div>
                      <ul className="stand-features">
                        {s.details.map((d, i) => <li key={i}>✓ {d}</li>)}
                      </ul>
                      <div className="stand-price">{s.price}</div>
                      <div className="stand-acompte">Acompte : {s.acompte}</div>
                    </div>
                  ))}
                </div>
                <button
                  className="btn btn-primary btn-lg"
                  style={{ marginTop: 32 }}
                  disabled={!selectedStand}
                  onClick={() => setStep(1)}
                >
                  Continuer avec {selectedStand?.name || '...'} →
                </button>
              </div>
            )}

            {/* Step 1 — Form */}
            {step === 1 && (
              <div className="cn-form-wrap">
                <div>
                  <div className="selected-stand-recap card">
                    <strong>Stand sélectionné :</strong> {selectedStand?.name} — {selectedStand?.price}
                    <button onClick={() => setStep(0)} style={{ color: 'var(--red)', fontSize: 12, marginLeft: 12 }}>Modifier</button>
                  </div>
                  <h2 className="display display-md" style={{ margin: '24px 0 32px' }}>Vos <em>Coordonnées</em></h2>
                  <form onSubmit={(e) => { e.preventDefault(); setStep(2) }}>
                    <div className="form-group">
                      <label className="form-label">Nom de l'entreprise *</label>
                      <input className="form-input" required placeholder="Raison sociale" value={formCN.entreprise} onChange={updateCN('entreprise')} />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Nom du contact *</label>
                        <input className="form-input" required placeholder="Prénom Nom" value={formCN.contact} onChange={updateCN('contact')} />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Email *</label>
                        <input className="form-input" type="email" required placeholder="email@company.cn" value={formCN.email} onChange={updateCN('email')} />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">WeChat / Téléphone</label>
                      <input className="form-input" placeholder="+86..." value={formCN.wechat} onChange={updateCN('wechat')} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Secteur d'activité *</label>
                      <select className="form-select" required value={formCN.secteur} onChange={updateCN('secteur')}>
                        <option value="">Sélectionner</option>
                        {['Industrie & Manufacturing', 'Commerce & Distribution', 'Agroalimentaire', 'Logistique', 'Finance', 'Technologie', 'Énergie', 'Autre'].map(o => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Produits / Services à exposer</label>
                      <textarea className="form-textarea" placeholder="Décrivez ce que vous souhaitez présenter..." value={formCN.produits} onChange={updateCN('produits')} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg btn-full">Procéder au Paiement →</button>
                  </form>
                </div>
              </div>
            )}

            {/* Step 2 — Payment */}
            {step === 2 && (
              <div style={{ maxWidth: 640, margin: '0 auto' }}>
                <h2 className="display display-md" style={{ marginBottom: 32 }}>Récapitulatif & <em>Paiement</em></h2>
                <div className="card" style={{ padding: 28, marginBottom: 24 }}>
                  <div className="receipt-row"><span>Stand sélectionné</span><strong>{selectedStand?.name}</strong></div>
                  <div className="receipt-row"><span>Prix total</span><strong>{selectedStand?.price}</strong></div>
                  <div className="receipt-divider" />
                  <div className="receipt-row accent"><span>Acompte à régler (30%)</span><strong style={{ color: 'var(--red)', fontSize: 20 }}>{selectedStand?.acompte}</strong></div>
                  <div className="receipt-row muted"><span>Solde à 60 jours avant l'événement</span></div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label className="form-label">Mode de paiement</label>
                  {['💙 Alipay', '💚 WeChat Pay', '🏦 Virement bancaire'].map((m, i) => (
                    <div key={m} className={`payment-option ${i === 0 ? 'selected' : ''}`}>
                      <span>{m}</span>
                      {i === 0 && <span className="payment-check">●</span>}
                    </div>
                  ))}
                </div>

                <form onSubmit={submitCN}>
                  <button type="submit" className="btn btn-primary btn-lg btn-full" disabled={loadingCN}>
                    {loadingCN ? '⏳ Traitement en cours...' : `✓ Confirmer et Payer ${selectedStand?.acompte}`}
                  </button>
                </form>
              </div>
            )}

            {/* Step 3 — Done */}
            {step === 3 && (
              <div className="success-state" style={{ maxWidth: 540, margin: '0 auto', textAlign: 'center', padding: '40px 0' }}>
                <div className="success-icon">✅</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 36, color: 'var(--green)', fontWeight: 400, marginBottom: 12 }}>
                  Réservation Confirmée !
                </h3>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--muted)', fontWeight: 300, marginBottom: 8 }}>
                  Reçu n° <strong style={{ color: 'var(--ink)' }}>MCC-2026-0042</strong>
                </p>
                <p style={{ fontSize: 14, color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7 }}>
                  Votre stand <strong>{selectedStand?.name}</strong> est réservé.
                  Un email de confirmation vous sera envoyé sous 48h avec les détails logistiques.
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── MOROCCAN ROUTE ───────────────────────────────────────── */}
      {activeRoute === 'moroccan' && (
        <section className="section">
          <div className="container">
            <button className="back-btn" onClick={() => { setActiveRoute(null); setMarocDone(false) }}>
              ← Retour aux parcours
            </button>

            <div className="moroccan-grid">
              <div>
                <div className="section-label green">Entreprises Marocaines</div>
                <h2 className="display display-md" style={{ marginBottom: 16 }}>Demande d'<em>Invitation</em></h2>
                <p style={{ color: 'var(--muted)', fontWeight: 300, marginBottom: 32, lineHeight: 1.8 }}>
                  L'accès au Salon MCC est gratuit pour toutes les entreprises marocaines qualifiées.
                  Remplissez ce formulaire pour demander votre invitation officielle.
                </p>
                {[
                  ['✓ Accès gratuit', 'Aucun frais pour les visiteurs marocains', 'var(--green)'],
                  ['✓ Badge nominatif', 'Accès prioritaire aux conférences et ateliers', 'var(--green)'],
                  ['✓ Networking B2B', 'Rencontres ciblées avec investisseurs chinois qualifiés', 'var(--green)'],
                  ['✓ Places limitées', 'Confirmation de votre invitation sous 72h', 'var(--gold-dark)'],
                ].map(([title, sub, color]) => (
                  <div key={title} className="ma-feature">
                    <div className="ma-check" style={{ color, borderColor: color }}>{title}</div>
                    <span>{sub}</span>
                  </div>
                ))}
              </div>

              <div className="card" style={{ padding: '36px 32px' }}>
                {marocDone ? (
                  <div className="success-state">
                    <div className="success-icon">✅</div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 30, color: 'var(--green)', fontWeight: 400, marginBottom: 12 }}>
                      Demande Envoyée !
                    </h3>
                    <p style={{ fontSize: 14, color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7 }}>
                      Votre invitation officielle sera traitée sous 72h.
                      Vous recevrez votre badge QR code par email.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={submitMA}>
                    <h3 className="form-title">Invitation Officielle</h3>
                    <p className="form-subtitle">Accès gratuit · Badge nominatif</p>

                    <div className="form-group">
                      <label className="form-label">Prénom & Nom *</label>
                      <input className="form-input green" required placeholder="Votre nom complet" value={formMA.nom} onChange={updateMA('nom')} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Entreprise *</label>
                      <input className="form-input green" required placeholder="Raison sociale" value={formMA.entreprise} onChange={updateMA('entreprise')} />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Email *</label>
                        <input className="form-input green" type="email" required placeholder="email@entreprise.ma" value={formMA.email} onChange={updateMA('email')} />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Téléphone *</label>
                        <input className="form-input green" required placeholder="+212..." value={formMA.tel} onChange={updateMA('tel')} />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Ville *</label>
                        <select className="form-select green" required value={formMA.ville} onChange={updateMA('ville')}>
                          <option value="">Sélectionner</option>
                          {['Oujda', 'Nador', 'Casablanca', 'Rabat', 'Tanger', 'Fès', 'Marrakech', 'Autre'].map(o => <option key={o}>{o}</option>)}
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Secteur *</label>
                        <select className="form-select green" required value={formMA.secteur} onChange={updateMA('secteur')}>
                          <option value="">Sélectionner</option>
                          {['Agroalimentaire', 'Artisanat', 'Industrie', 'Commerce', 'Logistique', 'Finance', 'Technologie', 'Autre'].map(o => <option key={o}>{o}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Profil</label>
                      <select className="form-select green" value={formMA.profil} onChange={updateMA('profil')}>
                        <option value="">Sélectionner</option>
                        {['Chef d\'entreprise', 'Directeur Commercial', 'Investisseur', 'Responsable Export', 'Institutionnel', 'Autre'].map(o => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Objectifs pour le salon</label>
                      <textarea className="form-textarea green" placeholder="Trouver des partenaires, présenter mes produits..." value={formMA.objectifs} onChange={updateMA('objectifs')} />
                    </div>

                    <button type="submit" className="btn btn-green btn-full btn-lg" disabled={loadingMA}>
                      {loadingMA ? '⏳ Envoi en cours...' : '✓ Demander Mon Invitation'}
                    </button>
                    <p style={{ fontSize: 11, color: 'var(--muted)', textAlign: 'center', marginTop: 12, fontWeight: 300 }}>
                      Places limitées · Confirmation sous 72h
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── PLAN DU SALON ────────────────────────────────────────── */}
      <section className="section-sm" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="section-label green">Plan du Salon</div>
          <h2 className="display display-md" style={{ marginBottom: 32 }}>Carte <em>Interactive</em></h2>
          <div className="salon-map-wrap card">
            <div className="salon-map">
              <div className="map-hall ma" style={{ gridArea: 'ha' }}>HALL A<small>Stands Chinois</small></div>
              <div className="map-hall cn" style={{ gridArea: 'hb' }}>HALL B<small>Stands Chinois</small></div>
              <div className="map-center" style={{ gridArea: 'ct' }}>🎤<br /><strong>Scène Conférence</strong></div>
              <div className="map-hall ma2" style={{ gridArea: 'hc' }}>HALL C<small>Stands Marocains</small></div>
              <div className="map-hall cn2" style={{ gridArea: 'hd' }}>HALL D<small>Stands Marocains</small></div>
              <div className="map-entrance" style={{ gridArea: 'en' }}>▲ ENTRÉE PRINCIPALE</div>
            </div>
            <div className="map-legend">
              {[['var(--red)', 'Stands Chinois'], ['var(--green)', 'Stands Marocains'], ['var(--gold-dark)', 'Espace Conférence'], ['var(--muted)', 'Services']].map(([c, l]) => (
                <div key={l} className="legend-item">
                  <span style={{ background: c }} />
                  {l}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
