export const companies = [
  {
    id: '001', flag: '🇨🇳', country: 'Chine', isChinese: true,
    name: 'Shenzhen Tech Solutions',
    sector: 'Technologie & IoT',
    contact: 'Wang Lei',
    email: 'wang@sztech.cn',
    stand: 'A-12',
    description: 'Solutions IoT et automatisation industrielle pour marchés émergents africains.',
  },
  {
    id: '002', flag: '🇨🇳', country: 'Chine', isChinese: true,
    name: 'Guangzhou Trade Co.',
    sector: 'Commerce & Distribution',
    contact: 'Li Mei',
    email: 'li.mei@gztrade.cn',
    stand: 'B-05',
    description: 'Import-export de produits manufacturés vers l\'Afrique du Nord et subsaharienne.',
  },
  {
    id: '003', flag: '🇨🇳', country: 'Chine', isChinese: true,
    name: 'BYD Maghreb',
    sector: 'Énergie & Mobilité',
    contact: 'Zhang Wei',
    email: 'zhang@byd-maghreb.cn',
    stand: 'C-01',
    description: 'Véhicules électriques et solutions énergétiques renouvelables pour l\'Afrique du Nord.',
  },
  {
    id: '004', flag: '🇨🇳', country: 'Chine', isChinese: true,
    name: 'Hunan Green Agriculture',
    sector: 'Agroalimentaire',
    contact: 'Chen Fang',
    email: 'chen@hunangreen.cn',
    stand: 'A-07',
    description: 'Acheteur premium de produits agricoles marocains pour le marché chinois (argan, olive).',
  },
  {
    id: '005', flag: '🇲🇦', country: 'Maroc', isChinese: false,
    name: 'AfrikHub Maroc',
    sector: 'Logistique & Commerce',
    contact: 'Youssef Benali',
    email: 'youssef@afrikhub.ma',
    description: 'Plateforme de sourcing et distribution de produits marocains premium vers l\'Asie.',
  },
  {
    id: '006', flag: '🇲🇦', country: 'Maroc', isChinese: false,
    name: 'Myrass Cosmétiques',
    sector: 'Cosmétique & Argan',
    contact: 'Fatima Ouali',
    email: 'f.ouali@myrass.ma',
    description: 'Huile d\'argan et cosmétiques naturels certifiés export Chine - packaging premium.',
  },
  {
    id: '007', flag: '🇲🇦', country: 'Maroc', isChinese: false,
    name: 'Oriental Olive Export',
    sector: 'Agroalimentaire',
    contact: 'Hassan Khattabi',
    email: 'h.khattabi@olivexport.ma',
    description: 'Huile d\'olive AOC de la région de l\'Oriental - export certifié vers l\'Asie.',
  },
  {
    id: '008', flag: '🇲🇦', country: 'Maroc', isChinese: false,
    name: 'NWM Logistics',
    sector: 'Logistique & Transport',
    contact: 'Rachid Tazi',
    email: 'r.tazi@nwm-logistics.ma',
    description: 'Opérateur logistique basé à Nador West Med - transit international Maroc–Asie.',
  },
]

export const speakers = [
  { flag: '🇨🇳', name: 'M. Lu', role: 'Partenaire Fondateur MCC - Chine', bio: 'Expert en investissements sino-africains, 25 ans d\'expérience en développement de marchés émergents.' },
  { flag: '🇨🇳', name: 'Mme Dai', role: 'Directrice Partenariats Sino-Africains', bio: 'Spécialiste des protocoles d\'affaires sino-marocains et de la Belt & Road Initiative.' },
  { flag: '🇲🇦', name: 'Youssef Benali', role: 'Co-Fondateur MCC Partners - Maroc', bio: 'MRE double nationalité franco-marocaine, fondateur AfrikHub, expert en commerce international.' },
  { flag: '🇲🇦', name: 'Hassan Khattabi', role: 'Expert Commerce International', bio: 'Spécialiste des accords de libre-échange et de l\'accès aux marchés africains et asiatiques.' },
]

export const stands = [
  { id: 'standard', name: 'Stand Standard', size: '9 m² (3×3)', details: ['1 table + 2 chaises', 'Connexion électrique', 'Wifi partagé'], price: '2 500€', acompte: '750€', color: 'var(--muted)' },
  { id: 'prestige', name: 'Stand Prestige', size: '18 m² (3×6)', details: ['Aménagement premium', 'Wifi dédié', 'Vitrine éclairée'], price: '4 500€', acompte: '1 350€', color: 'var(--gold-dark)', popular: true },
  { id: 'signature', name: 'Stand Signature', size: '36 m²', details: ['Emplacement prioritaire', 'Branding sur site', 'Lounge VIP inclus'], price: '8 500€', acompte: '2 550€', color: 'var(--red)' },
]

export const atouts = [
  { emoji: '🏛', color: 'var(--green)', title: 'Stabilité Institutionnelle', text: 'Le Maroc se distingue par une stabilité rare - facteur déterminant pour les investissements lourds et les partenariats à long terme.' },
  { emoji: '🤝', color: 'var(--red)', title: 'Accords de Libre-Échange', text: 'Seul pays africain avec un accord ALE avec les USA. Accès privilégié à l\'Europe (UE) et à l\'Afrique via la ZLECAf.' },
  { emoji: '📦', color: 'var(--gold-dark)', title: '0% Droits de Douane Chine', text: 'Dès mai 2026, la Chine lève les droits de douane pour le Maroc - opportunité historique pour l\'export premium marocain.' },
  { emoji: '⚓', color: 'var(--green)', title: 'Nador West Med', text: 'Nouveau pivot logistique de l\'Oriental - passerelle directe vers les marchés mondiaux sans intermédiaires.' },
  { emoji: '🌍', color: 'var(--red)', title: 'Porte d\'Entrée Africaine', text: '54 nations africaines accessibles via le hub marocain - diplomatie de confiance et réseaux établis.' },
  { emoji: '🌿', color: 'var(--gold-dark)', title: 'Produits Premium Export', text: 'Argan, huile d\'olive, Green Business - des produits d\'exception qui séduisent 1,4 milliard de consommateurs chinois.' },
]

export const values = [
  { icon: '🧭', title: 'Humanité & Intégrité', text: 'L\'éthique comme boussole. Nous priorisons les projets porteurs de sens, guidés par l\'honnêteté et la sincérité.' },
  { icon: '🌐', title: 'Intelligence Culturelle', text: 'Entre la vision et l\'exécution, il y a l\'intelligence culturelle. Nous traduisons les mentalités, pas seulement les mots.' },
  { icon: '🔗', title: 'Fiabilité & Long Terme', text: 'Nous construisons des destins communs. Vision Gagnant-Gagnant - un cercle vertueux où chaque partie prospère.' },
]

export const stats = [
  { value: '1000+', label: 'Ans d\'amitié', sub: 'Héritage historique Maroc–Chine' },
  { value: '54', label: 'Nations africaines', sub: 'Accessibles via le corridor marocain' },
  { value: '0%', label: 'Douane Chine', sub: 'Dès mai 2026 pour le Maroc' },
  { value: '1er', label: 'ALE Afrique–USA', sub: 'Seul accord africain avec les États-Unis' },
]

export const navLinks = [
  { label: 'Accueil',       path: '/' },
  { label: 'À Propos',      path: '/about' },
  { label: 'Atouts',        path: '/atouts' },
  { label: 'Recrutement',   path: '/recrutement' },
  { label: 'Webinaire',     path: '/webinaire' },
  { label: 'Salon',         path: '/salon' },
  { label: 'Contact',       path: '/contact' },
]
