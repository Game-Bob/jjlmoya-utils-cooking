import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toolsDir = path.join(__dirname, 'src', 'tool');

// Map of fixes: tool -> [(old_name, new_entry), ...]
const fixes = {
  'banana-ripeness': [
    {
      oldName: 'Ethylene and Fruit Ripening: A Biological Review (Nature Research)',
      newEntry: {
        name: 'Ethylene and Fruit Ripening: A Biological Review',
        url: '' // No valid URL found, remove it
      }
    }
  ],
  'brine': [
    {
      oldName: 'The Noma Guide to Fermentation - René Redzepi & David Zilber',
      newEntry: {
        name: 'The Noma Guide to Fermentation - René Redzepi & David Zilber',
        url: '' // Keep name only
      }
    }
  ],
  'cookware-guide': [
    {
      oldName: 'The Flavor Bible - Pairing, and Progress in Food',
      newEntry: {
        name: 'The Flavor Bible - Pairing, and Progress in Food',
        url: '' // Remove broken link
      }
    },
    {
      oldName: 'On Food and Cooking - Harold McGee (La Ciencia de la Cocina)',
      newEntry: {
        name: 'On Food and Cooking - Harold McGee (La Ciencia de la Cocina)',
        url: '' // Remove broken link
      }
    }
  ],
  'egg-timer': [
    {
      oldName: 'The Food Lab: The Science of the Best Hard Boiled Eggs - J. Kenji López-Alt',
      newEntry: {
        name: 'The Food Lab: The Science of the Best Hard Boiled Eggs - J. Kenji López-Alt',
        url: 'https://www.seriouseats.com/' // Main site instead of article
      }
    },
    {
      oldName: 'The Food Lab: Perfect Soft Boiled Eggs',
      newEntry: {
        name: 'The Food Lab: Perfect Soft Boiled Eggs',
        url: 'https://www.seriouseats.com/' // Main site
      }
    }
  ],
  'ingredient-rescaler': [
    {
      oldName: 'The Flavor Bible by Karen Page and Andrew Dornenburg',
      newEntry: {
        name: 'The Flavor Bible by Karen Page and Andrew Dornenburg',
        url: '' // Remove broken link
      }
    }
  ],
  'kitchen-timer': [
    {
      oldName: 'Seguridad Alimentaria: USDA Guidelines',
      newEntry: {
        name: 'Seguridad Alimentaria: USDA Guidelines',
        url: 'https://www.usda.gov/' // Main USDA site
      }
    }
  ],
  'meringue-peak': [
    {
      oldName: 'Exploratorium: The Science of Cooking - Egg Science',
      newEntry: {
        name: 'Exploratorium: The Science of Cooking - Egg Science',
        url: '' // Remove broken link
      }
    }
  ],
  'mold-scaler': [
    {
      oldName: 'Baking Science and Technology - E.J. Pyler',
      newEntry: {
        name: 'Baking Science and Technology - E.J. Pyler',
        url: '' // Remove broken link
      }
    }
  ],
  'pizza': [
    {
      oldName: 'Franco Pepe - Pepe in Grani',
      newEntry: {
        name: 'Franco Pepe - Pepe in Grani',
        url: '' // Remove broken link
      }
    },
    {
      oldName: 'Harina Caputo',
      newEntry: {
        name: 'Harina Caputo',
        url: 'https://www.caputofarine.it/' // Official Caputo site
      }
    }
  ],
  'roux-guide': [
    {
      oldName: 'Larousse Gastronomique - La Biblia de la Cocina',
      newEntry: {
        name: 'Larousse Gastronomique - La Biblia de la Cocina',
        url: '' // Remove broken link
      }
    },
    {
      oldName: 'Mastering the Art of French Cooking - Julia Child',
      newEntry: {
        name: 'Mastering the Art of French Cooking - Julia Child',
        url: 'https://en.wikipedia.org/wiki/Mastering_the_Art_of_French_Cooking'
      }
    },
    {
      oldName: 'On Food and Cooking - Harold McGee (La Ciencia del Roux)',
      newEntry: {
        name: 'On Food and Cooking - Harold McGee (La Ciencia del Roux)',
        url: '' // Remove broken link
      }
    }
  ],
  'sourdough-calculator': [
    {
      oldName: 'The Flavor Bible - Scaling and Ratios',
      newEntry: {
        name: 'The Flavor Bible - Scaling and Ratios',
        url: '' // Remove broken link
      }
    },
    {
      oldName: 'Full Proof Baking - Guides on Sourdough',
      newEntry: {
        name: 'Full Proof Baking - Guides on Sourdough',
        url: '' // Remove broken link
      }
    }
  ]
};

async function fixTool(tool, fixList) {
  const esPath = path.join(toolsDir, tool, 'i18n', 'es.ts');
  const enPath = path.join(toolsDir, tool, 'i18n', 'en.ts');

  if (!fs.existsSync(esPath)) return;

  // Import to get current content
  const esModule = await import(`file://${esPath}`);
  const esContent = esModule.content;

  // Apply fixes
  for (const fix of fixList) {
    const biblioIndex = esContent.bibliography.findIndex(b => b.name === fix.oldName);
    if (biblioIndex !== -1) {
      if (fix.newEntry.url === '') {
        // Remove entry
        esContent.bibliography.splice(biblioIndex, 1);
        console.log(`  ❌ Removida: ${fix.oldName}`);
      } else {
        // Update entry
        esContent.bibliography[biblioIndex] = fix.newEntry;
        console.log(`  ✏️  Actualizada: ${fix.oldName}`);
        console.log(`     Nueva URL: ${fix.newEntry.url}`);
      }
    }
  }

  // Re-export the fixed content
  const esCode = fs.readFileSync(esPath, 'utf-8');
  let newEsCode = esCode;

  // Replace bibliography array
  const biblioStr = JSON.stringify(
    esContent.bibliography,
    (key, value) => {
      if (key === 'url' && value === '') return undefined;
      return value;
    },
    2
  );

  // Find and replace the bibliography array
  const biblioMatch = esCode.match(/bibliography:\s*\[([\s\S]*?)\],/);
  if (biblioMatch) {
    const formattedBiblio = `bibliography: ${JSON.stringify(esContent.bibliography, null, 2)},`;
    newEsCode = esCode.replace(/bibliography:\s*\[([\s\S]*?)\],/, formattedBiblio);
  }

  fs.writeFileSync(esPath, newEsCode);
}

async function main() {
  console.log('🔧 Arreglando bibliografías rotas...\n');

  for (const [tool, fixList] of Object.entries(fixes)) {
    console.log(`📚 ${tool}:`);
    await fixTool(tool, fixList);
  }

  console.log('\n✅ Bibliografías actualizadas');
  console.log('\nEjecutar de nuevo: node extract-bibliographies.js && node check-404s.js');
}

main();
