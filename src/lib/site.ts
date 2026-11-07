/* ============================================================
   GOULD CREATIVE Site content
   Sourced from the company overview deck (May 2026).
   All copy + structured data in one place so pages stay
   declarative and content edits never require touching layout.
   ============================================================ */

export const site = {
  name: "Gould Creative",
  established: "2014",
  values: ["Creativity", "Innovation", "Inspiration"],
  tagline:
    "Design, development and manufacturing services for automotive, luggage, leather accessories and footwear production.",
  locations: ["London", "Amsterdam", "Shanghai"],
  /** Premium manufacturing partners we source from. */
  sourcing: ["Italy", "Spain", "Portugal", "Japan", "Thailand", "China"],
  /** Vetted factory relationships for direct manufacturing access. */
  network: ["Europe", "Asia", "India", "the Americas"],
  email: "dan@gouldcreative.co.uk",
};

export const contacts = [
  {
    name: "Dan Gould",
    role: "Creative Director",
    email: "dan@gouldcreative.co.uk",
    phone: "+44 7950 608994",
  },
  // Temporarily hidden — restore when ready.
  // {
  //   name: "Stefano Pillepich",
  //   role: "Product Director",
  //   email: "stefano@gouldcreative.co.uk",
  //   phone: "+31 6 34159744",
  // },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Clients", href: "/clients" },
  { label: "About", href: "/about" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Team", href: "/team" },
] as const;

export const footerColumns = [
  {
    links: [
      { label: "Clients", href: "/clients" },
      { label: "How We Work", href: "/how-we-work" },
    ],
  },
  {
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Condition", href: "/terms" },
    ],
  },
];

/* ---- About: what we do (capabilities) ---------------------------------- */
export const offer = [
  {
    n: "01",
    title: "Design Development",
    body: "Expertise-led research, concept, fine illustration, material and leather selection and bespoke hardware, taking you from initial spark to a production-ready design.",
  },
  {
    n: "02",
    title: "Sourcing",
    body: "A curated, vetted network of premium manufacturers across Europe, Asia, India and the Americas, matched to your quality tier and price point.",
  },
  {
    n: "03",
    title: "Prototyping",
    body: "Sampling and iteration to refine form, function and materials, with quality control and testing to client-defined terms.",
  },
  {
    n: "04",
    title: "Manufacture & Delivery",
    body: "Full production management through quality assurance to store or warehouse delivery. A genuine one-stop-shop.",
  },
];

/* ---- Clients ----------------------------------------------------------- */
export type Client = {
  name: string;
  sector: string;
  body: string;
  featured?: boolean;
  image?: string;
};

