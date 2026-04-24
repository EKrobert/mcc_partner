import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Pages.css'
import './Recrutement.css'

const profiles = [
  {
    icon: '💻',
    title: 'Développeurs & Tech',
    color: 'var(--red)',
    tags: ['Full Stack', 'Mobile', 'DevOps', 'Data Engineer', 'IA / ML'],
    desc: 'Profils techniques marocains formés aux standards internationaux, maîtrisant les environnements chinois (Alibaba Cloud, Huawei, WeChat API).',
  },
  {
    icon: '⚙️',
    title: 'Ingénieurs & Industrie',
    color: 'var(--green)',
    tags: ['Génie Civil', 'Mécanique', 'Électrique', 'Logistique', 'Qualité'],
    desc: 'Ingénieurs opérationnels pour les projets industriels, les zones franches et les chantiers d\'infrastructure liés à Nador West Med et Tanger Med.',
  },
  {
    icon: '🌐',
    title: 'Profils Bilingues & Commerciaux',
    color: 'var(--gold-dark)',
    tags: ['FR / AR / ZH', 'Business Dev', 'Export Manager', 'Interprète', 'Commercial B2B'],
    desc: 'Talents marocains parlant mandarin ou ayant une expérience en Chine — profils rares et très recherchés pour la médiation culturelle et commerciale.',
  },
  {
    icon: '📊',
    title: 'Finance, Juridique & RH',
    color: 'var(--red)',
    tags: ['Comptabilité', 'Droit des affaires', 'RH', 'Compliance', 'Audit'],
    desc: 'Experts des réglementations marocaines et des normes chinoises pour sécuriser l\'implantation administrative, fiscale et sociale.',
  },
  {
    icon: '🏗',
    title: 'Management & Direction',
    color: 'var(--green)',
    tags: ['Directeur Général', 'Country Manager', 'DRH', 'DAF', 'Chef de Projet'],
    desc: 'Cadres dirigeants capables de piloter une entité locale en conformité avec les attentes des sièges chinois — bilinguisme et leadership interculturel.',
  },
  {
    icon: '🎓',
    title: 'Jeunes Diplômés & Alternance',
    color: 'var(--gold-dark)',
    tags: ['Stage PFE', 'Alternance', 'VIE', 'Graduate Program', 'Junior'],
    desc: 'Partenariat académique avec les grandes écoles marocaines pour former des promotions adaptées aux besoins spécifiques des entreprises chinoises.',
  },
]

const avantages = [
  {
    icon: '🗺',
    title: 'Connaissance du marché local',
    text: 'MCC Partners maîtrise le tissu économique marocain, les bassins d\'emploi par région et les filières universitaires productrices de talents adaptés à vos besoins.',
  },
  {
    icon: '🌉',
    title: 'Intelligence culturelle sino-marocaine',
    text: 'Nous sélectionnons des profils capables de travailler efficacement avec des équipes chinoises — sensibilité culturelle, codes managériaux et protocoles d\'affaires.',
  },
  {
    icon: '⚡',
    title: 'Mise en relation rapide',
    text: 'Grâce à notre réseau d\'entreprises partenaires, d\'écoles et d\'associations professionnelles, nous accélérons le sourcing et réduisons vos délais de recrutement.',
  },
  {
    icon: '📋',
    title: 'Accompagnement administratif',
    text: 'Contrats de travail conformes au droit marocain, procédures CNSS, déclarations fiscales — nous gérons la complexité administrative pour vous.',
  },
  {
    icon: '🎓',
    title: 'Partenariat académique',
    text: 'Collaboration avec les universités et grandes écoles marocaines pour créer des formations sur-mesure et des pipelines de recrutement adaptés à vos activités.',
  },
  {
    icon: '🔄',
    title: 'Suivi post-recrutement',
    text: 'Accompagnement pendant la période d\'intégration, médiation en cas de difficultés culturelles ou managériales, et ajustements si nécessaire.',
  },
]

const etapes = [
  { num: '01', title: 'Analyse du besoin', text: 'Réunion de cadrage pour comprendre votre secteur, vos exigences techniques, votre culture d\'entreprise et votre calendrier d\'implantation.' },
  { num: '02', title: 'Sourcing ciblé', text: 'Activation de notre réseau : écoles, associations professionnelles, plateformes locales et base de candidats qualifiés MCC Partners.' },
  { num: '03', title: 'Présélection & évaluation', text: 'Entretiens, tests techniques si nécessaire, vérification des références et évaluation de la compatibilité culturelle avec votre entreprise.' },
  { num: '04', title: 'Présentation des profils', text: 'Dossiers candidats complets transmis en français et en mandarin, avec notre recommandation argumentée pour chaque profil.' },
  { num: '05', title: 'Intégration & suivi', text: 'Accompagnement pendant les 3 premiers mois : onboarding, médiation culturelle et ajustements pour garantir une intégration réussie.' },
]

