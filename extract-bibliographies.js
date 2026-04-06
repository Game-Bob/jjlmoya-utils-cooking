import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const toolsDir = path.join(__dirname, 'src', 'tool');
const tools = fs.readdirSync(toolsDir).filter(f =>
  fs.statSync(path.join(toolsDir, f)).isDirectory()
);

const allBiblios = [];

for (const tool of tools) {
  const esPath = path.join(toolsDir, tool, 'i18n', 'es.ts');

  if (!fs.existsSync(esPath)) continue;

  try {
    // Import the module dynamically
    const module = await import(`file://${esPath}`);
    const content = module.content;

    if (content && content.bibliography && Array.isArray(content.bibliography)) {
      content.bibliography.forEach(entry => {
        if (entry.name && entry.url) {
          allBiblios.push({
            tool,
            name: entry.name,
            url: entry.url
          });
        }
      });
    }
  } catch (err) {
    // Skip files that can't be imported
    console.error(`Error importing ${tool}: ${err.message}`);
  }
}

// Output as JSON
console.log(JSON.stringify(allBiblios, null, 2));

// Also create a summary by tool
console.log('\n\n=== RESUMEN POR HERRAMIENTA ===\n');
const byTool = {};
allBiblios.forEach(b => {
  if (!byTool[b.tool]) byTool[b.tool] = [];
  byTool[b.tool].push({ name: b.name, url: b.url });
});

Object.entries(byTool).sort().forEach(([tool, entries]) => {
  console.log(`\n📚 ${tool} (${entries.length} enlaces):`);
  entries.forEach(e => {
    console.log(`   • ${e.name}`);
    console.log(`     ${e.url}`);
  });
});

// Save to file
const outputFile = path.join(__dirname, 'bibliographies.json');
fs.writeFileSync(outputFile, JSON.stringify(allBiblios, null, 2));
console.log(`\n✅ Bibliografías guardadas en: ${outputFile}`);
console.log(`\n📊 Total: ${allBiblios.length} enlaces en ${Object.keys(byTool).length} herramientas`);
