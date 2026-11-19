export type ProductCategory = 'Outerwear' | 'Evening' | 'Tailoring' | 'Menswear' | 'Womenswear';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  collectionTag: 'new' | 'bestseller' | 'womens' | 'mens';
  price: number;
  rating: number;
  reviewCount: number;
  fabric: string;
  origin: string;
  description: string;
  image: string;
  sizes: string[];
  isBestSeller?: boolean;
  isNew?: boolean;
}

export interface EditorialLook {
  id: string;
  title: string;
  subtitle: string;
  fabricNote: string;
  price: number;
  image: string;
  aspect: 'portrait' | 'landscape';
  productId: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  piecePurchased: string;
  rating: number;
  quote: string;
}

export const HERO_IMAGE = '/src/assets/images/hero_velora_campaign_1795087057774.jpg';
export const BRAND_ATELIER_IMAGE = '/src/assets/images/brand_intro_atelier_1795087058070.jpg';
export const CRAFTSMANSHIP_IMAGE = '/src/assets/images/craftsmanship_atelier_macro_1795087056841.jpg';
export const CAMPAIGN_BANNER_IMAGE = '/src/assets/images/seasonal_campaign_banner_1795087058400.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'vlr-coat-01',
    name: 'Sovereign Double-Faced Cashmere Coat',
    category: 'Outerwear',
    collectionTag: 'new',
    price: 3450,
    rating: 4.9,
    reviewCount: 42,
    fabric: '100% Inner Mongolian Cashmere',
    origin: 'Hand-Finished in Milan',
    description:
      'Cut in an architectural floor-skimming silhouette from pure double-faced burgundy cashmere with concealed horn buttons and hand-picked seams.',
    image: '/src/assets/images/new_collection_coat_1795087056828.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    isNew: true,
    isBestSeller: true,
  },
  {
    id: 'vlr-gown-02',
    name: 'Aurelia Bias-Cut Silk Gown',
    category: 'Evening',
    collectionTag: 'new',
    price: 2890,
    rating: 5.0,
    reviewCount: 31,
    fabric: 'Heavyweight Hammered Mulberry Silk',
    origin: 'Atelier Paris',
    description:
      'Draped effortlessly on the bias in warm ivory hammered satin, featuring a softly cowled neckline and fluid floor-sweeping train.',
    image: '/src/assets/images/new_collection_gown_1795087057551.jpg',
    sizes: ['XS', 'S', 'M', 'L'],
    isNew: true,
    isBestSeller: true,
  },
  {
    id: 'vlr-blazer-03',
    name: 'Noir Peak-Lapel Tuxedo Jacket',
    category: 'Tailoring',
    collectionTag: 'new',
    price: 2150,
    rating: 4.9,
    reviewCount: 54,
    fabric: 'Virgin Wool & Como Silk Satin',
    origin: 'Tailored in Milan',
    description:
      'Sculpted waist definition meets razor-sharp silk duchesse peak lapels and hand-basted horsehair canvas structure.',
    image: '/src/assets/images/new_collection_blazer_1795087057809.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    isNew: true,
    isBestSeller: true,
  },
  {
    id: 'vlr-dress-04',
    name: 'Solstice Sunburst Pleated Midi Dress',
    category: 'Womenswear',
    collectionTag: 'womens',
    price: 1980,
    rating: 4.8,
    reviewCount: 27,
    fabric: 'Champagne Gold Silk Crepe de Chine',
    origin: 'Atelier Paris',
    description:
      'Knife-pleated by hand in luminous champagne gold silk with a high sculpted collar and fluid movement at every stride.',
    image: '/src/assets/images/womens_silk_edit_1795087057883.jpg',
    sizes: ['XS', 'S', 'M', 'L'],
    isNew: true,
  },
  {
    id: 'vlr-suit-05',
    name: 'Valmont Crimson Silk-Velvet Suit',
    category: 'Evening',
    collectionTag: 'womens',
    price: 3180,
    rating: 5.0,
    reviewCount: 19,
    fabric: 'Lyon Silk-Pile Velvet',
    origin: 'Atelier Paris',
    description:
      'A commanding two-piece evening suit rendered in deep burgundy silk velvet with silk twill lining and elongated tailored trousers.',
    image: '/src/assets/images/womens_evening_velvet_1795087058117.jpg',
    sizes: ['XS', 'S', 'M', 'L'],
    isBestSeller: true,
  },
  {
    id: 'vlr-mens-06',
    name: 'Belmont Double-Breasted Wool Suit',
    category: 'Menswear',
    collectionTag: 'mens',
    price: 4250,
    rating: 4.9,
    reviewCount: 38,
    fabric: 'Super 160s Biella Merino Wool',
    origin: 'Bespoke Tailored in Milan',
    description:
      'Full-canvas double-breasted tailoring in midnight black with solid brass crest buttons and crisp hand-padded shoulders.',
    image: '/src/assets/images/mens_tailored_suit_1795087057554.jpg',
    sizes: ['46', '48', '50', '52', '54'],
    isBestSeller: true,
  },
  {
    id: 'vlr-mens-07',
    name: 'Oxblood Suede & Cashmere Blouson',
    category: 'Menswear',
    collectionTag: 'mens',
    price: 2680,
    rating: 4.9,
    reviewCount: 29,
    fabric: 'Full-Grain Lamb Suede & Cashmere Rib',
    origin: 'Crafted in Florence',
    description:
      'Supple oxblood suede paired with fine cashmere ribbed trims and brushed palladium hardware for effortless off-duty refinement.',
    image: '/src/assets/images/mens_cashmere_jacket_1795087057708.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
    isBestSeller: true,
  },
  {
    id: 'vlr-mens-08',
    name: 'Ivory Sea-Island Dress Shirt',
    category: 'Menswear',
    collectionTag: 'mens',
    price: 780,
    rating: 4.8,
    reviewCount: 64,
    fabric: '2-Ply Giza 45 Egyptian Cotton',
    origin: 'Shirtmakers of Naples',
    description:
      'Single-needle stitched in warm ivory cotton poplin with mother-of-pearl buttons and a softly structured spread collar.',
    image: '/src/assets/images/mens_evening_shirt_1795087058178.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
  },
];

