import fs from 'fs';
import path from 'path';

const V1_DIR = path.resolve('G:/Coding Projects/Fronus/Personal-Tools/src/components/icons/version01');
const V2_DIR = path.resolve('G:/Coding Projects/Fronus/Personal-Tools/src/components/icons/version02');
const OUTPUT_DIR = path.resolve('icons-deduped');

// Names that need manual fixing (Component1, Component, MainComponent)
const RENAME_MAP = {
  'Component1': 'Export',           // v1 - box with arrow exiting
  'Component': 'Diamond',           // v2 - simple diamond
  'MainComponent': 'DiamondDivided', // v2 - diamond with cross lines
};

async function deduplicate() {
  const v1Files = fs.readdirSync(V1_DIR).filter(f => f.endsWith('.tsx'));
  const v2Files = fs.readdirSync(V2_DIR).filter(f => f.endsWith('.tsx'));

  console.log(`v1: ${v1Files.length} files`);
  console.log(`v2: ${v2Files.length} files`);

  const v1Names = new Set(v1Files.map(f => f.replace('.tsx', '')));
  const v2Names = new Set(v2Files.map(f => f.replace('.tsx', '')));

  // Find conflicts (names in both)
  const conflicts = [...v1Names].filter(name => v2Names.has(name));
  console.log(`Conflicts (in both): ${conflicts.length}`);

  // Find unique to each
  const v1Only = [...v1Names].filter(name => !v2Names.has(name));
  const v2Only = [...v2Names].filter(name => !v1Names.has(name));
  console.log(`v1 only: ${v1Only.length}`);
  console.log(`v2 only: ${v2Only.length}`);

  // Strategy: For conflicts, keep v2. For unique, keep both.
  const finalMap = new Map();

  // Add v1-only files
  for (const name of v1Only) {
    const newName = RENAME_MAP[name] || name;
    finalMap.set(newName, { src: path.join(V1_DIR, `${name}.tsx`), from: 'v1' });
  }

  // Add v2 files (overwrites conflicts with v2 version)
  for (const name of v2Names) {
    const newName = RENAME_MAP[name] || name;
    if (finalMap.has(newName)) {
      console.log(`  Conflict resolved: ${name} -> keeping v2 (was ${finalMap.get(newName).from})`);
    }
    finalMap.set(newName, { src: path.join(V2_DIR, `${name}.tsx`), from: 'v2' });
  }

  // Create output directory
  if (fs.existsSync(OUTPUT_DIR)) {
    fs.rmSync(OUTPUT_DIR, { recursive: true });
  }
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // Copy files
  for (const [name, info] of finalMap) {
    const dest = path.join(OUTPUT_DIR, `${name}.tsx`);
    fs.copyFileSync(info.src, dest);
  }

  console.log(`\nDeduplication complete: ${finalMap.size} unique icons in ${OUTPUT_DIR}`);
  console.log(`  From v1: ${[...finalMap.values()].filter(v => v.from === 'v1').length}`);
  console.log(`  From v2: ${[...finalMap.values()].filter(v => v.from === 'v2').length}`);
  console.log(`  Renamed: ${Object.keys(RENAME_MAP).filter(k => finalMap.has(RENAME_MAP[k])).length}`);
}

deduplicate().catch(console.error);