import fs from 'fs';
import path from 'path';

const toolsDir = '/d/code/jjlmoya-utils-cooking/src/tool';

const fixes = [
  // banana-ripeness: Ethylene - DONE (manually)

  // brine: The Noma Guide - ERROR, remove URL
  {
    tool: 'brine',
    search: `{
      name: 'The Noma Guide to Fermentation - René Redzepi & David Zilber',
      url: 'https://www.nomacph.com/',
    },`,
    replace: `{
      name: 'The Noma Guide to Fermentation - René Redzepi & David Zilber',
      url: '',
    },`
  },

  // cookware-guide: The Flavor Bible - 405, remove URL
  {
    tool: 'cookware-guide',
    search: `{
      name: 'The Flavor Bible - Pairing, and Progress in Food',
      url: 'https://www.flavorprints.com/',
    },`,
    replace: `{
      name: 'The Flavor Bible - Pairing, and Progress in Food',
      url: '',
    },`
  },

  // cookware-guide: On Food and Cooking - ERROR, remove URL
  {
    tool: 'cookware-guide',
    search: `{
      name: 'On Food and Cooking - Harold McGee (La Ciencia de la Cocina)',
      url: 'https://www.foodscience.org/',
    },`,
    replace: `{
      name: 'On Food and Cooking - Harold McGee (La Ciencia de la Cocina)',
      url: '',
    },`
  },

  // egg-timer: The Food Lab articles - 402, use main site
  {
    tool: 'egg-timer',
    search: `{
      name: 'The Food Lab: The Science of the Best Hard Boiled Eggs - J. Kenji López-Alt',
      url: 'https://www.seriouseats.com/the-food-lab-hard-boiled-eggs-recipe',
    },`,
    replace: `{
      name: 'The Food Lab: The Science of the Best Hard Boiled Eggs - J. Kenji López-Alt',
      url: 'https://www.seriouseats.com/',
    },`
  },

  {
    tool: 'egg-timer',
    search: `{
      name: 'The Food Lab: Perfect Soft Boiled Eggs',
      url: 'https://www.seriouseats.com/soft-boiled-eggs-recipe',
    },`,
    replace: `{
      name: 'The Food Lab: Perfect Soft Boiled Eggs',
      url: 'https://www.seriouseats.com/',
    },`
  },

  // ingredient-rescaler: The Flavor Bible - 405, remove URL
  {
    tool: 'ingredient-rescaler',
    search: `{
      name: 'The Flavor Bible by Karen Page and Andrew Dornenburg',
      url: 'https://www.flavorprints.com/',
    },`,
    replace: `{
      name: 'The Flavor Bible by Karen Page and Andrew Dornenburg',
      url: '',
    },`
  },

  // kitchen-timer: USDA - 403, use main site
  {
    tool: 'kitchen-timer',
    search: `{
      name: 'Seguridad Alimentaria: USDA Guidelines',
      url: 'https://www.fsis.usda.gov/',
    },`,
    replace: `{
      name: 'Seguridad Alimentaria: USDA Guidelines',
      url: 'https://www.usda.gov/',
    },`
  },

  // meringue-peak: Exploratorium - 403, remove URL
  {
    tool: 'meringue-peak',
    search: `{
      name: 'Exploratorium: The Science of Cooking - Egg Science',
      url: 'https://www.exploratorium.edu/explore/cooking/egg-science',
    },`,
    replace: `{
      name: 'Exploratorium: The Science of Cooking - Egg Science',
      url: '',
    },`
  },

  // mold-scaler: Baking Science - 403, remove URL
  {
    tool: 'mold-scaler',
    search: `{
      name: 'Baking Science and Technology - E.J. Pyler',
      url: 'https://www.bakingbusiness.com/',
    },`,
    replace: `{
      name: 'Baking Science and Technology - E.J. Pyler',
      url: '',
    },`
  },

  // pizza: Franco Pepe - ERROR, remove URL
  {
    tool: 'pizza',
    search: `{
      name: 'Franco Pepe - Pepe in Grani',
      url: 'https://www.pepeingranitalia.com/',
    },`,
    replace: `{
      name: 'Franco Pepe - Pepe in Grani',
      url: '',
    },`
  },

  // pizza: Harina Caputo - ERROR, try different URL
  {
    tool: 'pizza',
    search: `{
      name: 'Harina Caputo',
      url: 'https://www.caputoprepara.com/',
    },`,
    replace: `{
      name: 'Harina Caputo',
      url: 'https://www.caputofarine.it/',
    },`
  },

  // roux-guide: Larousse Gastronomique - 405, remove URL
  {
    tool: 'roux-guide',
    search: `{
      name: 'Larousse Gastronomique - La Biblia de la Cocina',
      url: 'https://www.laroussecocina.com/',
    },`,
    replace: `{
      name: 'Larousse Gastronomique - La Biblia de la Cocina',
      url: '',
    },`
  },

  // roux-guide: Julia Child - 405, use Wikipedia
  {
    tool: 'roux-guide',
    search: `{
      name: 'Mastering the Art of French Cooking - Julia Child',
      url: 'https://www.juliachild.com/',
    },`,
    replace: `{
      name: 'Mastering the Art of French Cooking - Julia Child',
      url: 'https://en.wikipedia.org/wiki/Mastering_the_Art_of_French_Cooking',
    },`
  },

  // roux-guide: On Food and Cooking - ERROR, remove URL
  {
    tool: 'roux-guide',
    search: `{
      name: 'On Food and Cooking - Harold McGee (La Ciencia del Roux)',
      url: 'https://www.foodscience.org/',
    },`,
    replace: `{
      name: 'On Food and Cooking - Harold McGee (La Ciencia del Roux)',
      url: '',
    },`
  },

  // sourdough-calculator: The Flavor Bible - 405, remove URL
  {
    tool: 'sourdough-calculator',
    search: `{
      name: 'The Flavor Bible - Scaling and Ratios',
      url: 'https://www.flavorprints.com/',
    },`,
    replace: `{
      name: 'The Flavor Bible - Scaling and Ratios',
      url: '',
    },`
  },

  // sourdough-calculator: Full Proof Baking - ERROR, remove URL
  {
    tool: 'sourdough-calculator',
    search: `{
      name: 'Full Proof Baking - Guides on Sourdough',
      url: 'https://www.fullproofbaking.com/',
    },`,
    replace: `{
      name: 'Full Proof Baking - Guides on Sourdough',
      url: '',
    },`
  }
];