export const clients: Client[] = [
  {
    name: "Paul Smith",
    sector: "Fashion & Lifestyle",
    body: "Leather goods, wallets, accessories and travel collections for the house where Dan Gould served as head designer.",
    featured: true,
    image: "/clients/paul-smith-v2.jpg",
  },
  {
    name: "Samsonite",
    sector: "Travel & Luggage",
    body: "Premium luggage design and development, from spinner cases and duffels to backpacks with bespoke ridge hardware and chevron jacquard bodies.",
    featured: true,
    image: "/clients/samsonite.jpg",
  },
  {
    name: "Belstaff",
    sector: "Heritage Apparel",
    body: "Canvas and leather travel goods, including the Trialmaster two-way tote, 48hr duffel, backpack, sling bag and small leather goods.",
    featured: true,
    image: "/clients/belstaff.jpg",
  },
  {
    name: "Gieves & Hawkes",
    sector: "Savile Row Tailoring",
    body: "Premium suiters and briefcases in twill nylon and leather for the No.1 Savile Row house.",
  },
  {
    name: "Lotus",
    sector: "Automotive",
    body: "Hard-shell spinner luggage and travel bags developed alongside the Lotus Eletre.",
  },
  {
    name: "Maybach",
    sector: "Automotive Luxury",
    body: "48hr weekender, business folio, city backpack and briefcases crafted in German buffalo and calf leathers.",
  },
  {
    name: "Jaguar Land Rover",
    sector: "Automotive",
    body: "Lifestyle accessories and branded travel goods across the group's marques.",
  },
  {
    name: "Orlebar Brown",
    sector: "Resort & Travel",
    body: "Canvas and leather weekender holdalls with signature webbing and hardware.",
  },
  {
    name: "Hartmann",
    sector: "Heritage Luggage",
    body: "Understated holdalls crafted in genuine Italian leather.",
    image: "/images/work/hartmann-holdall.jpg",
  },
  {
    name: "Loro Piana",
    sector: "Luxury Leather Goods",
    body: "Soft-structured duffels in grained leather with tan trims and polished hardware.",
    image: "/images/work/loro-piana-duffel.jpg",
  },
  {
    name: "VYN",
    sector: "Footwear",
    body: "A personalisable sneaker collection in leather and suede, built around swappable colour accents.",
    image: "/images/work/vyn-collection.jpg",
  },
  {
    name: "New & Lingwood",
    sector: "Footwear",
    body: "Cup-sole sneakers and cemented travel slippers, made in England.",
  },
  {
    name: "BMW Mini",
    sector: "Automotive",
    body: "Collaborative lifestyle accessories and branded travel goods.",
  },
  {
    name: "Leica",
    sector: "Precision Instruments",
    body: "Bespoke camera bags and protective cases for the iconic manufacturer.",
  },
  {
    name: "Apple",
    sector: "Technology",
    body: "Premium device protection and accessory design collaboration.",
  },
  {
    name: "Triumph Motorcycles",
    sector: "Automotive",
    body: "Heritage-inspired leather goods and riding accessories.",
  },
  {
    name: "Victorinox",
    sector: "Travel & Tools",
    body: "Travel goods and accessories for the Swiss maker.",
  },
  {
    name: "Aspinal of London",
    sector: "Leather Goods",
    body: "British luxury leather accessories and small goods.",
  },
];

/** Selected client work for the gallery. Swap each placeholder for a real
    product shot; `ratio` controls the tile shape in the masonry grid. */
export type Work = {
  client: string;
  title: string;
  category: string;
  ratio: "portrait" | "square" | "landscape";
  /** Optional image path once real photography is supplied. */
  image?: string;
};

