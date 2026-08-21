export interface InstallationLog {
  id: string;
  location: string;
  roofProfile: string;
  problem: string;
  execution: string;
  flowRateTested?: string;
}

// Keyed by lowercase city name matching CITIES_DATA keys
export const INSTALLATION_LOGS: Record<string, InstallationLog[]> = {
  bentonville: [
    {
      id: 'bvl-001',
      location: 'Downtown Historic District (NW 2nd St & A St)',
      roofProfile: '188 LF, 7/12 Pitch, Heavy Post Oak Canopy',
      problem: 'Severe spring catkin sludge clogging downspout drop outlets; fascia rotting from repeated gutter overflow.',
      execution: 'Realigned pitch with laser leveling, replaced 38 failing nail spikes with 1.5" zinc-coated hidden screw hangers, sealed all 4 box miters, installed 50-micron 316 Marine-Grade Micro-Mesh with valley splash diverters.',
      flowRateTested: '150 in/hr throughput capacity.',
    },
    {
      id: 'bvl-002',
      location: 'Sugar Creek / Coler Mountain Area (NW Peach Orchard Rd)',
      roofProfile: '245 LF, Multi-Tier Hip Roof, Dense Sweetgum & Pine Mix',
      problem: 'Sweetgum balls and shingle grit lodging in standard slotted covers, causing complete water overshoot onto foundation flowerbeds.',
      execution: 'Complete sludge extraction, installation of 50-micron surgical mesh directly to the front lip and fascia—zero roof shingle contact, preserving 100% CertainTeed roof warranty.',
    },
  ],
  'bella-vista': [
    {
      id: 'bvv-001',
      location: 'Loch Lomond Shoreline (Skyline Dr & Lake Norwood Rd)',
      roofProfile: '210 LF, 9/12 Steep Pitch, Dense Loblolly Pine Canopy',
      problem: 'Thin oily pine needles piercing slotted vinyl guards and forming a dense compacted mat blocking all 3 downspout inlets, triggering rear-eave overflow across a 27-foot drop.',
      execution: 'Removed failed vinyl screens, extracted 4 cubic feet of compacted needle mat, installed 50-micron 316 stainless surgical mesh flush to gutter lip and fascia. Replaced 22 loose nail spikes with 1.5" zinc hidden hangers, re-sealed 3 leaking corner miters.',
      flowRateTested: '150 in/hr throughput verified post-installation.',
    },
    {
      id: 'bvv-002',
      location: 'Highlands Ridge (Highlands Blvd & Scotsdale Dr)',
      roofProfile: '175 LF, 10/12 Extreme Pitch, Shortleaf Pine & Cedar',
      problem: 'Dangerous 28-foot drop-off at rear eaves requiring homeowner to pay $300/visit for professional cleaning. Pine resin buildup cementing debris into solid sludge blocks.',
      execution: 'Laser pitch realignment on 3 sagging trough sections, full sludge extraction, sealed all exterior miters with industrial polyurethane, installed 50-micron 316 micro-mesh with valley diverters at steep roof-to-wall intersections.',
    },
  ],
  rogers: [
    {
      id: 'rog-001',
      location: 'Shadow Valley Country Club Area (Shadow Valley Pkwy)',
      roofProfile: '222 LF, Two-Story, Mixed Red Oak & Silver Maple Canopy',
      problem: 'Beaver Lake microclimate humidity keeping gutter debris perpetually wet, accelerating mold inside plastic gutter guards and rotting fascia boards. Recurring $250 cleaning bills 4× per year.',
      execution: 'Stripped existing failed plastic screens, extracted compacted wet leaf sludge, installed 316 marine-grade 50-micron micro-mesh on heavy aluminum extrusion frame impervious to Beaver Lake humidity and sustained UV exposure.',
      flowRateTested: '150 in/hr verified under heavy spring storm test conditions.',
    },
    {
      id: 'rog-002',
      location: 'Pinnacle Hills Estate (Champions Dr)',
      roofProfile: '290 LF, Multi-Tier Luxury Estate, Northern Red Oak & Dogwood Canopy',
      problem: 'Heavy spring maple seed spinners infiltrating perforated aluminum screens, combining with shingle grit to create concrete-like clogs at all 6 downspout outlets simultaneously.',
      execution: 'Full 10-point gutter restoration: laser pitch correction on 4 trough sections, complete sludge and seed-pod extraction, installation of 50-micron stainless mesh on all 290 LF, sealed all 8 box miters, replaced all loose spike hardware with 1.5" zinc screws.',
    },
  ],
  fayetteville: [
    {
      id: 'fvl-001',
      location: 'Mount Sequoyah Historic Corridor (Sequoyah Dr)',
      roofProfile: '198 LF, Multi-Level Historic, 70-Year White Oak & Sugar Maple Canopy',
      problem: 'Massive autumn leaf drops from giant heritage oaks crushing flimsy plastic guards under wet debris weight, causing total trough overflow against historic stone foundation walls and flooding the crawlspace.',
      execution: 'Removed collapsed plastic grid covers, extracted 3.5 cubic feet of compacted leaf sludge, installed heavy-duty 50-micron 316 surgical stainless mesh on extruded aluminum chassis. Laser-leveled 5 sagging trough sections, added 2 downspout extenders redirecting discharge from foundation.',
      flowRateTested: '150 in/hr throughput capacity sustained through 2-inch/hr storm event.',
    },
    {
      id: 'fvl-002',
      location: 'Wilson Park Historic District (Lafayette St & Gregg Ave)',
      roofProfile: '164 LF, Craftsman Bungalow, Sugar Maple & Sycamore Canopy',
      problem: 'Overflowing clogged gutters causing black water staining on historic wood siding and actively rotting 80-year-old cypress fascia boards. HOA required shingle-safe installation to maintain preservation status.',
      execution: 'Careful removal of rotted wood fascia sections, replacement with primed composite backer, laser slope realignment on 2 sections, installation of 50-micron surgical steel mesh fully preserving historic roofline profile with zero shingle contact.',
    },
  ],
  springdale: [
    {
      id: 'spd-001',
      location: 'Har-Ber Meadows (Founders Park Dr)',
      roofProfile: '235 LF, Sprawling Single-Story, Vertisol Clay Soil Zone, Pin Oak Canopy',
      problem: 'Expansive clay soil shifting around slab footing caused by unchecked roof runoff pouring over clogged plastic gutter shields. Foundation repair company required certified gutter protection before warranting slab leveling.',
      execution: 'Laser re-pitched 4 trough runs to eliminate standing water pockets, installed 50-micron 316 surgical micro-mesh, connected 3 underground downspout extension adaptors discharging 10 feet from foundation footing.',
      flowRateTested: '150 in/hr throughput verified under heavy spring storm test conditions.',
    },
    {
      id: 'spd-002',
      location: 'Brush Creek Area (E Robinson Ave)',
      roofProfile: '180 LF, Two-Story, River Birch & Sweetgum Mix',
      problem: 'Fine river birch seed pods and shingle grit passing through large mesh openings, creating dense peat moss sludge inside gutters that sprouted active weed growth.',
      execution: 'Full mechanical gutter cleanout, installation of 50-micron micro-mesh blocking 100% of fine birch seeds, upgraded 16 failing brackets to 1.5" zinc-coated hidden screws.',
    },
  ],
  centerton: [
    {
      id: 'cnt-001',
      location: 'Kimmel Road / West Centerton Area (Main St Corridor)',
      roofProfile: '210 LF, New Construction Ranch, Expansive Clay Soil Zone, Young Red Oak Canopy',
      problem: 'Severe corner foundation pooling during spring flash downpours causing perimeter soil erosion and hairline drywall cracking inside home.',
      execution: 'Installed 50-micron 316 surgical micro-mesh with extruded aluminum chassis across all 210 LF. Upgraded 2 downspouts to 3x4 inch commercial high-capacity drop outlets, laser-realigned slope on 2 sagging rear sections.',
      flowRateTested: '150 in/hr throughput capacity verified.',
    },
  ],
  lowell: [
    {
      id: 'lwl-001',
      location: 'Ward Nail Park / Hickory Creek Area (Goad Springs Rd)',
      roofProfile: '198 LF, Split-Level, River Birch & Sweetgum Canopy',
      problem: 'Sweetgum balls and fine birch seeds wedging in standard slotted vinyl covers, creating standing water pools and attracting mosquito breeding within 6 feet of bedroom windows.',
      execution: 'Removed warped vinyl covers, performed complete sludge vacuum extraction, installed 50-micron 316 stainless micro-mesh flush to gutter lip and fascia. Sealed 3 leaking corner joints with industrial polyurethane.',
    },
  ],
  farmington: [
    {
      id: 'fmt-001',
      location: 'Valley View Area (Hwy 62 Corridor)',
      roofProfile: '185 LF, Multi-Level Hillside, Valley Rain Volume Zone, Mixed Oak & Maple',
      problem: 'Steep roofline accelerating water velocity past cheap curved hoods, causing severe wall-splashing and driveway gully erosion during every significant Ozark storm.',
      execution: 'Installed 50-micron 316 surgical micro-mesh with hydrodynamic surface design accepting high-velocity water without overshoot. Added 2 valley splash diverters at primary water concentration points on split-level transitions.',
    },
  ],
  'siloam-springs': [
    {
      id: 'ssp-001',
      location: 'Sager Creek Historic District (E University St)',
      roofProfile: '178 LF, Historic Two-Story, Mature Heritage Oak Canopy',
      problem: 'Heritage oak canopy dropping massive autumn leaf loads overwhelming standard 5-inch gutters within 48 hours of peak fall events. Basement taking on water through foundation wall seepage cracks.',
      execution: 'Upgraded critical front elevation to 6-inch high-capacity aluminum trough, installed 50-micron surgical micro-mesh, added 2 supplemental downspouts to increase drainage capacity for heavy seasonal leaf-fall volume.',
    },
  ],
  'cave-springs': [
    {
      id: 'cvs-001',
      location: 'The Creeks Golf Estates (S Cave Springs Rd)',
      roofProfile: '267 LF, Luxury Estate, Multi-Hip Roof, Mixed Oak & Pine Canopy',
      problem: 'Multiple complex hip roof valleys concentrating massive rainfall volumes into 2 shared downspouts, causing severe foundation flowerbed erosion and slab corner displacement.',
      execution: 'Engineered valley splash guard system at all 4 primary convergence points, laser-aligned all 267 LF, installed 50-micron 316 surgical micro-mesh with extruded aluminum frame on all elevations. Added 2 downspout outlets for complete drainage balance.',
    },
  ],
  'prairie-grove': [
    {
      id: 'prg-001',
      location: 'Battlefield Heights (E Heritage Pkwy)',
      roofProfile: '191 LF, Ranch Estate, Dense Hardwood & Cedar Canopy',
      problem: 'Dense autumn hardwood debris crushing installed vinyl screens within first 18 months, creating internal leaf dam requiring complete screen removal and manual gutter scooping each fall.',
      execution: 'Removed failed vinyl screens, installed 50-micron 316 stainless micro-mesh on heavy extruded aluminum chassis rated for 45 lbs/LF ice load. Reinforced 19 hangers with 1.5" zinc screws spaced every 24 inches.',
    },
  ],
  tontitown: [
    {
      id: 'ttn-001',
      location: 'St. Joseph Area (N Goad Springs Rd)',
      roofProfile: '187 LF, Two-Story Traditional, Oak & Sweetgum Canopy',
      problem: 'Sweetgum spiky seed balls lodging inside slotted screens during high-wind events, fully blocking water entry at gutter centerlines and requiring annual screen removal to clean underneath.',
      execution: 'Replaced slotted screens with 50-micron surgical stainless mesh that deflects round sweetgum balls without capturing them. Completed laser slope realignment on 3 sagging trough sections, sealed 4 corner joints.',
    },
  ],
  'pea-ridge': [
    {
      id: 'prd-001',
      location: 'North Ridge Area (N Slack St)',
      roofProfile: '172 LF, Ranch, Shortleaf Pine & Post Oak Canopy',
      problem: 'Thin pine needles wedging vertically into 1/4-inch slotted metal screens, building a compacted needle bridge that shed all rainfall over the gutter lip into foundation beds.',
      execution: 'Installed 50-micron 316 stainless surgical mesh eliminating all needle penetration pathways. Replaced 16 loose hangers with zinc screws, re-pitched 2 sections to positive slope, sealed 2 leaking corner joints.',
    },
  ],
  elkins: [
    {
      id: 'elk-001',
      location: 'Round Mountain Road Area',
      roofProfile: '163 LF, Hillside Ranch, White River Valley Mixed Hardwoods',
      problem: 'River valley humidity causing gutter sludge to remain permanently wet, accelerating fascia board rot and creating active mosquito breeding environment 4 feet from the back door.',
      execution: 'Full interior sludge extraction with industrial wet-vac, installed 316 marine-grade stainless micro-mesh impervious to White River Valley humidity and UV degradation, added downspout extension directing discharge 8 feet from foundation.',
    },
  ],
  gravette: [
    {
      id: 'grv-001',
      location: 'Western Benton County Acreage (Hwy 72 W Corridor)',
      roofProfile: '224 LF, Large Two-Story, Oak & Hickory, High-Wind Exposure Zone',
      problem: 'Homeowner requiring annual dangerous ladder climbs on two-story eaves. Drop-in foam inserts blown out by 50+ mph storm winds and scattered across landscaping.',
      execution: 'Mechanically fastened 316 stainless micro-mesh with self-tapping zinc screws every 12 inches—tested against 80 MPH wind loads. Full gutter restoration, laser slope realignment on all trough runs, completed in one 5-hour installation.',
    },
  ],
};
