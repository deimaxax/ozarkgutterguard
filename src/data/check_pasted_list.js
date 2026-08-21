const fs = require('fs');
const path = require('path');

function getSlugsFromDir(dir) {
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && !f.startsWith('_'));
  let slugs = [];
  for (const f of files) {
    const c = fs.readFileSync(dir + '/' + f, 'utf8');
    const matches = Array.from(c.matchAll(/slug:\s*['"]([^'"]+)['"]/g)).map(m => m[1]);
    slugs.push(...matches);
  }
  return slugs;
}

const seoSlugs = getSlugsFromDir('c:/Users/Deimantas/source/Gyythub/OzarkGutterGuard/src/data/seoPages');
const guideSlugs = getSlugsFromDir('c:/Users/Deimantas/source/Gyythub/OzarkGutterGuard/src/data/guides');
const appDirs = fs.readdirSync('c:/Users/Deimantas/source/Gyythub/OzarkGutterGuard/src/app').filter(d => !d.includes('.'));
const allSlugs = new Set([...seoSlugs, ...guideSlugs, ...appDirs]);

const newList = [
  "gutter", "roofing companies near me", "roofers near me", "gutter guards", "gutters near me", "roofing",
  "roofing companies", "gutter companies near me", "roofing contractors", "french drain", "french drain installation",
  "superior roofing", "metal roofers", "company roofing", "gutter guard gutters", "gutters and gutter guards",
  "roofing firms near me", "french trench drain", "eavestrough guards", "eavestrough gutter guards", "gutter cleaning",
  "gutter service", "exterior cleaning service", "gutter maintenance", "exterior cleaning", "roofing service",
  "drainage system", "leaf guard", "gutter cleaning near me", "roof repair near me", "roof repair",
  "gutter installation near me", "gutter installation", "roofing contractors near me", "gutter repair near me",
  "leaf filter cost", "leafguard gutters", "metal roofing near me", "seamless gutters", "gutter repair",
  "leaf guard cost", "best roofing company near me", "gutter replacement", "seamless gutters near me",
  "erie roofing", "roof leak repair", "gutter covers", "leaf filter gutters", "roofers in my area",
  "best gutter guards", "rain gutters", "gutter replacement near me", "local roofing companies",
  "gutter guard installation", "gutter replacement cost", "flat roof repair", "leaf filters", "new roof cost",
  "leaf gutter", "best roofers near me", "house washing near me", "affordable roofers near me", "ice dam removal",
  "leaf gutter protection", "metal roofing companies near me", "roof leak repair near me", "metal roof installers near me",
  "roof inspection", "gutter cleaning cost", "gutter protection", "gutter guard cost", "roof estimate",
  "roof replacement", "roof restoration", "gutters and downspouts", "french drain system", "roof restoration",
  "gutters and downspouts", "soffit repair", "rain gutter installation", "roofing quotes", "erie home roofing",
  "metal roof repair near me", "small roof repair contractors", "hansons roofing", "gutter screens", "blocked drains near me",
  "local roofers", "house gutters", "gutter guards home depot", "metal roofing contractors near me",
  "powell and sons gutters", "new gutters cost", "$99 gutter cleaning near me", "ice dam removal near me",
  "eavestrough", "skylight repair near me", "new gutters", "leaf filter cost per foot", "gutter installation cost",
  "best gutter guards consumer reports", "gutter service near me", "gutter guard installation near me",
  "drain company near me", "drain", "trench drain", "affordable roofing", "roof restoration near me",
  "gutter cleaning service", "linear shower drain", "flat roof repair near me", "french drain installation near me",
  "emergency roof repair near me", "gutter companies", "elite roofing", "gutter guard installation cost",
  "skylight replacement", "rain gutter installation near me", "commercial roofing", "copper gutters",
  "local roofers near me", "house washing", "garage roof replacement", "roof and gutter cleaning",
  "flat roof replacement cost", "drainage contractors near me", "aco drain", "emergency roof leak repair",
  "gutter contractors near me", "under deck drainage system", "premier roofing", "apex roofing",
  "gutter cleaning services near me", "eavestrough cleaning", "handyman roofers near me",
  "commercial roofing contractors near me", "handyman roof repair near me", "roof replacement estimate",
  "state roofing", "erie roofing company", "seamless gutter installation near me", "leaf filter customer service",
  "roof inspection cost", "rain gutter covers", "roof moss removal", "reliable roofing", "best gutters",
  "leafguard gutters cost", "homecraft gutter protection", "cost of gutters", "gutter systems",
  "best gutter installation near me", "roof repair cost", "eagle view roofing", "gutter guys near me",
  "roof gutter cleaning", "roof inspection near me", "local gutter companies", "gutter cleaning prices",
  "gutter king", "drainage solutions", "slate roof repair near me", "leafguard gutters near me",
  "gutter guard companies", "leaf filter company", "channel drain", "gutter cleaning and repair",
  "rain gutter cleaning", "rain gutter cleaning near me", "skylight replacement near me", "leaf guard installation",
  "roofing quotes near me", "rain gutter repair", "small roof repair near me", "trex rainescape",
  "leaf filter gutter guards", "top 10 roofers near me", "advanced roofing", "roof estimates near me",
  "patriot roofing", "skylight installation near me", "reputable roofing contractors near me",
  "rain gutter repair near me", "roof painting", "roofing companies in my area", "steel roofing near me",
  "leaf guard rain gutters", "roofing and siding companies near me", "gutters home depot", "roof leak repair cost",
  "affordable roofing company", "gutter cleaning and repair near me", "best gutter company near me",
  "gutter helmet near me", "independent gutter installers", "summit roofing", "roof repair companies near me",
  "roofing and siding", "ned stevens gutter cleaning cost", "clogged drain pipe", "black gutters",
  "exterior house cleaning", "quality roofing", "french drain basement", "commercial roofing company near me",
  "top roofing companies near me", "roofing contractors in my area", "half round gutters",
  "recommended roofers near me", "flat roofers near me", "roofing and siding contractors near me",
  "local roofing contractors", "aluminium guttering", "skylight repair", "buffalo roofing", "gutter shield",
  "soffits and fascias", "local gutter cleaning", "gutter repair cost", "commercial roofing contractors",
  "gutter estimates", "gutter guard near me", "french drain cost", "house gutters cost", "shower drains",
  "roof gutters", "leaf gutter cost", "angi roofing", "roof tarping near me", "roof painting near me",
  "lowes roofing", "roof waterproofing", "home depot gutter installation", "licensed roofers near me",
  "soffit and fascia contractors near me", "valor roofing", "new roof estimate", "roofing prices",
  "american roofing company", "best leaf guard for gutters", "gutter guy", "englert leafguard",
  "gutter extensions", "roof installation cost", "gutter cleaners in my area", "flat roofing companies near me",
  "handyman roof repair", "commercial roofers near me", "best gutter guard system", "commercial roof repairs",
  "abc seamless gutters", "slot drain", "gutter downspout", "roof and gutter repair", "roof repairs in my area",
  "roofing repair contractors near me", "gutter prices", "gutter filters", "leaf guard customer service",
  "leafless gutters", "french drain pipe", "gutter repair services near me", "roofing costs",
  "top ten roofing companies", "cornerstone roofing", "mhi roofing", "roofing lead generation", "best roofing"
];

const missing = [];
newList.forEach(kw => {
  const slug = kw.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  if (!allSlugs.has(slug)) {
    missing.push({ kw, slug });
  }
});

console.log('Total New List Checked:', newList.length);
console.log('Missing Slugs Count:', missing.length);
if (missing.length > 0) {
  console.log('Missing items:', JSON.stringify(missing, null, 2));
}