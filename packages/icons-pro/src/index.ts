// Pro-only exports (free package must be installed separately)
export {
  validateLicense,
  useProLicense,
  setLicenseKey,
  clearLicenseKey,
  getLicenseInfo,
  type LicenseData,
} from './pro-license';

// Pro-only features
export const PRO_FEATURES = {
  styles: true,
  analytics: true,
  cdn: true,
  support: true,
} as const;

export type ProFeatures = typeof PRO_FEATURES;

// Version info
export const PRO_VERSION = '1.0.0';

// Type augmentation for the free package's IconProps
// Users should import types from @devigner-ui/icons and this package
export interface ProIconProps {
  /** License key for Pro features */
  licenseKey?: string;
}