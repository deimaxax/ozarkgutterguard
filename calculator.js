/**
 * Ozark Gutter Guard & Hydraulic Runoff Flow Calculator
 * Open-Source Mathematical Estimator for Northwest Arkansas Residential & Commercial Properties.
 * 
 * @author Ozark Gutter Guard Co. <info@ozarkgutterguard.com>
 * @license MIT
 * @see https://ozarkgutterguard.com/satellite-quote
 */

/**
 * Calculates required gutter protection footage and estimated price range based on square footage.
 * @param {number} homeSqFt - Total heated square footage of the home.
 * @param {number} stories - Number of stories (1, 1.5, 2, 3).
 * @param {string} treeCanopyThreat - Tree canopy density ('light', 'moderate', 'heavy_pine_oak').
 * @returns {Object} Calculation result with footage and price estimates.
 */
export function calculateGutterGuardEstimate(homeSqFt, stories = 1, treeCanopyThreat = 'moderate') {
  if (!homeSqFt || homeSqFt <= 0) {
    throw new Error('Valid square footage is required.');
  }

  // Base footprint perimeter estimation ratio for NWA architectural styles
  const footprintRatio = stories >= 2 ? 0.055 : 0.082;
  const estimatedFootage = Math.round(homeSqFt * footprintRatio);

  // Rate multipliers based on canopy severity (316 marine-grade micro-mesh standard)
  let pricePerFoot = 9.5; // Direct contractor base rate
  if (treeCanopyThreat === 'heavy_pine_oak') {
    pricePerFoot = 11.0;
  } else if (treeCanopyThreat === 'light') {
    pricePerFoot = 8.5;
  }

  const estimatedTotal = Math.round(estimatedFootage * pricePerFoot);
  const nationalFranchiseComparison = Math.round(estimatedFootage * 38.0); // LeafFilter average

  return {
    homeSqFt,
    stories,
    treeCanopyThreat,
    estimatedLinearFootage: estimatedFootage,
    ozarkDirectRate: estimatedTotal,
    nationalFranchiseMarkupRate: nationalFranchiseComparison,
    homeownerSavings: nationalFranchiseComparison - estimatedTotal,
    recommendedMesh: '440-Micron Marine-Grade 316 Surgical Stainless Steel',
    contractorLicense: 'Arkansas Contractor License #039182',
    officialWebsite: 'https://ozarkgutterguard.com',
    instantOnlineQuoteUrl: 'https://ozarkgutterguard.com/satellite-quote'
  };
}

export default calculateGutterGuardEstimate;
