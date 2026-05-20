import { Treatment, Practitioner, Review, SkinConcern } from './types';

export const TREATMENTS: Treatment[] = [
  {
    id: 'anti-wrinkle',
    name: 'Advanced Wrinkle-Relaxing Injections',
    category: 'injectables',
    description: 'Precision clinical micro-injections utilizing premium botulinum toxins to gently soften dynamic muscle movement and restore a rested, youthful expression.',
    benefits: [
      'Softens crows feet, frown lines, and forehead dynamic creases',
      'Provides a subtle, natural, and rested brow elevation',
      'Prevents deeper set-in static expression lines over time',
      'Minimally invasive with negligible downtime'
    ],
    duration: '20 - 30 minutes',
    price: 'From £240',
    recommendedFor: ['Fine lines', 'Frown lines', 'Forehead creases', 'Crow’s feet']
  },
  {
    id: 'dermal-fillers',
    name: 'Bespoke Dermal Contour Fillers',
    category: 'injectables',
    description: 'Bespoke structural contouring utilizing pharmaceutical-grade cross-linked hyaluronic acid in lip, jawline, and tear trough compartments for facial rejuvenation.',
    benefits: [
      'Restores lost mid-face volume in the cheeks and temples',
      'Improves lower-face definition and jawline sharper contours',
      'Refines lip structural symmetry, fullness, and deep hydration',
      'Immediate lifting outcomes that evolve naturally over 12 months'
    ],
    duration: '45 - 60 minutes',
    price: 'From £350',
    recommendedFor: ['Volume loss', 'Lip definition', 'Sagging contours', 'Tired under-eyes']
  },
  {
    id: 'profhilo',
    name: 'Profhilo® Injectable Cell Hydration',
    category: 'injectables',
    description: 'An award-winning ultra-pure hyaluronic acid bio-remodeling treatment. Rather than filling space, it remodeling lax skin tissue via deep, cellular collagen remodeling.',
    benefits: [
      'Multi-level hydration and dramatic skin tone improvement',
      'Stimulates four distinct collagen and elastin types',
      'Significantly reduces skin laxity on the face, neck, or hands',
      'Creates a radiant, dewy skin foundation without adding generic volume'
    ],
    duration: '30 minutes',
    price: 'From £300',
    recommendedFor: ['Skin laxity', 'Dullness', 'Crepey skin', 'Dehydrated complexion']
  },
  {
    id: 'microneedling',
    name: 'Medical-Grade Microneedling (Dermapen4)',
    category: 'skin',
    description: 'Advanced automated collagen-induction therapy. Creates controlled clinical micro-incisions to set off the body’s natural skin remodeling cascades.',
    benefits: [
      'Accelerates cellular repair to smooth acne and traumatic scarring',
      'Stimulates native collagen synthesis and skin tightening',
      'Reduces pigmentation blotches, pore diameters, and sun impacts',
      'Deeply enhances the physiological absorption of active serums'
    ],
    duration: '45 minutes',
    price: 'From £160',
    recommendedFor: ['Acne scarring', 'Enlarged pores', 'Pigmentation', 'Fine lines']
  },
  {
    id: 'chemical-peels',
    name: 'Prescription Medical Chemical Peels',
    category: 'skin',
    description: 'Formulated clinical dermal peels containing optimized blends of Glycolic, Salicylic, and Lactic acids to shed damaged skin layers and reveal vital cellular coats.',
    benefits: [
      'Physiologically controls active acne breakouts and congestion',
      'Breaks down melanin and stubborn dark spots',
      'Exfoliates to immediately clarify texture and provide glow',
      'Highly customized strengths matched precisely to your tolerance'
    ],
    duration: '35 minutes',
    price: 'From £130',
    recommendedFor: ['Congested skin', 'Acne & blemishes', 'Pigmentation', 'Uneven texture']
  },
  {
    id: 'laser-skin',
    name: 'Laser Skin Photofractional Resurfacing',
    category: 'skin',
    description: 'State-of-the-art non-ablative laser therapy targeting deep pigmentation, superficial spider veins, and stubborn sun-damage lines with zero surface interruption.',
    benefits: [
      'Evens skin color tone and reduces post-acne redness',
      'Addresses vascular threads and localized rosacea patches',
      'Rebuilds elastic skin collagen fibers inside deeper layers',
      'Precision thermal scanning for highly comfortable administration'
    ],
    duration: '45 minutes',
    price: 'From £220',
    recommendedFor: ['Rosacea & redness', 'Sun damage', 'Pigmentation', 'Aura fine lines']
  },
  {
    id: 'iv-vitamin',
    name: 'Signature Intravenous Vitamin Infusion',
    category: 'wellness',
    description: 'Premium intravenous vitamin & antioxidant drips delivering maximum concentrations directly into your bloodstream, completely bypassing digestive absorption blockages.',
    benefits: [
      'Provides high doses of Vitamin C, Glutathione, and B-Complex',
      'Instant cell-level restoration, energy boost, and mental focus',
      'Improves overall liver detoxification pathways',
      'Promotes cellular glow from within'
    ],
    duration: '45 - 60 minutes',
    price: 'From £190',
    recommendedFor: ['Chronic tiredness', 'Dull dry skin', 'Low immune health', 'Cellular toxic load']
  },
  {
    id: 'fat-dissolving',
    name: 'Aqualyx® Lipotherapy Sculpting',
    category: 'wellness',
    description: 'Precision fat-dissolving micro-injections using sodium deoxycholate solutions to safely target and liquefy stubborn localized fat deposits that resist diet and sport.',
    benefits: [
      'Addresses double chin profiles, bra fat, and flanks',
      'Permanently dissolves localized fat tissue stores',
      'Naturally excreted by the lymphatic system over 4-6 weeks',
      'Safe, clinical alternative to surgical liposuction'
    ],
    duration: '30 - 45 minutes',
    price: 'From £260',
    recommendedFor: ['Localized fat pockets', 'Double chin contour', 'Submental volume']
  },
  {
    id: 'btl-exilis',
    name: 'BTL Exilis Elite™ Skin Tightening',
    category: 'skin',
    description: 'A revolutionary non-surgical option that combines focused radiofrequency and ultrasound energy to target deep tissue, tighten skin sagging, and trigger cellular collagen production.',
    benefits: [
      'Lifts and tightens facial sagging, wrinkles, and jowls',
      'Provides safe, clinically proven results with zero needles',
      'Stimulates fibroblasts to produce new systemic collagen',
      'Comfortable treatment with a soothing warm sensation'
    ],
    duration: '30 - 45 minutes',
    price: 'From £180',
    recommendedFor: ['Skin laxity', 'Frown lines', 'Sagging contours', 'Jowls reduction']
  },
  {
    id: 'mesotherapy',
    name: 'Advanced Cellular Mesotherapy',
    category: 'skin',
    description: 'A minimally invasive procedure where microscopic injections of a bespoke botanical-vitamin cocktail containing vitamins, mineral co-enzymes, hyaluronic acid, and amino acids are superfined directly into the mesodermal layer.',
    benefits: [
      'Delivers an instant cellular moisture surge and radiant glow',
      'Re-energizes dull, fatigued skin matrices immediately',
      'Boosts cellular metabolism and micro-circulation',
      'Corrects minor textural imperfections and fine dehydration folds'
    ],
    duration: '45 minutes',
    price: 'From £150',
    recommendedFor: ['Dullness', 'Dehydrated complexion', 'Fine lines', 'Fatigued skin']
  },
  {
    id: 'coolsculpting',
    name: 'CoolSculpting® Precision Cryolipolysis',
    category: 'wellness',
    description: 'The unique fat-freezing technology. A non-surgical, scientifically proven way to freeze and permanently reduce pockets of stubborn fat in trouble spots such as the abdomen, flanks, or chin in as little as one session.',
    benefits: [
      'Permanently eliminates targeted adipose fat cells via cryo-freezing',
      'Ideal for persistent localized areas resisting healthy diet and exercise',
      'Non-invasive with zero hospital downtime, surgical scars, or anesthesia',
      'Measurable results visible in as early as 4 to 8 weeks post-session'
    ],
    duration: '60 minutes',
    price: 'From £350',
    recommendedFor: ['Localized fat pockets', 'Double chin contour', 'Submental volume']
  },
  {
    id: 'massage-services',
    name: 'Signature Clinical Massage Therapies',
    category: 'wellness',
    description: 'Custom therapeutic back, neck, and full-body massages. Delivered by the best and most qualified therapist hands in London to offer muscular release and supreme mental restoration.',
    benefits: [
      'Relieves intense muscular tension, knots, and somatic stress',
      'Improves biological lymphatic drainage and systemic circulation',
      'Bespoke essential aromatherapy oils formulated individually',
      'Induces profound, restorative nervous system tranquilization'
    ],
    duration: '60 - 90 minutes',
    price: 'From £110',
    recommendedFor: ['Chronic tiredness', 'Somatic stress', 'Muscular tension & stiffness']
  }
];

