import fs from 'fs';
import path from 'path';

const ICONS_DIR = path.resolve('icons');

// Map of filename -> expected component name
const RENAME_MAP = {
  'Export': 'IconExport',
  'Diamond': 'IconDiamond',
  'DiamondDivided': 'IconDiamondDivided',
};

async function fixNames() {
  const files = fs.readdirSync(ICONS_DIR).filter(f => f.endsWith('.tsx'));
  let fixed = 0;

  for (const file of files) {
    const name = file.replace('.tsx', '');
    const expectedComponent = RENAME_MAP[name] || `Icon${name}`;
    const filepath = path.join(ICONS_DIR, file);
    const content = fs.readFileSync(filepath, 'utf-8');

    // Find the component declaration
    const constMatch = content.match(/const\s+(\w+)\s*:\s*FC/);
    if (constMatch) {
      const currentName = constMatch[1];
      if (currentName !== expectedComponent) {
        console.log(`Fixing ${file}: ${currentName} -> ${expectedComponent}`);
        const newContent = content.replace(
          `const ${currentName}: FC`,
          `const ${expectedComponent}: FC`
        );
        // Also fix the export
        const fixedContent = newContent.replace(
          `export default ${currentName};`,
          `export default ${expectedComponent};`
        );
        fs.writeFileSync(filepath, fixedContent);
        fixed++;
      }
    }
  }

  console.log(`\nFixed ${fixed} component names`);
}

fixNames().catch(console.error);