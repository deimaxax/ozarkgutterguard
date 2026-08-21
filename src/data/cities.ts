export interface CityData {
  slug: string;
  cityName: string;
  cityState: string;
  title: string;
  metaDescription: string;
  h1: string;
  h2Problem: string;
  h2Satellite: string;
  h3Guarantee: string;
  landmarks: string[];
  painPoints: {
    title: string;
    description: string;
    icon: string;
  }[];
  treeProfile: string;
  postalCodes: string[];
  geo: {
    latitude: number;
    longitude: number;
  };
  wikiUrl: string;
  adjacentCities: { name: string; slug: string }[];
  localReview: {
    author: string;
    neighborhood: string;
    review: string;
    rating: number;
    date: string;
  };
}

export const CITIES_DATA: Record<string, CityData> = {
  "bentonville": {
    slug: "gutter-guards-bentonville-ar",
    cityName: "Bentonville",
    cityState: "Bentonville, AR",
    title: "Bentonville Gutter Guards | 10-Yr No-Clog Warranty | Ozark Gutter Guard Co.",
    metaDescription: "Permanent micro-mesh gutter protection in Bentonville, AR. Medical-grade stainless steel for new builds & Coler MTB oak zones. Get instant satellite quote.",
    h1: "Bentonville Gutter Guards — 316 Surgical Stainless Protection",
    h2Problem: "Why Traditional Plastic Screens Fail in Bentonville (Oak Tassels & Rapid Expansion)",
    h2Satellite: "The 15-Minute Satellite Sizing Process for Bentonville Homeowners",
    h3Guarantee: "Backed by Our Transferable 10-Year No-Clog Guarantee",
    landmarks: [
      "Downtown Bentonville & Square",
      "Coler Mountain Bike Preserve Oak Corridors",
      "Crystal Bridges & Museum Trails",
      "Subdivisions near Slaughter Pen & I-49 Corridor"
    ],
    painPoints: [
      {
        title: "Heavy Oak Tassels (Catkins)",
        description: "Spring oak pollen and dense tassels in Coler and Downtown neighborhoods slip straight through slotted vinyl guards, turning into concrete-like sludge in gutters.",
        icon: "TreePine"
      },
      {
        title: "Modern Architectural Fascias",
        description: "New Bentonville construction features steep rooflines that overwhelm low-capacity plastic mesh during torrential Ozark summer downpours.",
        icon: "Home"
      },
      {
        title: "Zero Time for High-Pressure Sales",
        description: "Corporate executives and busy professionals don't have 3 hours for in-home salesmen. We calculate accurate quotes via satellite in 15 minutes.",
        icon: "Clock"
      }
    ],
    treeProfile: "White Oak, Red Oak, Hickory, and sweetgum canopies.",
    postalCodes: ["72712", "72713", "72716"],
    geo: { latitude: 36.3729, longitude: -94.2088 },
    wikiUrl: "https://en.wikipedia.org/wiki/Bentonville,_Arkansas",
    adjacentCities: [
      { name: "Bella Vista", slug: "gutter-guards-bella-vista-ar" },
      { name: "Rogers", slug: "gutter-guards-rogers-ar" },
      { name: "Springdale", slug: "gutter-guards-springdale-ar" }
    ],
    localReview: {
      author: "Marcus T.",
      neighborhood: "Downtown Bentonville (Near Coler Preserve)",
      review: "Saved over $3,800 compared to the LeafFilter quote I received last year. The satellite measurement was done within 15 minutes of my request, and installation took exactly 3.5 hours. Not a single oak tassel got through this spring!",
      rating: 5,
      date: "Verified Customer • 3 weeks ago"
    }
  },
  "bella-vista": {
    slug: "gutter-guards-bella-vista-ar",
    cityName: "Bella Vista",
    cityState: "Bella Vista, AR",
    title: "Bella Vista Gutter Guard Installation | Pine Needle Shield | Ozark Gutter Guard Co.",
    metaDescription: "Tired of cleaning pine needles and oak tassels in Bella Vista? Surgical stainless micro-mesh engineered for steep hills & Loblolly pines. Instant quote.",
    h1: "Gutter Guard Installation Bella Vista, AR",
    h2Problem: "Why Traditional Plastic Screens Fail in Bella Vista (Loblolly Pine Needles & Steep Pitches)",
    h2Satellite: "The 15-Minute Satellite Sizing Process for Bella Vista Homeowners",
    h3Guarantee: "Backed by Our Transferable 10-Year No-Clog Guarantee",
    landmarks: [
      "Lake Loch Lomond & Lake Norwood Shorelines",
      "Bella Vista Highlands Steep Ridges",
      "Scotsdale & Metfield Golf Communities",
      "Tanyard Creek & Back 40 Trail Head Corridors"
    ],
    painPoints: [
      {
        title: "Aggressive Loblolly Pine Needles",
        description: "Standard slotted and perforated guards act like combs, trapping pine needles vertically and damming rainwater until it spills into your foundation.",
        icon: "ShieldAlert"
      },
      {
        title: "Dangerous Steep Hillside Pitches",
        description: "Bella Vista's 8/12 to 12/12 roof pitches make ladder climbing lethal. Our medical-grade micro-mesh permanently eliminates ladder risks.",
        icon: "AlertTriangle"
      },
      {
        title: "Hillside Runoff & Foundation Erosion",
        description: "Overflowing gutters on sloped terrain quickly wash away retaining walls, landscape mulch, and erode home foundations.",
        icon: "Waves"
      }
    ],
    treeProfile: "Dense Loblolly Pines, Shortleaf Pines, mature post oaks, and cedar stands.",
    postalCodes: ["72714", "72715"],
    geo: { latitude: 36.4295, longitude: -94.2316 },
    wikiUrl: "https://en.wikipedia.org/wiki/Bella_Vista,_Arkansas",
    adjacentCities: [
      { name: "Bentonville", slug: "gutter-guards-bentonville-ar" },
      { name: "Rogers", slug: "gutter-guards-rogers-ar" }
    ],
    localReview: {
      author: "Robert & Linda K.",
      neighborhood: "Lake Loch Lomond, Bella Vista",
      review: "We live on a steep hillside surrounded by 50-foot Loblolly pines. I was paying $250 every 3 months for gutter cleaning. Ozark Gutter Guard installed surgical stainless steel mesh in one afternoon. Two torrential storms later, gutters run crystal clear!",
      rating: 5,
      date: "Verified Customer • 1 month ago"
    }
  },
  "rogers": {
    slug: "gutter-guards-rogers-ar",
    cityName: "Rogers",
    cityState: "Rogers, AR",
    title: "Rogers Gutter Covers | Beaver Lake Moisture Defense | Ozark Gutter Guard Co.",
    metaDescription: "Commercial-grade stainless micro-mesh gutter guards in Rogers, AR. Protect against Beaver Lake moisture, mildew, and heavy oak debris. Free digital quote.",
    h1: "Gutter Covers Rogers AR — Pinnacle Hills & Beaver Lake",
    h2Problem: "Why Traditional Plastic Screens Fail in Rogers (Beaver Lake Moisture & Oak Tassels)",
    h2Satellite: "The 15-Minute Satellite Sizing Process for Rogers Homeowners",
    h3Guarantee: "Backed by Our Transferable 10-Year No-Clog Guarantee",
    landmarks: [
      "Pinnacle Hills Promenade & Shadow Valley",
      "Beaver Lake & Prairie Creek Shorelines",
      "Historic Downtown Rogers & Frisco Station",
      "Pleasant Grove Residential Communities"
    ],
    painPoints: [
      {
        title: "Beaver Lake Humidity & Moss Growth",
        description: "Humid lake microclimates cause damp gutter sludge to ferment, rotting fascia boards and promoting mildew under plastic gutter covers.",
        icon: "Droplets"
      },
      {
        title: "Heavy Spring Oak & Maple Drops",
        description: "Shadow Valley and Pinnacle Hills mature tree canopies drop tons of seeds, pollen buds, and spinners that choke standard filters.",
        icon: "Leaf"
      },
      {
        title: "Overpriced Big-Box Franchises",
        description: "National gutter companies charge upwards of $6,500 in Rogers. We deliver superior surgical-grade steel at direct local prices ($1,250-$1,650).",
        icon: "DollarSign"
      }
    ],
    treeProfile: "Northern Red Oak, Silver Maple, Sweetgum, and Dogwood.",
    postalCodes: ["72756", "72757", "72758"],
    geo: { latitude: 36.3320, longitude: -94.1185 },
    wikiUrl: "https://en.wikipedia.org/wiki/Rogers,_Arkansas",
    adjacentCities: [
      { name: "Bentonville", slug: "gutter-guards-bentonville-ar" },
      { name: "Bella Vista", slug: "gutter-guards-bella-vista-ar" },
      { name: "Springdale", slug: "gutter-guards-springdale-ar" }
    ],
    localReview: {
      author: "David H.",
      neighborhood: "Shadow Valley, Rogers",
      review: "LeafFilter quoted me $6,400 for our two-story house. Ozark Gutter Guard came in at $1,520 with higher quality 316 surgical stainless steel mesh. Clean crew, zero pressure, done in 4 hours.",
      rating: 5,
      date: "Verified Customer • 2 months ago"
    }
  },
  "fayetteville": {
    slug: "gutter-guards-fayetteville-ar",
    cityName: "Fayetteville",
    cityState: "Fayetteville, AR",
    title: "Fayetteville Gutter Protection | Mount Sequoyah Oak Armor | Ozark Gutter Guard Co.",
    metaDescription: "Heavy-duty micro-mesh gutter protection in Fayetteville, AR. Mount Sequoyah forests, historic homes, and maple debris armor. 10-Yr No-Clog Guarantee.",
    h1: "Gutter Protection Fayetteville AR — Mount Sequoyah & Historic District",
    h2Problem: "Why Traditional Plastic Screens Fail in Fayetteville (Mount Sequoyah Hardwoods & Leaf Debris)",
    h2Satellite: "The 15-Minute Satellite Sizing Process for Fayetteville Homeowners",
    h3Guarantee: "Backed by Our Transferable 10-Year No-Clog Guarantee",
    landmarks: [
      "Mount Sequoyah Wooded Overlooks",
      "Wilson Park & Historic Washington-Willow District",
      "Root Elementary & Gulley Park Neighborhoods",
      "University of Arkansas Campus & Mount Kessler Foothills"
    ],
    painPoints: [
      {
        title: "Mount Sequoyah Old-Growth Hardwoods",
        description: "Dense 70-year-old oak and maple canopies produce relentless autumn leaf falls that crush flimsy plastic guards under wet weight.",
        icon: "TreeDeciduous"
      },
      {
        title: "Historic Fascia & Soffit Preservation",
        description: "Historic Fayetteville homes suffer costly wood rot and water staining when clogged gutters overflow behind the trim.",
        icon: "Landmark"
      },
      {
        title: "Steep Ozark Foothill Slopes",
        description: "Uncontrolled roof water creates intense trenching around foundations and basement leaks in hillside homes.",
        icon: "Mountain"
      }
    ],
    treeProfile: "Centennial White Oaks, Sugar Maples, Black Walnut, and Sycamore.",
    postalCodes: ["72701", "72702", "72703", "72704"],
    geo: { latitude: 36.0626, longitude: -94.1574 },
    wikiUrl: "https://en.wikipedia.org/wiki/Fayetteville,_Arkansas",
    adjacentCities: [
      { name: "Springdale", slug: "gutter-guards-springdale-ar" },
      { name: "Rogers", slug: "gutter-guards-rogers-ar" }
    ],
    localReview: {
      author: "Sarah & Mark W.",
      neighborhood: "Mount Sequoyah, Fayetteville",
      review: "Our house under Mount Sequoyah oaks used to clog literally every 2 weeks in October and November. This stainless micro-mesh has been 100% clog free through all fall storms. Outstanding local company!",
      rating: 5,
      date: "Verified Customer • 1 month ago"
    }
  },
  "springdale": {
    slug: "gutter-guards-springdale-ar",
    cityName: "Springdale",
    cityState: "Springdale, AR",
    title: "Springdale Gutter Contractors | Clay Soil Foundation Armor | Ozark Gutter Guard Co.",
    metaDescription: "Reliable stainless micro-mesh gutter shields in Springdale, AR. Protect large family homes & prevent foundation settling. Fast satellite estimates.",
    h1: "Gutter Contractors Springdale AR — Har-Ber Meadows & Shiloh District",
    h2Problem: "Why Traditional Plastic Screens Fail in Springdale (Torrential Downpours & Foundation Shifting)",
    h2Satellite: "The 15-Minute Satellite Sizing Process for Springdale Homeowners",
    h3Guarantee: "Backed by Our Transferable 10-Year No-Clog Guarantee",
    landmarks: [
      "Har-Ber Meadows & Downtown Springdale",
      "Brush Creek & Lake Springdale Basins",
      "Sonora & East Springdale Acreages",
      "Shiloh Historic District"
    ],
    painPoints: [
      {
        title: "Expansive Clay Soil & Foundation Settling",
        description: "Springdale's soil expands and contracts rapidly. Water pooling from clogged gutters causes severe slab movement and costly foundation cracking.",
        icon: "Building"
      },
      {
        title: "Large Multi-Story Roof Perimeters",
        description: "Sprawling family homes require high water throughput that curved plastic shields simply cannot manage without overflowing.",
        icon: "Maximize"
      },
      {
        title: "Agricultural Dust & Fine Pollen Sludge",
        description: "Fine dust and agricultural pollen combine with rainwater to form cement-like paste inside non-micro-mesh systems.",
        icon: "Wind"
      }
    ],
    treeProfile: "Pin Oak, Elm, River Birch, and Pecan trees.",
    postalCodes: ["72762", "72764", "72765", "72766"],
    geo: { latitude: 36.1867, longitude: -94.1288 },
    wikiUrl: "https://en.wikipedia.org/wiki/Springdale,_Arkansas",
    adjacentCities: [
      { name: "Fayetteville", slug: "gutter-guards-fayetteville-ar" },
      { name: "Rogers", slug: "gutter-guards-rogers-ar" },
      { name: "Bentonville", slug: "gutter-guards-bentonville-ar" }
    ],
    localReview: {
      author: "Elena R.",
      neighborhood: "Har-Ber Meadows, Springdale",
      review: "After our foundation started showing hairline cracks from overflowing gutters, we knew we needed permanent guards. Ozark Gutter Guard gave us an honest quote over text with roof measurements and finished the job in 4 hours. No mess left behind!",
      rating: 5,
      date: "Verified Customer • 3 weeks ago"
    }
  }
};
