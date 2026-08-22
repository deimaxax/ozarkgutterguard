export interface LocalCaseStudy {
  id: string;
  city: string;
  neighborhood: string;
  streetName: string;
  zipCode: string;
  homeType: string;
  linearFeet: number;
  pitch: string;
  treeThreat: string;
  problem: string;
  solutionExecuted: string;
  materialUsed: string;
  intakeRateTested: string;
  completedDate: string;
  homeownerInitials: string;
  verifiedSavings: string;
  keyFeature: string;
  hoaCompliance: string;
  permitOrCodeNotes: string;
}

export const LOCAL_CASE_STUDIES: Record<string, LocalCaseStudy[]> = {
  "bentonville": [
    {
      id: "cs-bvl-01",
      city: "Bentonville",
      neighborhood: "Downtown Historic District",
      streetName: "NW 2nd St & NW A St",
      zipCode: "72712",
      homeType: "1924 Craftsman Historic Bungalow",
      linearFeet: 188,
      pitch: "7/12 Pitch",
      treeThreat: "100-Year Post Oak & Sweetgum Catkins",
      problem: "Chronic spring catkin sludge completely sealed gutter drop outlets. Water overflow caused extensive wood rot along 32 feet of historic cedar fascia boards and water staining down brick foundation piers.",
      solutionExecuted: "Hand-extracted 4.2 cu ft of catkin sludge, replaced rotted cedar backing with primed rot-proof composite trim, laser pitch-leveled 4 sagging trough runs, replaced 38 failing spike nails with 1.5\" zinc-coated hidden screw brackets, sealed all 4 box miters with industrial polyurethane, and installed 50-micron 316 marine-grade 316 stainless micro-mesh with zero shingle contact.",
      materialUsed: "316 Marine Stainless Steel (50-Micron Weave) + 0.027 Heavy T6 Aluminum Chassis",
      intakeRateTested: "150 in/hr verified with digital flow meter",
      completedDate: "April 2026",
      homeownerInitials: "Marcus T.",
      verifiedSavings: "Saved $3,800 vs national franchise quote ($5,320 quote vs $1,520 actual)",
      keyFeature: "Zero shingle contact preserved 100% of historic roofline & CertainTeed Landmark warranty",
      hoaCompliance: "Approved by Bentonville Historic District Commission (Invisible from street level)",
      permitOrCodeNotes: "Complies with City of Bentonville Community Development Code for residential stormwater drainage management."
    },
    {
      id: "cs-bvl-02",
      city: "Bentonville",
      neighborhood: "Coler Mountain Bike Preserve Corridor",
      streetName: "NW Peach Orchard Rd & Coler Way",
      zipCode: "72712",
      homeType: "Modern Architectural Custom 2-Story",
      linearFeet: 245,
      pitch: "9/12 Multi-Tier Hip & Valley",
      treeThreat: "White Oak, Sweetgum Balls & Shingle Granule Wash",
      problem: "Heavy spring oak flower tassels combined with abrasive shingle runoff to wedge inside standard slotted vinyl guards, causing severe 2nd-story valley water overshoot onto stone patio and foundation flowerbeds.",
      solutionExecuted: "Stripped failed plastic covers, power-flushed 6 downspout drops, installed heavy-duty high-flow inside valley splash diverters, reinforced rafter brackets at 24-inch intervals, and mounted continuous 316 316 stainless mesh flush to aluminum fascia lip.",
      materialUsed: "316 marine-grade 316 stainless Micro-Mesh + Heavy Gauge Valley Shield Assemblies",
      intakeRateTested: "150 in/hr sustained during severe 2.8 in/hr Ozark thunderstorm",
      completedDate: "May 2026",
      homeownerInitials: "David & Sarah K.",
      verifiedSavings: "Saved $4,200 compared to LeafFilter bid",
      keyFeature: "High-capacity valley deflectors eliminate rainwater overshoot into lower foundation",
      hoaCompliance: "Standard Architectural Review Board Approved",
      permitOrCodeNotes: "Benton County Stormwater Ordinance Section 14 drainage compliance verified."
    },
    {
      id: "cs-bvl-03",
      city: "Bentonville",
      neighborhood: "Slaughter Pen Trail Corridor",
      streetName: "NE J St & Slaughter Pen Rd",
      zipCode: "72712",
      homeType: "New Construction Modern Farmhouse",
      linearFeet: 215,
      pitch: "8/12 Steep Architectural",
      treeThreat: "Red Oak, Hickory & Pine Mix",
      problem: "Builder-grade 5-inch gutters pulled away from rafter tails due to heavy wet foliage weight during November storms, causing rainwater to puddle against newly poured slab foundation.",
      solutionExecuted: "Upgraded 26 failing brackets to 1.5\" structural zinc screw hidden hangers, laser-re-pitched 3 runs toward commercial 3x4 drop outlets, and installed 50-micron 316 stainless mesh with polyurethane joint welds.",
      materialUsed: "316 316 stainless Marine-Grade Mesh + Heavy-Duty Hidden Hangers",
      intakeRateTested: "150 in/hr throughput verified",
      completedDate: "March 2026",
      homeownerInitials: "Brett M.",
      verifiedSavings: "Eliminated $800/yr seasonal handyman cleaning bills",
      keyFeature: "Commercial-grade hidden bracket spacing every 24 inches stops gutter sag under ice/debris",
      hoaCompliance: "100% HOA Architectural Guideline Compliant",
      permitOrCodeNotes: "City of Bentonville Building Inspection Division drainage guidelines met."
    }
  ],
  "bella-vista": [
    {
      id: "cs-bvv-01",
      city: "Bella Vista",
      neighborhood: "Lake Loch Lomond Shoreline",
      streetName: "Skyline Dr & Lake Norwood Rd",
      zipCode: "72714",
      homeType: "Hillside Walkout Ranch with 27-Foot Rear Drop",
      linearFeet: 210,
      pitch: "9/12 Steep Hillside Pitch",
      treeThreat: "Towering 60-ft Loblolly Pines & Shortleaf Pine Needles",
      problem: "Fine pine needles pierced standard slotted vinyl guards vertically like toothpicks, forming an impenetrable felt mat across all 3 downspout inlets. Water overflow cascaded down a 27-foot cliff face, eroding stone retaining walls.",
      solutionExecuted: "Removed clogged vinyl guards, vacuum-extracted 4.5 cubic feet of compacted pine sludge, installed 50-micron 316 marine-grade 316 stainless mesh flush to front lip and fascia, laser-aligned pitch, and re-anchored rear eaves with heavy zinc screw hangers.",
      materialUsed: "316 marine-grade 316 stainless 50-Micron Micro-Mesh + Heavy Anodized Aluminum Base",
      intakeRateTested: "150 in/hr throughput certified",
      completedDate: "May 2026",
      homeownerInitials: "Robert & Linda K.",
      verifiedSavings: "Eliminated $1,200/yr high-risk ladder cleaning fees",
      keyFeature: "50-micron mesh stops 100% of pine needles; dry needles shed naturally in 8 mph mountain breeze",
      hoaCompliance: "Bella Vista POA Architectural Control Committee (ACC) Compliant",
      permitOrCodeNotes: "Bella Vista Village POA environmental code for hillside erosion mitigation satisfied."
    },
    {
      id: "cs-bvv-02",
      city: "Bella Vista",
      neighborhood: "The Highlands / Scotsdale Golf Course",
      streetName: "Highlands Blvd & Scotsdale Dr",
      zipCode: "72715",
      homeType: "Custom Two-Story Mountain Chalet",
      linearFeet: 175,
      pitch: "10/12 Extreme Slope",
      treeThreat: "Dense Shortleaf Pine, Cedar & Post Oak",
      problem: "Extreme roof pitch caused rainwater and sticky pine resin to bypass contractor-grade mesh, damming gutters and rotting rafter tails behind hidden fascia boards.",
      solutionExecuted: "Full rotten wood extraction, installation of rot-proof composite fascia backer, laser slope tuning, sealed 6 corner miters with thermoplastic polyurethane, and precision installation of marine-grade 316 micro-mesh with steep-pitch valley diverters.",
      materialUsed: "316 Marine Stainless Steel Mesh + Custom Aluminum Valley Wing Flanges",
      intakeRateTested: "150 in/hr intake verified",
      completedDate: "April 2026",
      homeownerInitials: "Kenneth W.",
      verifiedSavings: "Saved $3,450 vs national competitor bids",
      keyFeature: "Custom pitch alignment keeps water adhering to capillary mesh on 10/12 rooflines",
      hoaCompliance: "Bella Vista ACC Permit #ACC-2026-884 Approved",
      permitOrCodeNotes: "Complies with City of Bella Vista Community Development drainage regulations."
    }
  ],
  "rogers": [
    {
      id: "cs-rog-01",
      city: "Rogers",
      neighborhood: "Pinnacle Hills / Champions Drive",
      streetName: "Champions Dr & Pinnacle Springs Rd",
      zipCode: "72758",
      homeType: "Luxury 5,200 Sq Ft Multi-Tier Estate",
      linearFeet: 290,
      pitch: "8/12 Complex Multi-Hip Roofline",
      treeThreat: "Silver Maple Helicopters, Red Oak Catkins & Beaver Lake Humidity",
      problem: "Aerodynamic maple seeds penetrated perforated aluminum covers, germinating into 4-inch saplings inside gutter troughs. High humidity prevented drying, causing black mold to streak limestone facades.",
      solutionExecuted: "10-point systemic restoration: mechanical extraction of root-bound sludge, high-pressure jetting of 6 underground downspout drains, laser pitch adjustment across 5 runs, sealed 8 box miters, and installation of 50-micron 316 marine-grade mesh.",
      materialUsed: "316 Marine-Grade marine-grade 316 stainless Steel + T6 Heavy Aluminum Extrusion",
      intakeRateTested: "150 in/hr flow tested under simulated 3-inch/hr cloudburst",
      completedDate: "June 2026",
      homeownerInitials: "Richard & Karen B.",
      verifiedSavings: "Saved $5,100 compared to national competitor's $6,800 quote ($1,700 actual)",
      keyFeature: "50-micron aperture prevents microscopic maple root hair penetration and spore buildup",
      hoaCompliance: "Pinnacle Hills HOA Architectural Committee 100% Approved",
      permitOrCodeNotes: "City of Rogers Risk Reduction and Code Enforcement Section 105 compliance verified."
    },
    {
      id: "cs-rog-02",
      city: "Rogers",
      neighborhood: "Shadow Valley Country Club",
      streetName: "Shadow Valley Pkwy & Country Club Dr",
      zipCode: "72758",
      homeType: "Two-Story Executive Stucco & Brick Home",
      linearFeet: 222,
      pitch: "7/12 Pitch",
      treeThreat: "Mature Red Oak, Sweetgum & River Birch",
      problem: "Slotted reverse-curve guards failed during heavy spring thunderstorms, overshooting rainwater directly onto entry portico and causing foundation settling cracks in decorative driveway pavers.",
      solutionExecuted: "Removed reverse-curve hoods, replaced 34 failing aluminum clips with 1.5\" structural zinc screw hidden hangers, realigned slope, and mounted 316 marine-grade 316 micro-mesh directly to gutter lip and fascia.",
      materialUsed: "316 marine-grade 316 stainless Mesh with 50-Micron Weave",
      intakeRateTested: "150 in/hr throughput verified",
      completedDate: "April 2026",
      homeownerInitials: "David H.",
      verifiedSavings: "Saved $4,880 compared to LeafFilter bid",
      keyFeature: "Zero water overshoot even during 2.5 in/hr Ozark tornado-season cloudbursts",
      hoaCompliance: "Shadow Valley Master Association Approved",
      permitOrCodeNotes: "Benton County Drainage & Grading Ordinance standards met."
    }
  ],
  "fayetteville": [
    {
      id: "cs-fvl-01",
      city: "Fayetteville",
      neighborhood: "Mount Sequoyah Historic Wooded Overlook",
      streetName: "Sequoyah Dr & Skyline Dr",
      zipCode: "72701",
      homeType: "Mid-Century Modern Hillside Residence",
      linearFeet: 198,
      pitch: "10/12 Steep Pitch with 70-Year Hardwood Canopy",
      treeThreat: "Giant Centennial White Oaks & Sugar Maples",
      problem: "Relentless autumn leaf fall and spring catkin drops crushed plastic guards under wet weight, damming gutters and sending sheets of water against native stone foundation walls, flooding the crawlspace.",
      solutionExecuted: "Extracted 3.8 cubic feet of wet leaf compost, laser-leveled 5 sagging trough sections, added 2 high-capacity downspout extenders redirecting runoff 12 feet from foundation footing, and secured 316 316 stainless mesh with zinc screw brackets.",
      materialUsed: "316 Heavy Stainless 316 stainless mesh + Anodized Aluminum Chassis",
      intakeRateTested: "150 in/hr intake verified under heavy rain simulation",
      completedDate: "May 2026",
      homeownerInitials: "Sarah & Mark W.",
      verifiedSavings: "Saved $3,200 vs corporate franchise quotes",
      keyFeature: "Mesh handles heavy wet leaf weight without sagging or warping; leaves blow off as soon as sun dries them",
      hoaCompliance: "Historic District preservation standards preserved; 0% shingle penetration",
      permitOrCodeNotes: "City of Fayetteville Development Services drainage & hillside stabilization compliance."
    },
    {
      id: "cs-fvl-02",
      city: "Fayetteville",
      neighborhood: "Wilson Park Historic District",
      streetName: "Lafayette St & N Gregg Ave",
      zipCode: "72701",
      homeType: "1918 Historic Craftsman Bungalow",
      linearFeet: 164,
      pitch: "6/12 Pitch",
      treeThreat: "Mature Sugar Maple, Sycamore & Elm",
      problem: "Clogged troughs caused overflow that stained original cypress clapboard siding and rotted 80-year-old decorative fascia tails. Historic commission required non-invasive installation with zero shingle damage.",
      solutionExecuted: "Replaced damaged fascia with matching primed rot-proof composite trim, realigned trough slope with laser level, sealed box miters, and installed low-profile 50-micron 316 stainless mesh attached exclusively to fascia and gutter lip.",
      materialUsed: "Low-Profile 316 marine-grade 316 stainless Mesh with Charcoal Anodized Aluminum Frame",
      intakeRateTested: "150 in/hr flow capacity verified",
      completedDate: "March 2026",
      homeownerInitials: "Thomas E.",
      verifiedSavings: "Saved $2,900 vs big-box brand quote",
      keyFeature: "Zero shingle penetration preserved 100% of historic roofline & CertainTeed warranty",
      hoaCompliance: "Fayetteville Historic District Commission Approved",
      permitOrCodeNotes: "Complies with City of Fayetteville Historic Preservation Guidelines."
    }
  ],
  "springdale": [
    {
      id: "cs-spd-01",
      city: "Springdale",
      neighborhood: "Har-Ber Meadows",
      streetName: "Founders Park Dr & Har-Ber Ave",
      zipCode: "72762",
      homeType: "Sprawling Single-Story Executive Ranch",
      linearFeet: 235,
      pitch: "6/12 Architectural Pitch",
      treeThreat: "Pin Oak, River Birch & Agricultural Shingle Dust",
      problem: "Expansive Vertisol clay soil shifting around slab footing caused by unchecked roof runoff pouring over clogged plastic gutter shields. Foundation repair engineer required certified gutter protection before warranting slab leveling.",
      solutionExecuted: "Laser re-pitched 4 trough runs to eliminate standing water pockets, installed 50-micron 316 marine-grade 316 micro-mesh, connected 3 underground downspout extension adaptors discharging 10 feet from foundation footing.",
      materialUsed: "316 marine-grade 316 micro-mesh + High-Capacity Downspout Transition Boots",
      intakeRateTested: "150 in/hr throughput verified under heavy spring storm test conditions",
      completedDate: "April 2026",
      homeownerInitials: "Elena R.",
      verifiedSavings: "Protected $18,000 slab foundation warranty and saved $3,900 vs LeafFilter",
      keyFeature: "Direct underground drain connection routes 100% of roof runoff away from expansive clay perimeter",
      hoaCompliance: "Har-Ber Meadows Property Owners Association Compliant",
      permitOrCodeNotes: "City of Springdale Engineering & Building Inspection Division drainage specifications met."
    },
    {
      id: "cs-spd-02",
      city: "Springdale",
      neighborhood: "Shiloh Historic District / Downtown",
      streetName: "E Emma Ave & N Main St",
      zipCode: "72764",
      homeType: "Classic Brick Ranch with Attached Garage",
      linearFeet: 180,
      pitch: "5/12 Pitch",
      treeThreat: "River Birch Seed Pods, Sweetgum & Pine",
      problem: "Fine river birch seeds and shingle grit passed through wide screen holes, creating dense peat moss sludge inside gutters that sprouted active weed growth and clogged downspouts.",
      solutionExecuted: "Full mechanical vacuum cleanout, pressure flushed 4 downspout drops, installed 50-micron micro-mesh blocking 100% of fine birch seeds, and upgraded 16 failing brackets to 1.5\" zinc-coated hidden screws.",
      materialUsed: "316 Marine-Grade Stainless Steel 50-Micron Filter Mesh",
      intakeRateTested: "150 in/hr verified",
      completedDate: "May 2026",
      homeownerInitials: "Carlos & Maria V.",
      verifiedSavings: "Saved $2,800 compared to regional franchise quotes",
      keyFeature: "50-micron weave blocks microscopic weed seeds and river birch pods completely",
      hoaCompliance: "Standard Residential Code Compliant",
      permitOrCodeNotes: "Washington County Residential Building Standards Section 12 compliant."
    }
  ],
  "centerton": [
    {
      id: "cs-cnt-01",
      city: "Centerton",
      neighborhood: "Kimmel Road / Sienna Estates Area",
      streetName: "Kimmel Rd & Gambas Dr",
      zipCode: "72719",
      homeType: "New Construction Two-Story Modern Craftsman",
      linearFeet: 210,
      pitch: "7/12 Pitch",
      treeThreat: "Young Red Oak Stands, Sweetgum & High Wind Construction Dust",
      problem: "Severe corner foundation water pooling during spring flash downpours causing perimeter soil erosion and hairline drywall cracking inside master bedroom due to soil heaving.",
      solutionExecuted: "Installed 50-micron 316 marine-grade 316 micro-mesh with extruded aluminum chassis across all 210 LF. Upgraded 2 downspouts to 3x4 inch commercial high-capacity drop outlets, laser-realigned slope on 2 sagging rear sections.",
      materialUsed: "316 marine-grade 316 stainless Micro-Mesh + Commercial 3x4 Drop Outlets",
      intakeRateTested: "150 in/hr throughput capacity verified",
      completedDate: "April 2026",
      homeownerInitials: "Austin & Megan T.",
      verifiedSavings: "Saved $3,600 vs national brand and protected new slab foundation",
      keyFeature: "3x4 high-capacity commercial downspout drops handle concentrated multi-valley flow without backpressure",
      hoaCompliance: "Sienna Estates HOA Architectural Committee Approved",
      permitOrCodeNotes: "City of Centerton Building & Drainage Code Section 8 compliant."
    }
  ],
  "cave-springs": [
    {
      id: "cs-cvs-01",
      city: "Cave Springs",
      neighborhood: "The Creeks Golf Estates",
      streetName: "The Creeks Golf Dr & Healing Springs Rd",
      zipCode: "72718",
      homeType: "Custom Executive Luxury Home",
      linearFeet: 260,
      pitch: "8/12 Complex Hip & Valley Roofline",
      treeThreat: "Silver Maple Seed Spinners, River Birch Catkins & Red Oak",
      problem: "Massive estate roof collection volume overwhelmed standard aluminum screen covers during torrential storms, washing out custom landscaped beds and sending water against basement walls.",
      solutionExecuted: "Complete gutter tune-up, laser pitch correction on 6 trough runs, sealed all miters with high-grade polyurethane, and installed 50-micron 316 stainless steel micro-mesh with custom valley splash diverters.",
      materialUsed: "316 Marine Stainless Steel Micro-Mesh + Custom Anodized Aluminum Valley Armor",
      intakeRateTested: "150 in/hr flow certified",
      completedDate: "May 2026",
      homeownerInitials: "Jason & Laura H.",
      verifiedSavings: "Saved $4,700 vs corporate franchise pricing",
      keyFeature: "Custom valley splash diverters contain concentrated roof valley deluges with zero overflow",
      hoaCompliance: "The Creeks Golf Estates Architectural Review Committee Approved",
      permitOrCodeNotes: "Benton County Drainage & Stormwater Management Standards verified."
    }
  ],
  "lowell": [
    {
      id: "cs-lwl-01",
      city: "Lowell",
      neighborhood: "Ward Nail Park / Hickory Creek Area",
      streetName: "Goad Springs Rd & McClure Ave",
      zipCode: "72745",
      homeType: "Split-Level Family Home with Wooded Lot",
      linearFeet: 198,
      pitch: "6/12 Pitch",
      treeThreat: "Sweetgum Balls, River Birch Seeds & Hickory",
      problem: "Sweetgum balls and fine birch seeds wedged in standard slotted vinyl covers, creating standing water pools and attracting mosquito breeding within 6 feet of bedroom windows.",
      solutionExecuted: "Removed warped vinyl covers, performed complete sludge vacuum extraction, installed 50-micron 316 stainless micro-mesh flush to gutter lip and fascia. Sealed 3 leaking corner joints with industrial polyurethane.",
      materialUsed: "316 marine-grade 316 stainless Micro-Mesh + Hidden Heavy-Duty Zinc Brackets",
      intakeRateTested: "150 in/hr verified",
      completedDate: "March 2026",
      homeownerInitials: "Dustin P.",
      verifiedSavings: "Saved $3,100 vs corporate bid and permanently eliminated standing water mosquito hazards",
      keyFeature: "Zero standing water pockets eliminated insect breeding habitat along roofline",
      hoaCompliance: "City of Lowell Residential Standards Compliant",
      permitOrCodeNotes: "City of Lowell Code Enforcement residential drainage regulations met."
    }
  ]
};

export function getCaseStudiesForCity(city: string): LocalCaseStudy[] {
  const key = city.toLowerCase().replace(/\s+/g, '-');
  return LOCAL_CASE_STUDIES[key] || LOCAL_CASE_STUDIES['bentonville'] || [];
}
