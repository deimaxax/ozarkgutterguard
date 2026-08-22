// Norint prideti naują postą:
// 1. Sukurk naują failą: 07-tavo-pavadinimas.ts
// 2. Kopijuok struktūrą iš bet kurio esamo failo
// 3. Eksportuok kaip "export default post;"
// 4. Importuok čia apačioje ir pridėk į GUIDES_DATA masyvą

export type { GuidePost, GuideSection } from './_types';

// Naują postą: sukurk 11-pavadinimas.ts, importuok čia, pridėk į masyvą
import post01 from './01-oak-catkins';
import post02 from './02-foundation-cracks';
import post03 from './03-ozark-rainfall';
import post04 from './04-loblolly-pine';
import post05 from './05-foundation-audit';
import post06 from './06-beaver-lake';
import post07 from './07-is-leaffilter-overpriced';
import post08 from './08-do-gutter-guards-work';
import post09 from './09-gutter-guard-cost-guide';
import post10 from './10-do-you-still-need-to-clean';
import newPost07 from './07-leaffilter-vs-micro-mesh';
import newPost08 from './08-micro-mesh-vs-reverse-curve';
import newPost09 from './09-gutter-screens-vs-micro-mesh';
import newPost10 from './10-foam-gutter-inserts-vs-micro-mesh';
import newPost11 from './11-brush-gutter-guards-vs-micro-mesh';
import newPost12 from './12-gutter-guard-costs-nwa';
import newPost13 from './13-diy-vs-pro-installation';
import newPost14 from './14-do-you-still-need-to-clean-gutters';
import newPost15 from './15-winter-gutter-guards-ice-dams';
import newPost16 from './16-top-rated-gutter-guards-analysis';
import newPost17 from './17-clay-soil-foundation-cracks';
import newPost18 from './18-fayetteville-steep-roof-gutters';
import newPost19 from './19-bella-vista-pine-acorns-guide';
import newPost20 from './20-seamless-vs-sectional-gutters';
import newPost21 from './21-5-inch-vs-6-inch-gutters';
import newPost22 from './22-gutter-guard-lawsuits-warranties';
import newPost23 from './23-gutter-materials-aluminum-copper';
import newPost24 from './24-underground-downspout-drains-nwa';
import newPost25 from './25-roof-valleys-gutter-overflow';
import newPost26 from './26-gutter-replacement-warning-signs';
import newPost27 from './27-springdale-gutter-protection';
import newPost28 from './28-centerton-new-construction-gutters';
import newPost29 from './29-beaver-lake-lake-home-drainage';
import newPost30 from './30-fall-gutter-preparation-nwa';
import newPost31 from './31-spring-gutter-cleaning-nwa';
import newPost32 from './32-gutter-maintenance-checklist';
import newPost33 from './33-moss-roof-gutter-guards';
import newPost34 from './34-hail-storm-gutter-inspection';
import newPost35 from './35-gutter-guards-home-value-nwa';
import newPost36 from './36-gutter-guards-rental-property-nwa';
import post37 from './37-leafguard-vs-ozark-comparison';
import post38 from './38-gutter-helmet-vs-ozark-comparison';
import post39 from './39-home-depot-lowes-vs-pro-guards';
import post40 from './40-kguard-vs-ozark-comparison';
import post41 from './41-gutterglove-leafblaster-vs-ozark';
import post42 from './42-leaffilter-alternatives-nwa';
import post43 from './43-gutter-guard-cost-per-linear-foot';
import post44 from './44-why-gutter-guards-overflow';
import post45 from './45-shadow-valley-hoa-guidelines';

export const GUIDES_DATA = [
  post01, // oak-catkins-clogging-gutters-nwa
  post02, // why-is-my-foundation-cracking-bentonville-ar
  post03, // ozark-rainfall-patterns-roof-drainage-guide
  post04, // loblolly-pine-needles-gutter-damage-bella-vista
  post05, // how-to-tell-if-gutters-are-causing-foundation-damage
  post06, // beaver-lake-humidity-gutter-mold-rogers-ar
  post07, // is-leaffilter-overpriced
  post08, // are-there-any-gutter-guards-that-actually-work
  post09, // what-is-the-average-cost-to-have-gutter-guards-installed
  post10, // do-you-still-have-to-clean-gutters-if-you-have-gutter-guards
  newPost07,
  newPost08,
  newPost09,
  newPost10,
  newPost11,
  newPost12,
  newPost13,
  newPost14,
  newPost15,
  newPost16,
  newPost17,
  newPost18,
  newPost19,
  newPost20,
  newPost21,
  newPost22,
  newPost23,
  newPost24,
  newPost25,
  newPost26,
  newPost27,
  newPost28,
  newPost29,
  newPost30,
  newPost31,
  newPost32,
  newPost33,
  newPost34,
  newPost35,
  newPost36,
  post37,
  post38,
  post39,
  post40,
  post41,
  post42,
  post43,
  post44,
  post45,
];

export function getGuide(slug: string) {
  return GUIDES_DATA.find((g) => g.slug === slug);
}
