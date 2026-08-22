import fs from 'fs';
import path from 'path';
import { pipeline } from '@xenova/transformers';

const SRC_DIR = path.resolve('src');
const ICONS_DIR = path.resolve('icons');

async function generateEmbeddings() {
  // Naming this wrongly is what put the website on a different model than the
  // vectors below; the query side reads this line. Keep the two in step.
  console.log('Loading Xenova/all-MiniLM-L6-v2 model (quantized)...');
  
  const extractor = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2', {
    quantized: true,
  });
  console.log('Model loaded.');

  // Load metadata
  const metadataPath = path.join(SRC_DIR, 'metadata.json');
  const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));
  
  console.log(`Generating embeddings for ${metadata.icons.length} icons...`);
  
  const embeddings = {};
  let processed = 0;

  for (const icon of metadata.icons) {
    // Build rich text representation for better semantic search
    const text = buildRichText(icon);
    
    try {
      const output = await extractor(text, { pooling: 'mean', normalize: true });
      // Convert to regular array and quantize to int8 for smaller size
      const float32Array = output.data;
      const int8Array = quantizeToInt8(float32Array);
      embeddings[icon.name] = Array.from(int8Array);
    } catch (error) {
      console.error(`Failed to generate embedding for ${icon.name}:`, error);
      embeddings[icon.name] = new Array(384).fill(0);
    }

    processed++;
    if (processed % 100 === 0) {
      console.log(`  Processed ${processed}/${metadata.icons.length}...`);
    }
  }

  // Save embeddings
  const outputPath = path.join(SRC_DIR, 'embeddings.json');
  fs.writeFileSync(outputPath, JSON.stringify(embeddings));
  console.log(`\nSaved embeddings to ${outputPath}`);

  // Also copy to docs/public for client-side search
  const docsPublicPath = path.resolve('../../docs/public/embeddings.json');
  if (fs.existsSync(path.dirname(docsPublicPath))) {
    fs.writeFileSync(docsPublicPath, JSON.stringify(embeddings));
    console.log(`Copied to ${docsPublicPath}`);
  }
}

function buildRichText(icon) {
  const parts = [
    icon.displayName,
    // The printable name rather than the slug: "Calls & Telephony" is words
    // the sentence model knows, "calls-telephony" is one it has to guess at.
    icon.categoryLabel ?? icon.category,
    ...icon.keywords,
    icon.usage,
    `icon for ${icon.usage}`,
    `${icon.displayName.toLowerCase()} ${(
      icon.categoryLabel ?? icon.category
    ).toLowerCase()} icon`,
  ];
  
  // Add style-specific context
  const freeStyles = icon.freeStyles.join(', ');
  const proStyles = icon.proStyles.join(', ');
  parts.push(`available styles: ${freeStyles}${proStyles ? ', pro: ' + proStyles : ''}`);
  
  return parts.join(' ');
}

function quantizeToInt8(float32Array) {
  // Simple quantization: scale to [-127, 127]
  const int8Array = new Int8Array(float32Array.length);
  for (let i = 0; i < float32Array.length; i++) {
    // Clamp to [-1, 1] then scale
    const val = Math.max(-1, Math.min(1, float32Array[i]));
    int8Array[i] = Math.round(val * 127);
  }
  return int8Array;
}

// Dequantize for cosine similarity
export function dequantizeInt8(int8Array) {
  const float32Array = new Float32Array(int8Array.length);
  for (let i = 0; i < int8Array.length; i++) {
    float32Array[i] = int8Array[i] / 127;
  }
  return float32Array;
}

// Cosine similarity
export function cosineSimilarity(a, b) {
  let dot = 0, normA = 0, normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

generateEmbeddings().catch(console.error);