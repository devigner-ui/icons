/**
 * Pro tier license validation with Ed25519 signature verification
 * License key format: devigner_pro_<base64(header)>.<base64(payload)>.<base64(signature)>
 */

export interface LicenseData {
  key: string;
  email: string;
  plan: 'pro' | 'team';
  seats: number;
  issuedAt: number;
  expiresAt: number;
  features: string[];
}

// Embedded public key for offline verification (replace with actual key)
// This is a placeholder - generate with: openssl genpkey -algorithm ed25519
const PUBLIC_KEY_BASE64 = 'MCowBQYDK2VwAyEAxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'; // 32 bytes base64

// Decode base64url (no padding)
function base64UrlDecode(str: string): Uint8Array {
  // Convert base64url to base64
  let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
  // Add padding
  const padding = base64.length % 4;
  if (padding) {
    base64 += '='.repeat(4 - padding);
  }
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

// Verify Ed25519 signature using Web Crypto API
async function verifyEd25519(publicKey: Uint8Array, message: Uint8Array, signature: Uint8Array): Promise<boolean> {
  try {
    const cryptoKey = await crypto.subtle.importKey(
      'raw',
      publicKey as unknown as BufferSource,
      { name: 'Ed25519' },
      false,
      ['verify']
    );
    return await crypto.subtle.verify('Ed25519', cryptoKey, signature as unknown as BufferSource, message as unknown as BufferSource);
  } catch {
    return false;
  }
}

let cachedPublicKey: CryptoKey | null = null;

async function getPublicKey(): Promise<CryptoKey> {
  if (cachedPublicKey) return cachedPublicKey;

  const publicKeyBytes = base64UrlDecode(PUBLIC_KEY_BASE64);
  cachedPublicKey = await crypto.subtle.importKey(
    'raw',
    publicKeyBytes as unknown as BufferSource,
    { name: 'Ed25519' },
    false,
    ['verify']
  );
  return cachedPublicKey;
}

/**
 * Validates a license key using Ed25519 signature verification
 * Works offline - no network calls required
 */
export async function validateLicense(key: string): Promise<LicenseData | null> {
  try {
    // Check format
    if (!key.startsWith('devigner_pro_')) {
      return null;
    }

    const token = key.slice('devigner_pro_'.length);
    const parts = token.split('.');
    if (parts.length !== 3) {
      return null;
    }

    const [headerB64, payloadB64, signatureB64] = parts;

    // Verify signature
    const message = new TextEncoder().encode(`${headerB64}.${payloadB64}`);
    const signature = base64UrlDecode(signatureB64);
    const publicKey = await getPublicKey();

    const valid = await crypto.subtle.verify(
      'Ed25519',
      publicKey,
      signature as unknown as BufferSource,
      message as unknown as BufferSource
    );

    if (!valid) {
      return null;
    }

    // Decode payload
    const payloadBytes = base64UrlDecode(payloadB64);
    const payload = JSON.parse(new TextDecoder().decode(payloadBytes)) as LicenseData;

    // Check expiry
    if (Date.now() > payload.expiresAt) {
      return null;
    }

    // Verify issuedAt is not in future
    if (payload.issuedAt > Date.now() + 86400000) { // 1 day tolerance
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

/**
 * Synchronous license validation using stored validated license
 */
export function useProLicense(): { isPro: boolean; licenseKey: string | null; licenseData: LicenseData | null } {
  if (typeof window === 'undefined') {
    return { isPro: false, licenseKey: null, licenseData: null };
  }

  try {
    const stored = localStorage.getItem('devigner-license');
    if (!stored) {
      return { isPro: false, licenseKey: null, licenseData: null };
    }

    // In a real implementation, you'd validate the stored license
    // For now, we trust the stored license (it was validated on entry)
    const licenseData = JSON.parse(stored) as LicenseData;

    // Check expiry
    if (Date.now() > licenseData.expiresAt) {
      localStorage.removeItem('devigner-license');
      return { isPro: false, licenseKey: null, licenseData: null };
    }

    return {
      isPro: true,
      licenseKey: licenseData.key,
      licenseData,
    };
  } catch {
    return { isPro: false, licenseKey: null, licenseData: null };
  }
}

/**
 * Sets and validates a license key
 */
export async function setLicenseKey(key: string): Promise<boolean> {
  const licenseData = await validateLicense(key);
  if (!licenseData) {
    return false;
  }

  if (typeof window !== 'undefined') {
    localStorage.setItem('devigner-license', JSON.stringify(licenseData));
  }
  return true;
}

/**
 * Clears the stored license key
 */
export function clearLicenseKey(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('devigner-license');
  }
}

/**
 * Gets license info for display
 */
export function getLicenseInfo(): LicenseData | null {
  if (typeof window === 'undefined') return null;
  try {
    const stored = localStorage.getItem('devigner-license');
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}