import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const bibliographiesFile = path.join(__dirname, 'bibliographies.json');

if (!fs.existsSync(bibliographiesFile)) {
  console.log('❌ bibliographies.json no encontrado. Ejecuta primero: node extract-bibliographies.js');
  process.exit(1);
}

const biblios = JSON.parse(fs.readFileSync(bibliographiesFile, 'utf-8'));

console.log(`🔍 Verificando ${biblios.length} URLs...\n`);

const results = {
  ok: [],
  error: [],
  unknown: []
};

let checked = 0;
const total = biblios.length;

// Check URLs with a delay to avoid rate limiting
for (const biblio of biblios) {
  try {
    const response = await fetch(biblio.url, {
      method: 'HEAD',
      timeout: 5000,
      redirect: 'follow'
    });

    const status = response.status;

    if (status >= 200 && status < 300) {
      results.ok.push(biblio);
    } else if (status >= 400) {
      results.error.push({
        ...biblio,
        status
      });
    } else {
      results.unknown.push({
        ...biblio,
        status
      });
    }
  } catch (err) {
    results.error.push({
      ...biblio,
      error: err.message,
      status: 'ERROR'
    });
  }

  checked++;
  process.stdout.write(`\r✓ Verificadas ${checked}/${total} URLs`);

  // Delay 500ms between requests to avoid rate limiting
  await new Promise(resolve => setTimeout(resolve, 500));
}

console.log('\n\n=== RESULTADOS ===\n');

console.log(`✅ OK (${results.ok.length}):`);
results.ok.forEach(b => {
  console.log(`   ${b.tool}: ${b.name}`);
});

if (results.error.length > 0) {
  console.log(`\n❌ CON PROBLEMAS (${results.error.length}):`);
  results.error.forEach(b => {
    console.log(`   ${b.tool}: ${b.name}`);
    console.log(`      URL: ${b.url}`);
    console.log(`      Status: ${b.status}`);
    if (b.error) console.log(`      Error: ${b.error}`);
  });
}

if (results.unknown.length > 0) {
  console.log(`\n⚠️  DESCONOCIDO (${results.unknown.length}):`);
  results.unknown.forEach(b => {
    console.log(`   ${b.tool}: ${b.name}`);
    console.log(`      URL: ${b.url}`);
    console.log(`      Status: ${b.status}`);
  });
}

// Save detailed report
const report = {
  timestamp: new Date().toISOString(),
  summary: {
    total: biblios.length,
    ok: results.ok.length,
    errors: results.error.length,
    unknown: results.unknown.length
  },
  errors: results.error,
  unknown: results.unknown
};

const reportFile = path.join(__dirname, 'bibliography-report.json');
fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
console.log(`\n📊 Reporte detallado guardado en: ${reportFile}`);