export const work: Work[] = [
  {
    client: "Belstaff",
    title: "Trialmaster Two-Way Tote",
    category: "Bags",
    ratio: "portrait",
    image: "/clients/belstaff-duffel-v2.jpg",
  },
  {
    client: "Lotus",
    title: "Eletre Hard-Shell Case",
    category: "Luggage",
    ratio: "landscape",
    image: "/clients/lotus-v2.jpg",
  },
  {
    client: "Maybach",
    title: "48hr Weekender",
    category: "Leather Goods",
    ratio: "portrait",
    image: "/clients/maybach.jpg",
  },
  {
    client: "Belstaff",
    title: "Nylon & Leather Backpack",
    category: "Bags",
    ratio: "portrait",
    image: "/clients/belstaff-backpack.jpg",
  },
  {
    client: "Orlebar Brown",
    title: "Canvas & Leather Holdall",
    category: "Bags",
    ratio: "landscape",
    image: "/clients/orlebar-v2.jpg",
  },
  {
    client: "Samsonite",
    title: "Executive Backpack",
    category: "Luggage",
    ratio: "portrait",
    image: "/clients/samsonite.jpg",
  },
  {
    client: "New & Lingwood",
    title: "Leather Loafers",
    category: "Footwear",
    ratio: "landscape",
    image: "/clients/new-lingwood-v2.jpg",
  },
  {
    client: "Paul Smith",
    title: "Leather Goods Range",
    category: "Accessories",
    ratio: "landscape",
    image: "/clients/paul-smith-v2.jpg",
  },
  {
    client: "Paul Smith",
    title: "Signature Stripe Weekender",
    category: "Bags",
    ratio: "portrait",
    image: "/images/work/paul-smith-weekender.jpg",
  },
  {
    client: "Paul Smith",
    title: "Signature Stripe Tote",
    category: "Bags",
    ratio: "portrait",
    image: "/images/work/paul-smith-tote.jpg",
  },
  {
    client: "Paul Smith",
    title: "Leather Messenger",
    category: "Bags",
    ratio: "portrait",
    image: "/images/work/paul-smith-messenger.jpg",
  },
  {
    client: "Paul Smith",
    title: "Textured Leather Briefcase",
    category: "Leather Goods",
    ratio: "portrait",
    image: "/images/work/paul-smith-briefcase.jpg",
  },
  {
    client: "Paul Smith",
    title: "Tweed Briefcase",
    category: "Leather Goods",
    ratio: "portrait",
    image: "/images/work/paul-smith-tweed-briefcase.jpg",
  },
  {
    client: "Paul Smith",
    title: "Tweed Backpack",
    category: "Bags",
    ratio: "portrait",
    image: "/images/work/paul-smith-backpack.jpg",
  },
  {
    client: "Paul Smith",
    title: "Small Leather Goods",
    category: "Accessories",
    ratio: "portrait",
    image: "/images/work/paul-smith-wallets.jpg",
  },
  {
    client: "Paul Smith",
    title: "Woven Leather Belts",
    category: "Accessories",
    ratio: "portrait",
    image: "/images/work/paul-smith-belts.jpg",
  },
  {
    client: "Paul Smith",
    title: "Stripe Laptop Sleeve",
    category: "Accessories",
    ratio: "portrait",
    image: "/images/work/paul-smith-laptop-sleeve.jpg",
  },
  {
    client: "M.A.P.",
    title: 'The "Anywhere" Backpack',
    category: "Bags",
    ratio: "landscape",
    image: "/images/work/map-anywhere-backpack.jpg",
  },
  {
    client: "M.A.P.",
    title: 'The "24" Briefcase',
    category: "Leather Goods",
    ratio: "landscape",
    image: "/images/work/map-24-briefcase.jpg",
  },
  {
    client: "M.A.P.",
    title: "Inaugural Collection Hardware",
    category: "Leather Goods",
    ratio: "landscape",
    image: "/images/work/map-zip-detail.jpg",
  },
  {
    client: "Hartmann",
    title: "Italian Leather Holdall",
    category: "Leather Goods",
    ratio: "landscape",
    image: "/images/work/hartmann-holdall.jpg",
  },
  {
    client: "Loro Piana",
    title: "Leather & Canvas Duffel",
    category: "Bags",
    ratio: "landscape",
    image: "/images/work/loro-piana-duffel.jpg",
  },
  {
    client: "VYN",
    title: "Personalised Sneakers",
    category: "Footwear",
    ratio: "landscape",
    image: "/images/work/vyn-personalise.jpg",
  },
  {
    client: "VYN",
    title: "Sneaker Collection",
    category: "Footwear",
    ratio: "landscape",
    image: "/images/work/vyn-collection.jpg",
  },
  {
    client: "VYN",
    title: "Campaign Imagery",
    category: "Footwear",
    ratio: "portrait",
    image: "/images/work/vyn-campaign.jpg",
  },
];

/** Full logo roster shown as a wall on the clients page. */
export const clientLogos: { name: string; logo?: string }[] = [
  { name: "Paul Smith" },
  { name: "Belstaff" },
  { name: "Norton" },
  { name: "Lotus", logo: "/images/logos/lotus.jpg" },
  { name: "Samsonite" },
  { name: "Gieves & Hawkes" },
  { name: "Victorinox" },
  { name: "Jaguar", logo: "/images/logos/jaguar.jpg" },
  { name: "Land Rover", logo: "/images/logos/land-rover.jpg" },
  { name: "Range Rover", logo: "/images/logos/range-rover.jpg" },
  { name: "Ally Capellino" },
  { name: "Bentley", logo: "/images/logos/bentley.jpg" },
  { name: "Eastpak" },
  { name: "Maybach", logo: "/images/logos/maybach.jpg" },
  { name: "Aspinal of London" },
  { name: "Westley Richards" },
];