export default function Recrutement() {
  const [form, setForm] = useState({
    entreprise: '', contact: '', email: '', tel: '',
    secteur: '', profils: '', volume: '', delai: '', message: '',
  })
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

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="page-hero recrutement-hero">
        <div className="container">
          <div className="section-label">Service RH & Talent</div>
          <h1 className="display display-xl">
            Recrutement <em style={{ color: 'var(--red)' }}>Sino-Marocain</em>
          </h1>
          <p className="page-hero-sub">
            MCC Partners accompagne les entreprises chinoises implantées au Maroc dans
            le recrutement de profils locaux qualifiés — développeurs, ingénieurs, cadres bilingues
            et experts sectoriels adaptés à votre culture d'entreprise.
          </p>
          <div style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
            <a href="#contact-recrutement" className="btn btn-primary btn-lg">
              Déposer un besoin de recrutement
            </a>
            <a href="#profils" className="btn btn-outline btn-lg">
              Voir les profils disponibles
            </a>
          </div>
          {/* Badges */}
          <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
            {[
              ['🇲🇦', 'Marché marocain', 'var(--green)'],
              ['🇨🇳', 'Entreprises chinoises', 'var(--red)'],
              ['🎓', 'Partenariats académiques', 'var(--gold-dark)'],
            ].map(([emoji, label, color]) => (
              <span key={label} className="recru-badge" style={{ borderColor: `${color}40`, color, background: `${color}10` }}>
                {emoji} {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHIFFRES CLÉS ────────────────────────────────────────── */}
      <div className="recru-stats-bar">
        <div className="container recru-stats-inner">
          {[
            ['500+', 'Candidats en base'],
            ['15+', 'Secteurs couverts'],
            ['72h', 'Premiers profils'],
            ['95%', 'Taux de satisfaction'],
          ].map(([val, label]) => (
            <div key={label} className="recru-stat">
              <span className="recru-stat-num">{val}</span>
              <span className="recru-stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── INTRO SERVICE ─────────────────────────────────────────── */}
      <section className="section">
        <div className="container recru-intro-grid">
          <div>
            <div className="section-label">Notre Service</div>
            <h2 className="display display-md">
              Le bon profil,<br />
              <em style={{ color: 'var(--red)' }}>au bon moment</em>
            </h2>
            <p className="recru-intro-text">
              S'implanter au Maroc, c'est aussi s'entourer des bons talents locaux.
              MCC Partners agit comme votre partenaire RH de confiance — nous connaissons
              le marché de l'emploi marocain, les codes culturels sino-marocains et les
              exigences des entreprises chinoises en termes de rigueur et de performance.
            </p>
            <p className="recru-intro-text">
              Que vous cherchiez un développeur senior, un ingénieur pour votre site industriel
              ou un Country Manager bilingue mandarin-français, nous sourçons, évaluons et
              vous présentons des candidats prêts à contribuer dès le premier jour.
            </p>
            <NavLink to="/contact" className="btn btn-outline" style={{ marginTop: 24 }}>
              Nous contacter →
            </NavLink>
          </div>
          <div className="recru-intro-visual">
            <div className="recru-visual-card recru-vc-red">
              <div className="recru-vc-icon">🏭</div>
              <strong>Entreprises Chinoises</strong>
              <span>Installées ou en cours d'implantation au Maroc</span>
            </div>
            <div className="recru-arrow">→</div>
            <div className="recru-visual-card recru-vc-gold">
              <div className="recru-vc-icon">🤝</div>
              <strong>MCC Partners RH</strong>
              <span>Sourcing · Évaluation · Médiation culturelle</span>
            </div>
            <div className="recru-arrow">→</div>
            <div className="recru-visual-card recru-vc-green">
              <div className="recru-vc-icon">🎓</div>
              <strong>Talents Marocains</strong>
              <span>Qualifiés, bilingues et culturellement adaptés</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROFILS ──────────────────────────────────────────────── */}
      <section className="section" id="profils" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="section-label green">Profils Disponibles</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
            <h2 className="display display-md">
              Les talents que nous<br /><em style={{ color: 'var(--green)' }}>vous trouvons</em>
            </h2>
            <p style={{ maxWidth: 360, fontSize: 14, color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7 }}>
              Chaque profil est évalué sur ses compétences techniques, sa maîtrise linguistique
              et sa compatibilité avec les codes managériaux chinois.
            </p>
          </div>
          <div className="profiles-grid">
            {profiles.map((p, i) => (
              <div key={i} className="profile-card card" style={{ borderTopColor: p.color }}>
                <div className="profile-icon">{p.icon}</div>
                <h3 className="profile-title" style={{ color: p.color }}>{p.title}</h3>
                <p className="profile-desc">{p.desc}</p>
                <div className="profile-tags">
                  {p.tags.map(t => (
                    <span key={t} className="profile-tag" style={{ borderColor: `${p.color}30`, color: p.color, background: `${p.color}08` }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALEUR AJOUTÉE ───────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-label">Valeur Ajoutée</div>
          <h2 className="display display-md" style={{ marginBottom: 8 }}>
            Pourquoi choisir<br /><em style={{ color: 'var(--red)' }}>MCC Partners RH ?</em>
          </h2>
          <p style={{ color: 'var(--muted)', fontWeight: 300, maxWidth: 560, marginBottom: 56 }}>
            Notre double ancrage marocain et chinois fait toute la différence.
          </p>
          <div className="avantages-grid">
            {avantages.map((a, i) => (
              <div key={i} className="avantage-card card">
                <div className="avantage-icon">{a.icon}</div>
                <h3 className="avantage-title">{a.title}</h3>
                <p className="avantage-text">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESSUS ────────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="section-label gold">Notre Processus</div>
          <h2 className="display display-md" style={{ marginBottom: 56 }}>
            5 étapes vers le<br /><em style={{ color: 'var(--gold-dark)' }}>candidat idéal</em>
          </h2>
          <div className="etapes-list">
            {etapes.map((e, i) => (
              <div key={i} className="etape-item">
                <div className="etape-num">{e.num}</div>
                <div className="etape-connector" />
                <div className="etape-content card">
                  <h3 className="etape-title">{e.title}</h3>
                  <p className="etape-text">{e.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTENARIAT ACADÉMIQUE ───────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="academic-banner">
            <div className="academic-left">
              <div className="section-label green" style={{ marginBottom: 16 }}>Partenariat Académique</div>
              <h2 className="display display-md" style={{ marginBottom: 20 }}>
                Former les talents<br /><em style={{ color: 'var(--green)' }}>de demain</em>
              </h2>
              <p style={{ fontSize: 14, color: 'var(--muted)', fontWeight: 300, lineHeight: 1.85, marginBottom: 24 }}>
                MCC Partners collabore avec les universités et grandes écoles marocaines pour
                concevoir des formations adaptées aux besoins des entreprises chinoises.
                Stages, alternances, Graduate Programs — nous créons le pipeline de talents
                dont votre entreprise a besoin pour se développer durablement au Maroc.
              </p>
              <div className="academic-schools">
                {['UM6P', 'ENSA', 'EHTP', 'ENCG', 'EST', 'FSJES', 'Écoles privées'].map(s => (
                  <span key={s} className="school-chip">{s}</span>
                ))}
              </div>
            </div>
            <div className="academic-right">
              {[
                ['🏫', 'Universités partenaires', '12+'],
                ['👨‍🎓', 'Diplômés/an', '500+'],
                ['📚', 'Formations sur-mesure', 'Disponibles'],
                ['🌏', 'Profils sino-marocains', 'Base active'],
              ].map(([icon, label, val]) => (
                <div key={label} className="academic-stat">
                  <span>{icon}</span>
                  <div>
                    <strong>{val}</strong>
                    <small>{label}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FORMULAIRE ───────────────────────────────────────────── */}
      <section className="section" id="contact-recrutement" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Déposer un Besoin</div>
            <h2 className="display display-md">
              Parlez-nous de votre<br /><em style={{ color: 'var(--red)' }}>besoin en recrutement</em>
            </h2>
            <p style={{ color: 'var(--muted)', fontWeight: 300, maxWidth: 520, margin: '16px auto 0' }}>
              Notre équipe vous recontacte sous 48h avec une première proposition de profils.
            </p>
          </div>

          <div className="recru-form-wrap">
            <div className="card recru-form-card">
              {submitted ? (
                <div className="recru-success">
                  <div style={{ fontSize: 56, marginBottom: 16 }}></div>
                  <h3>Demande Enregistrée !</h3>
                  <p>Notre équipe RH analysera votre besoin et vous recontactera sous 48h avec une première sélection de profils.</p>
                  <p style={{ marginTop: 8, color: 'var(--red)', fontWeight: 500 }}>🇲🇦 × 🇨🇳 — MCC Partners RH</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="form-title">Formulaire de Recrutement</h3>
                  <p className="form-subtitle">Réservé aux entreprises chinoises au Maroc</p>

                  <div style={{ background: 'var(--red-tint)', border: '1px solid rgba(227,27,24,0.2)', borderRadius: 8, padding: '12px 16px', marginBottom: 28, display: 'flex', gap: 10, alignItems: 'center' }}>
                    <span>🇨🇳</span>
                    <span style={{ fontSize: 13, color: 'var(--red)', fontWeight: 400 }}>
                      Ce service est dédié aux entreprises chinoises implantées ou en cours d'implantation au Maroc.
                    </span>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Nom de l'entreprise *</label>
                      <input className="form-input" required placeholder="Raison sociale" value={form.entreprise} onChange={update('entreprise')} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Contact *</label>
                      <input className="form-input" required placeholder="Prénom Nom" value={form.contact} onChange={update('contact')} />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Email *</label>
                      <input className="form-input" type="email" required placeholder="email@company.cn" value={form.email} onChange={update('email')} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">WeChat / Téléphone</label>
                      <input className="form-input" placeholder="+86 / +212..." value={form.tel} onChange={update('tel')} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Secteur d'activité *</label>
                    <select className="form-select" required value={form.secteur} onChange={update('secteur')}>
                      <option value="">Sélectionner</option>
                      {['Industrie & Manufacturing', 'Technologie & IT', 'Commerce & Distribution',
                        'Logistique & Transport', 'Énergie & Environnement', 'BTP & Infrastructure',
                        'Finance & Services', 'Agroalimentaire', 'Autre'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Type(s) de profils recherchés *</label>
                      <select className="form-select" required value={form.profils} onChange={update('profils')}>
                        <option value="">Sélectionner</option>
                        {['Développeurs & Tech', 'Ingénieurs & Industrie', 'Profils Bilingues',
                          'Finance & Juridique', 'Management & Direction', 'Jeunes Diplômés', 'Plusieurs types'].map(o => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Volume estimé</label>
                      <select className="form-select" value={form.volume} onChange={update('volume')}>
                        <option value="">Sélectionner</option>
                        <option>1 poste</option>
                        <option>2 à 5 postes</option>
                        <option>5 à 10 postes</option>
                        <option>10+ postes</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Délai souhaité</label>
                    <select className="form-select" value={form.delai} onChange={update('delai')}>
                      <option value="">Sélectionner</option>
                      <option>Urgent (moins d'1 mois)</option>
                      <option>1 à 3 mois</option>
                      <option>3 à 6 mois</option>
                      <option>Plus de 6 mois</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Description du besoin *</label>
                    <textarea
                      className="form-textarea"
                      required
                      rows={5}
                      placeholder="Décrivez les postes à pourvoir, les compétences requises, les langues souhaitées, le lieu de travail (Casablanca, Nador, Tanger...) et toute autre exigence spécifique..."
                      value={form.message}
                      onChange={update('message')}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-full btn-lg" disabled={loading}>
                    {loading ? 'Envoi en cours...' : 'Soumettre mon Besoin de Recrutement'}
                  </button>
                  <p style={{ fontSize: 11, color: 'var(--muted)', textAlign: 'center', marginTop: 12, fontWeight: 300 }}>
                    Réponse sous 48h · Confidentialité garantie · Service gratuit pour la mise en relation initiale
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar info */}
            <div className="recru-form-side">
              <div className="card" style={{ padding: 28, marginBottom: 16 }}>
                <h4 style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)', marginBottom: 20 }}>
                  📞 Contact Direct
                </h4>
                {[
                  ['📧', 'recrutement@mcc-partners.ma'],
                  ['📱', '+212 668-473658'],
                  ['💬', 'WeChat : MCC-RH'],
                ].map(([icon, val]) => (
                  <div key={val} style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12, fontSize: 13, color: 'var(--ink-mid)', fontWeight: 300 }}>
                    <span>{icon}</span><span>{val}</span>
                  </div>
                ))}
              </div>

              <div className="card" style={{ padding: 28, marginBottom: 16, borderTop: '3px solid var(--green)' }}>
                <h4 style={{ fontSize: 14, fontWeight: 600, color: 'var(--green)', marginBottom: 16 }}>
                  ✓ Ce service inclut
                </h4>
                {[
                  'Analyse gratuite du besoin',
                  'Sourcing dans notre réseau',
                  'Présélection des candidats',
                  'Dossiers FR + ZH',
                  'Suivi post-recrutement',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', gap: 8, marginBottom: 10, fontSize: 13, color: 'var(--ink-mid)', fontWeight: 300 }}>
                    <span style={{ color: 'var(--green)', fontWeight: 600 }}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="card" style={{ padding: 28, background: 'var(--red-tint)', borderColor: 'rgba(227,27,24,0.2)' }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>⏱</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--red)', marginBottom: 6 }}>
                  Premiers profils sous 72h
                </div>
                <div style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 300, lineHeight: 1.6 }}>
                  Dès réception de votre demande, notre équipe active son réseau et vous présente une première sélection de candidats.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