export const PRACTITIONERS: Practitioner[] = [
  {
    name: 'Dr. Evelyn Sterling',
    role: 'Clinical Director & Lead Aesthetic Physician',
    credentials: 'MBChB, MRCP, BCAM (GMC No. 7482910)',
    bio: 'An alumnus of Edinburgh Medical School with over 12 years of clinical experience, Dr. Sterling specializes in undetectable injectables, full-face non-surgical liquid lifts, and regenerative cell therapies.',
    specialties: ['Liquid Lift Face Remodeling', 'Profhilo Remodeling', 'Advanced Toxin Therapy'],
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=500' // High quality doctor aesthetic image
  },
  {
    name: 'Nurse Practitioner Clara Vance',
    role: 'Senior Aesthetic Nurse Prescriber',
    credentials: 'BSc (Hons), RGN, NIP (NMC No. 03A8492E)',
    bio: 'Clara is a widely respected aesthetic nurse prescriber who works on holistic medical skincare protocols, combining medical-grade chemical exfoliation, lasers, and microneedling therapies.',
    specialties: ['Laser Skin Resurfacing', 'Dermapen4 Microneedling', 'Acne Treatment Pathways'],
    imageUrl: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=400&h=500' // Senior nurse clinician image
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Eleanor Pemberton',
    rating: 5,
    date: 'May 14, 2026',
    comment: 'Dr. Evelyn is genuinely stellar. She made me feel extremely comfortable during my Profhilo treatments, and the results are incredibly natural. My skin feels deeply moisturized and has an authentic glow, with absolutely zero volume bloating! Highly recommend this exceptional Chelsea clinic.',
    treatment: 'Profhilo® Injectable Cell Hydration'
  },
  {
    id: 'rev-2',
    author: 'James Harrington-Smyth',
    rating: 5,
    date: 'April 28, 2026',
    comment: 'I undertook a prescribed clinical microneedling course for deep acne scarring here at Beauty Zone. Clara is immensely knowledgeable and precise. The scarring has visibly leveled and faded by at least 80%. An absolute masterclass in aesthetic clinical care.',
    treatment: 'Medical-Grade Microneedling (Dermapen4)'
  },
  {
    id: 'rev-3',
    author: 'Victoria Sterling-Vane',
    rating: 5,
    date: 'May 06, 2026',
    comment: 'The wrinkle reduction is soft, authentic, and maintains physical expression perfectly. They didn’t freeze my face—they just made me look completely rested. Beautiful clinic, professional, stellar hygiene standards.',
    treatment: 'Advanced Wrinkle-Relaxing Injections'
  }
];