console.log('🔧 Aplicando cambios a bibliografías...\n');

for (const fix of fixes) {
  const esPath = path.join(toolsDir, fix.tool, 'i18n', 'es.ts');
  const enPath = path.join(toolsDir, fix.tool, 'i18n', 'en.ts');

  if (!fs.existsSync(esPath)) {
    console.log(`❌ ${fix.tool}/i18n/es.ts no existe`);
    continue;
  }

  // Fix ES file
  let esContent = fs.readFileSync(esPath, 'utf-8');
  if (esContent.includes(fix.search)) {
    esContent = esContent.replace(fix.search, fix.replace);
    fs.writeFileSync(esPath, esContent);
    console.log(`✏️  ${fix.tool} (ES) - actualizada`);
  } else {
    console.log(`⚠️  ${fix.tool} (ES) - no se encontró el patrón exacto`);
  }

  // Also update EN file if it exists and has the English version
  if (fs.existsSync(enPath)) {
    let enContent = fs.readFileSync(enPath, 'utf-8');
    // Try to find English version of the same entry
    const enSearch = fix.search.replace(/: '(.*?)',/, match => {
      // Keep the English name if different, but we'll handle manually if needed
      return match;
    });
    if (enContent.includes(fix.search) || enContent.includes("url: 'https://www.flavorprints.com/'")) {
      enContent = enContent.replace(fix.search, fix.replace);
      fs.writeFileSync(enPath, enContent);
      console.log(`✏️  ${fix.tool} (EN) - actualizada`);
    }
  }
}

console.log('\n✅ Cambios aplicados');
console.log('\nProximos pasos:');
console.log('1. node extract-bibliographies.js');
console.log('2. node check-404s.js');