export const WOMENS_GALLERY: EditorialLook[] = [
  {
    id: 'look-w1',
    title: 'Champagne Silk Elegance',
    subtitle: 'Sunburst Pleated Midi · Paris Atelier',
    fabricNote: '100% Hand-Pleated Mulberry Silk',
    price: 1980,
    image: '/src/assets/images/womens_silk_edit_1795087057883.jpg',
    aspect: 'portrait',
    productId: 'vlr-dress-04',
  },
  {
    id: 'look-w2',
    title: 'Nocturne Velvet Tailoring',
    subtitle: 'Valmont Evening Ensemble',
    fabricNote: 'Deep Burgundy Lyon Velvet',
    price: 3180,
    image: '/src/assets/images/womens_evening_velvet_1795087058117.jpg',
    aspect: 'landscape',
    productId: 'vlr-suit-05',
  },
  {
    id: 'look-w3',
    title: 'Sculpted Ivory Drape',
    subtitle: 'Aurelia Bias-Cut Gown',
    fabricNote: 'Hammered Silk Satin',
    price: 2890,
    image: '/src/assets/images/new_collection_gown_1795087057551.jpg',
    aspect: 'portrait',
    productId: 'vlr-gown-02',
  },
];

export const MENS_GALLERY: EditorialLook[] = [
  {
    id: 'look-m1',
    title: 'The Midnight Double-Breasted',
    subtitle: 'Full-Canvas Sartorial Suit',
    fabricNote: 'Super 160s Biella Wool · Brass Hardware',
    price: 4250,
    image: '/src/assets/images/mens_tailored_suit_1795087057554.jpg',
    aspect: 'portrait',
    productId: 'vlr-mens-06',
  },
  {
    id: 'look-m2',
    title: 'Florentine Oxblood Suede',
    subtitle: 'Cashmere-Trimmed Blouson',
    fabricNote: 'Unlined Lamb Suede · Merino Base',
    price: 2680,
    image: '/src/assets/images/mens_cashmere_jacket_1795087057708.jpg',
    aspect: 'landscape',
    productId: 'vlr-mens-07',
  },
  {
    id: 'look-m3',
    title: 'Neapolitan Poplin & Vicuna',
    subtitle: 'Formal Evening Shirting',
    fabricNote: 'Giza 45 Cotton · Mother-of-Pearl',
    price: 780,
    image: '/src/assets/images/mens_evening_shirt_1795087058178.jpg',
    aspect: 'portrait',
    productId: 'vlr-mens-08',
  },
];

export const CRAFTSMANSHIP_PILLARS = [
  {
    index: '01.',
    title: 'Rare Mill Provenance',
    detail:
      'Every yard of cashmere, Biella merino, and Lyon silk velvet is woven exclusively for VELORA in heritage family mills operating since 1894.',
  },
  {
    index: '02.',
    title: 'Hand-Basted Architecture',
    detail:
      'Each tailored jacket undergoes 42 hours of manual canvas basting and silk thread pick-stitching so the drape molds effortlessly to your posture.',
  },
  {
    index: '03.',
    title: 'Champagne Silk Finishing',
    detail:
      'Interiors are finished with breathable jacquard mulberry silk linings, French seams, and engraved solid brass or horn closures.',
  },
  {
    index: '04.',
    title: 'Numbered Atelier Editions',
    detail:
      'Produced in intentionally limited quantities, every garment carries an individually numbered woven atelier label certifying its lineage.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    name: 'Camille Laurent',
    role: 'Art Director, Maison Galerie',
    location: 'Paris',
    piecePurchased: 'Sovereign Cashmere Coat',
    rating: 5,
    quote:
      'The weight and drape of the deep burgundy cashmere coat are extraordinary. Every seam feels sculptural yet completely effortless when worn over evening silk.',
  },
  {
    id: 'rev-2',
    name: 'Julian Vance',
    role: 'Managing Partner, Vance Advisory',
    location: 'London',
    piecePurchased: 'Belmont Double-Breasted Suit',
    rating: 5,
    quote:
      'From the first fitting, the shoulder line and Super 160s wool surpassed my bespoke Savile Row commissions. VELORA understands modern masculine restraint.',
  },
  {
    id: 'rev-3',
    name: 'Elena Rostova',
    role: 'Concert Violinist',
    location: 'Vienna',
    piecePurchased: 'Aurelia Bias-Cut Silk Gown',
    rating: 5,
    quote:
      'Under concert hall lighting, the hammered ivory silk moves like liquid champagne. It is rare to find couture-level finishing that feels so timeless.',
  },
];
