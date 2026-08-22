export interface TaggedProjectPhoto {
  id: string;
  title: string;
  caption: string;
  src: string;
  category: 'case-study' | 'technical' | 'installation' | 'before-after' | 'fleet';
  city: string;
  neighborhood: string;
  zipCode: string;
  geo: {
    latitude: number;
    longitude: number;
  };
  tags: string[];
  specs: {
    micronSize?: string;
    flowRateTested?: string;
    pitch?: string;
    material?: string;
    treeThreat?: string;
    savings?: string;
  };
  dateTaken: string;
  verifiedBadge: string;
}

export const TAGGED_PROJECT_PHOTOS: TaggedProjectPhoto[] = [
  {
    id: "photo-01",
    title: "Bella Vista Steep Hillside Pine Needle Defense",
    caption: "316 marine-grade 316 micro-mesh mounted on 10/12 hillside roofline near Lake Loch Lomond, Bella Vista. 100% Loblolly pine needle deflection verified.",
    src: "/images/case_study_bella_vista_pine.svg",
    category: "case-study",
    city: "Bella Vista",
    neighborhood: "Lake Loch Lomond",
    zipCode: "72714",
    geo: { latitude: 36.4295, longitude: -94.2316 },
    tags: ["Pine Needles", "Bella Vista", "10/12 Pitch", "Loch Lomond", "316 Stainless", "Steep Slope"],
    specs: {
      micronSize: "50-Micron Weave",
      flowRateTested: "150 in/hr",
      pitch: "10/12 Extreme Slope",
      material: "316 Marine Stainless Steel + T6 Chassis",
      treeThreat: "Loblolly & Shortleaf Pine Needles",
      savings: "Saved $3,850 vs LeafFilter"
    },
    dateTaken: "May 2026",
    verifiedBadge: "Verified NWA Field Report #BVV-001"
  },
  {
    id: "photo-02",
    title: "Downtown Bentonville Post Oak Catkin Sludge Remediation",
    caption: "Complete gutter tune-up, laser pitch leveling, and marine-grade 316 micro-mesh installation on 1924 Craftsman home near Bentonville Square.",
    src: "/images/case_study_bentonville_oak.svg",
    category: "case-study",
    city: "Bentonville",
    neighborhood: "Downtown Historic District",
    zipCode: "72712",
    geo: { latitude: 36.3729, longitude: -94.2088 },
    tags: ["Oak Catkins", "Bentonville", "Historic Craftsman", "Zero Shingle Contact", "Downtown Square"],
    specs: {
      micronSize: "50-Micron Weave",
      flowRateTested: "150 in/hr",
      pitch: "7/12 Pitch",
      material: "316 Marine Stainless Steel",
      treeThreat: "100-Year Post Oak & Sweetgum Catkins",
      savings: "Saved $3,800 vs Franchise"
    },
    dateTaken: "April 2026",
    verifiedBadge: "Verified NWA Field Report #BVL-001"
  },
  {
    id: "photo-03",
    title: "Pinnacle Hills Luxury Estate Multi-Tier Armor",
    caption: "Custom 316 marine-grade 316 micro-mesh with high-capacity valley splash diverters on Champions Drive, Pinnacle Hills, Rogers, AR.",
    src: "/images/case_study_rogers_pinnacle.svg",
    category: "case-study",
    city: "Rogers",
    neighborhood: "Pinnacle Hills",
    zipCode: "72758",
    geo: { latitude: 36.3125, longitude: -94.1842 },
    tags: ["Pinnacle Hills", "Rogers", "Luxury Estate", "Silver Maple", "Valley Diverters", "ARC Approved"],
    specs: {
      micronSize: "50-Micron Weave",
      flowRateTested: "150 in/hr",
      pitch: "8/12 Multi-Tier",
      material: "316 marine-grade 316 stainless + Heavy Flanges",
      treeThreat: "Silver Maple Helicopters & Oak Catkins",
      savings: "Saved $5,100 vs Corporate"
    },
    dateTaken: "June 2026",
    verifiedBadge: "Verified NWA Field Report #ROG-002"
  },
  {
    id: "photo-04",
    title: "316 marine-grade 316 micro-mesh Technical Anatomy & Fascia Mount",
    caption: "Cross-sectional schematic showing 100% shingle-safe fascia mounting, 50-micron stainless filter weave, and 150 in/hr capillary water intake.",
    src: "/images/diagram_micro_mesh_anatomy.svg",
    category: "technical",
    city: "Bentonville",
    neighborhood: "Benton County Headquarters",
    zipCode: "72712",
    geo: { latitude: 36.3729, longitude: -94.2088 },
    tags: ["Engineering", "Anatomy", "Fascia Mount", "Zero Shingle Contact", "50-Micron", "150 in/hr"],
    specs: {
      micronSize: "50-Micron Micro-Aperture",
      flowRateTested: "150 in/hr ASTM Certified",
      pitch: "Universal (4/12 to 12/12)",
      material: "Marine Alloy 316-SS / T6 Aluminum",
      treeThreat: "All NWA Tree Species",
      savings: "Lifetime Roof Warranty Safe"
    },
    dateTaken: "March 2026",
    verifiedBadge: "Engineering Laboratory Certified"
  },
  {
    id: "photo-05",
    title: "Hydrodynamic Water Flow Testing vs Competitors",
    caption: "Laboratory rain test comparing 316 316 stainless mesh (150 in/hr intake) against national plastic curved hoods (60 in/hr) and DIY retail slits (35 in/hr).",
    src: "/images/flow_rate_testing_comparison.svg",
    category: "technical",
    city: "Springdale",
    neighborhood: "Har-Ber Meadows",
    zipCode: "72762",
    geo: { latitude: 36.1867, longitude: -94.1288 },
    tags: ["Lab Testing", "Flow Rate", "Comparison", "150 in/hr", "No Overshoot", "Hydrodynamics"],
    specs: {
      micronSize: "50-Micron vs 250-Micron",
      flowRateTested: "150 in/hr vs 60 in/hr",
      pitch: "Standard 1/4\" per foot slope",
      material: "316 Stainless vs uPVC Plastic",
      treeThreat: "Torrential Thunderstorms",
      savings: "Zero Foundation Soil Pooling"
    },
    dateTaken: "April 2026",
    verifiedBadge: "ASTM Standard A240 Test Report"
  },
  {
    id: "photo-06",
    title: "Mobile Installation Fleet & On-Site Extrusion Truck",
    caption: "Ozark Gutter Guard Co. mobile fleet equipped with digital laser pitch levels and on-site seamless gutter extruders stationed in Bentonville, AR.",
    src: "/images/fleet_contractor_crew.svg",
    category: "fleet",
    city: "Bentonville",
    neighborhood: "Walton Blvd Corridor",
    zipCode: "72712",
    geo: { latitude: 36.3729, longitude: -94.2088 },
    tags: ["Mobile Fleet", "Bentonville HQ", "Same-Week Dispatch", "Seamless Extruder", "Licensed Contractor"],
    specs: {
      micronSize: "Commercial Mobile Units",
      flowRateTested: "Same-Day Dispatch",
      pitch: "NWA Cross-County Coverage",
      material: "Custom 6-inch On-Site Extrusions",
      treeThreat: "All Benton & Washington Counties",
      savings: "Direct Contractor Pricing"
    },
    dateTaken: "January 2026",
    verifiedBadge: "AR Specialty Lic. #OGG-479-NWA"
  },
  {
    id: "photo-07",
    title: "Loch Lomond Bella Vista Lakeside Home Armor",
    caption: "Residential micro-mesh installation on Lake Loch Lomond shoreline protecting 240 linear feet of guttering from pine needle matting.",
    src: "/images/loch_lomond.jpg",
    category: "installation",
    city: "Bella Vista",
    neighborhood: "Lake Loch Lomond",
    zipCode: "72714",
    geo: { latitude: 36.4295, longitude: -94.2316 },
    tags: ["Loch Lomond", "Bella Vista", "Pine Needles", "Lakefront", "Micro-Mesh"],
    specs: {
      micronSize: "50-Micron Weave",
      flowRateTested: "150 in/hr",
      pitch: "9/12 Pitch",
      material: "316 marine-grade 316 stainless",
      treeThreat: "Loblolly Pines",
      savings: "Eliminated $1,200/yr cleanings"
    },
    dateTaken: "May 2026",
    verifiedBadge: "Verified Jobsite Record #BVV-001"
  },
  {
    id: "photo-08",
    title: "Mount Sequoyah Fayetteville Historic Hardwood Protection",
    caption: "Heritage White Oak leaf and catkin defense installed on mid-century multi-tier hillside residence in Fayetteville, AR.",
    src: "/images/mount_sequoyah.jpg",
    category: "installation",
    city: "Fayetteville",
    neighborhood: "Mount Sequoyah",
    zipCode: "72701",
    geo: { latitude: 36.0626, longitude: -94.1574 },
    tags: ["Mount Sequoyah", "Fayetteville", "Heritage Oak", "Hardwood", "Historic Home"],
    specs: {
      micronSize: "50-Micron Weave",
      flowRateTested: "150 in/hr",
      pitch: "10/12 Steep Pitch",
      material: "316 Heavy marine-grade 316 stainless",
      treeThreat: "Sugar Maple & Centennial Oaks",
      savings: "Saved $3,200 vs Franchise"
    },
    dateTaken: "May 2026",
    verifiedBadge: "Verified Jobsite Record #FVL-001"
  },
  {
    id: "photo-09",
    title: "Coler Mountain Bentonville Oak Catkin Defense",
    caption: "Modern residential architectural roofline protected from spring catkins and sweetgum debris along Coler Mountain Preserve corridor.",
    src: "/images/coler_mountain.jpg",
    category: "installation",
    city: "Bentonville",
    neighborhood: "Coler Mountain Bike Preserve",
    zipCode: "72712",
    geo: { latitude: 36.3729, longitude: -94.2088 },
    tags: ["Coler Mountain", "Bentonville", "Oak Catkins", "Modern Build", "Zero Shingle Penetration"],
    specs: {
      micronSize: "50-Micron Weave",
      flowRateTested: "150 in/hr",
      pitch: "9/12 Pitch",
      material: "316 marine-grade 316 stainless",
      treeThreat: "White Oak & Sweetgum Balls",
      savings: "Saved $4,200 vs LeafFilter"
    },
    dateTaken: "April 2026",
    verifiedBadge: "Verified Jobsite Record #BVL-002"
  },
  {
    id: "photo-10",
    title: "Split-Screen Before & After: Pine Needle Remediation",
    caption: "Before: 4 inches of rotting pine needles choking gutters. After: Permanent 316 marine-grade 316 stainless micro-mesh shedding 100% of debris.",
    src: "/images/gutter_before_after.jpg",
    category: "before-after",
    city: "Bella Vista",
    neighborhood: "Metfield Golf Area",
    zipCode: "72715",
    geo: { latitude: 36.4670, longitude: -94.2710 },
    tags: ["Before After", "Bella Vista", "Pine Needles", "Sludge Cleanout", "Transformation"],
    specs: {
      micronSize: "50-Micron Weave",
      flowRateTested: "150 in/hr",
      pitch: "8/12 Pitch",
      material: "316 316 stainless Steel Armor",
      treeThreat: "Shortleaf Pines",
      savings: "100% Clog-Free Guarantee"
    },
    dateTaken: "May 2026",
    verifiedBadge: "Verified Field Audit #BVV-003"
  },
  {
    id: "photo-11",
    title: "Macro Detail: 50-Micron marine-grade 316 stainless Weave",
    caption: "Close-up macro photography of 316 marine-grade stainless micro-mesh displaying smooth capillary aperture that rejects pine needles and shingle sand.",
    src: "/images/micromesh_macro_detail.jpg",
    category: "technical",
    city: "Bentonville",
    neighborhood: "Quality Control Lab",
    zipCode: "72712",
    geo: { latitude: 36.3729, longitude: -94.2088 },
    tags: ["Macro Detail", "50-Micron", "316 stainless mesh", "Metallurgy", "316 Marine Stainless"],
    specs: {
      micronSize: "50 Microns (0.002 Inches)",
      flowRateTested: "150 in/hr",
      pitch: "N/A",
      material: "ASTM A240 316 Stainless Steel",
      treeThreat: "Microscopic Shingle Grit & Pollen",
      savings: "Lifetime Zero-Corrosion"
    },
    dateTaken: "February 2026",
    verifiedBadge: "Metallurgical Lab Certified"
  },
  {
    id: "photo-12",
    title: "Professional Installation Crew on Multi-Story Roofline",
    caption: "In-house technicians executing laser slope pitch correction and hidden zinc bracket reinforcement across two-story roofline in Rogers, AR.",
    src: "/images/crew_installing_gutters.jpg",
    category: "installation",
    city: "Rogers",
    neighborhood: "Shadow Valley",
    zipCode: "72758",
    geo: { latitude: 36.3320, longitude: -94.1185 },
    tags: ["Crew", "Installation", "Laser Leveling", "Rogers", "Shadow Valley", "Craftsmanship"],
    specs: {
      micronSize: "Professional Tooling",
      flowRateTested: "Digital Pitch Tested",
      pitch: "8/12 Two-Story Pitch",
      material: "Hidden Zinc Rafter Brackets",
      treeThreat: "Mature Red Oaks",
      savings: "No Subcontractors"
    },
    dateTaken: "April 2026",
    verifiedBadge: "OSHA & AR Lic. Compliant Crew"
  }
];

export function getTaggedPhotosByCategory(category?: string): TaggedProjectPhoto[] {
  if (!category || category === 'all') return TAGGED_PROJECT_PHOTOS;
  return TAGGED_PROJECT_PHOTOS.filter(p => p.category === category);
}

export function getTaggedPhotosByCity(city?: string): TaggedProjectPhoto[] {
  if (!city || city === 'all') return TAGGED_PROJECT_PHOTOS;
  const c = city.toLowerCase();
  return TAGGED_PROJECT_PHOTOS.filter(p => p.city.toLowerCase().includes(c));
}
