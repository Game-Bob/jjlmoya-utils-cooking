import fs from 'node:fs';
import path from 'node:path';

const i18nDir = 'd:/code/jjlmoya-utils-cooking/src/tool/sous-vide-pasteurization-curves/i18n';
const files = fs.readdirSync(i18nDir).filter(f => f.endsWith('.ts'));

const replacements = [
  { search: /\u2013/g, replace: '-' },
  { search: /\u2014/g, replace: ' - ' },
  { search: /\u2026/g, replace: '...' },
  { search: /\u201C/g, replace: '"' },
  { search: /\u201D/g, replace: '"' },
  { search: /\u2018/g, replace: "'" },
  { search: /\u2019/g, replace: "'" },
  { search: /\u200B/g, replace: '' },
  { search: /\u201E/g, replace: '"' },
  { search: / : /g, replace: ': ' }
];

files.forEach(file => {
  const filePath = path.join(i18nDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  replacements.forEach(rep => {
    content = content.replace(rep.search, rep.replace);
  });

  if (file === 'es.ts') {
    content = content.replace("slug: 'sous-vide-pasteurization-curves'", "slug: 'curvas-pasteurizacion-sous-vide'");
  } else if (file === 'nl.ts') {
    content = content.replace("slug: 'sous-vide-pasteurization-curves'", "slug: 'sous-vide-pasteurisatiecurven'");
  } else if (file === 'id.ts') {
    content = content.replace("slug: 'sous-vide-pasteurization-curves'", "slug: 'kurva-pasteurisasi-sous-vide'");
  } else if (file === 'sv.ts') {
    content = content.replace("slug: 'sous-vide-pasteurization-curves-sv'", "slug: 'sous-vide-pasteuriseringskurvor'");
  } else if (file === 'tr.ts') {
    content = content.replace("slug: 'sous-vide-pasteurization-curves-tr'", "slug: 'sous-vide-pastorizasyon-egrileri'");
  } else if (file === 'ru.ts') {
    content = content.replace("slug: 'sous-vide-pasteurization-curves-ru'", "slug: 'kalkulyator-pasterizacii-su-vid'");
    content = content.replace("Калькулятор Кривых Пастеризации Су-Вид", "Калькулятор Кривых Пастеризации Су Вид");
    content = content.replace("Кривые Пастеризации Су-Вид", "Кривые Пастеризации Су Вид");
  } else if (file === 'pl.ts') {
    content = content.replace("slug: 'sous-vide-pasteurization-curves-pl'", "slug: 'krzywe-pasteryzacji-sous-vide'");
  } else if (file === 'de.ts') {
    content = content.replace("Sous Vide Pasteurisierungs-Kurvenrechner", "Sous Vide Pasteurisierungs Kurvenrechner");
    content = content.replace("Sous Vide Pasteurisierungs-Kurven", "Sous Vide Pasteurisierungs Kurven");
    content = content.replace("Thermische Letalitätskinetik und Kerntemperatur-Kompensation", "Thermische Letalitätskinetik und Kerntemperatur Kompensation");
  }

  fs.writeFileSync(filePath, content, 'utf-8');
});