/* ---- How we work ------------------------------------------------------- */
export const engagementModels = [
  {
    n: "01",
    title: "Manufacturing Access",
    subtitle: "Bring your own design",
    body: "Brands with existing design capability can plug directly into our vetted factory network, drawing on relationships built over decades across Europe, Asia, India and the Americas.",
  },
  {
    n: "02",
    title: "Full Service",
    subtitle: "Concept through to delivery",
    body: "Take the journey from initial concept to finished product with us, covering research, design and development through prototyping, production and to-store or warehouse delivery.",
  },
];

/** The end-to-end production pipeline. */
export const pipeline = [
  {
    title: "Brief Review & Factory Matching",
    body: "We interrogate the brief and match it to the right partners in our network.",
  },
  {
    title: "Supplier Qualification",
    body: "Vetting suppliers on quality, capacity, compliance and price tier.",
  },
  {
    title: "Prototyping",
    body: "Sampling and iteration until form, function and materials are right.",
  },
  {
    title: "Manufacture & QC",
    body: "Production managed end to end with quality control to your terms.",
  },
  {
    title: "Delivery",
    body: "Finished goods delivered to store or warehouse, on time.",
  },
];

/** Detailed scope for each engagement, from "Our Approach". */
export const approach = {
  fullService: [
    "Researching suppliers and manufacturers",
    "Identifying appropriate suppliers based on project brief",
    "Prototyping and sample development",
    "Quality control and testing to client-defined terms",
    "Final material selection and design amendments",
    "Definition of SKUs and range plan",
  ],
  manufacturingOnly: [
    "Brief review and factory matching",
    "Sampling against client specifications",
    "QC and compliance oversight",
    "Production management",
    "Delivery",
  ],
};

/* ---- Home: why us ------------------------------------------------------ */
export const whyUs = [
  {
    title: "A family of preferred partners",
    body: "Decades of relationship-building means close personal connections with a trusted family of suppliers and manufacturers. We negotiate the best rates, timelines and product quality on your behalf.",
  },
  {
    title: "Answers, faster than anyone",
    body: "We can pick up the phone and get answers, solutions and real-time updates faster than anyone else, for a smooth, fast and cost-effective experience from start to finish.",
  },
];

/* ---- Sustainability & innovation --------------------------------------- */
export const sustainability = [
  "Recycled PET Yarn",
  "3D Nesting for Material Efficiency",
  "Expert Talent Driving Innovation",
];

/* ---- Team -------------------------------------------------------------- */
export type Member = {
  name: string;
  role: string;
  location: string;
  bio: string;
  image?: string;
};

export const team: Member[] = [
  {
    name: "Daniel Gould",
    role: "Founder & Creative Director",
    location: "London",
    image: "/team/dan-gould.jpg",
    bio: "Almost three decades as a design director for product and leather goods at leading luxury and global brands including Paul Smith and Samsonite, with collaborations spanning BMW-Mini, Leica, Apple and Triumph Motorcycles. A Central Saint Martins Product Design graduate, Dan is the go-to specialist for the luxury travel-goods sector and a lecturer in MA Industrial Design, run in collaboration with LVMH.",
  },
  {
    name: "Stefano Pillepich",
    role: "Product Director",
    location: "Amsterdam",
    image: "/team/stefano.jpg",
    bio: "Over 25 years of senior brand-side experience across luxury leather goods, accessories and footwear. At Ralph Lauren he was VP of Global Manufacturing for Purple Label, RRL and Collection, managing $100M FOB across 120-plus vendors in 17 countries. At ECCO he built the Leather Goods Division from zero to €29M and launched At.Kollektive, the brand's first luxury label. Earlier roles include Coach, Donna Karan and Liz Claiborne.",
  },
];