export const SKIN_CONCERNS: SkinConcern[] = [
  {
    id: 'aging',
    name: 'Fine Lines, Wrinkles & Volume Loss',
    description: 'Natural drops in systemic collagen and subcutaneous fat density usually lead to dynamic creasing, forehead shadows, flat cheek definitions, and global volume depletion.',
    suitableTreatments: ['anti-wrinkle', 'dermal-fillers', 'profhilo', 'btl-exilis']
  },
  {
    id: 'acne-text',
    name: 'Acne, Congestion & Scarring',
    description: 'Active follicular gland congestion and previous breakout damage cause localized hyperpigmentation, uneven textured fields, and persistent biological tissue scarring.',
    suitableTreatments: ['microneedling', 'chemical-peels', 'mesotherapy']
  },
  {
    id: 'dull-dry',
    name: 'Dehydration, Dullness & Loss of Glow',
    description: 'Environmental factors, slowing epidermal cell turnovers, and deep-pore moisture deficiencies can result in dry, crepe-like skin matrices that reflect light poorly.',
    suitableTreatments: ['profhilo', 'iv-vitamin', 'chemical-peels', 'mesotherapy']
  },
  {
    id: 'redness-spots',
    name: 'Pigmentation, Facial Rosacea & Redness',
    description: 'Ultraviolet sun exposure, broken facial capillaries, and localized systemic skin inflammatory factors trigger uneven melanin blocks and vascular facial threads.',
    suitableTreatments: ['laser-skin', 'chemical-peels']
  },
  {
    id: 'body-jaw',
    name: 'Loss of Contours & Submental Volume',
    description: 'Natural genetic structural pre-dispositions or tissue laxity can lead to softened jaw lines, mid-face shifts, or stubborn localized chin fat stores.',
    suitableTreatments: ['dermal-fillers', 'fat-dissolving', 'coolsculpting', 'btl-exilis']
  }
];
