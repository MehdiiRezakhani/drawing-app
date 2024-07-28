import packageJson from '~/../package.json';

const cleanUrl = 'drawing.tailorchi.com';

const metadata = {
  website: {
    name: 'Voody',
    slogan: 'Drawing app',
    description: 'Voody drawing app',
    cleanUrl,
    email: `info@voody.app`,
    url: `https://${cleanUrl}`,
    manifest: `https://${cleanUrl}/manifest.json`,
    thumbnail: `https://${cleanUrl}/images/thumbnail.jpg`,
    locale: 'en',
    themeColor: '#FFFFFF',
    version: packageJson.version,
  },
  social: {
    twitter: 'voody',
  },
  links: {
    github: 'https://github.com/diogocapela/flatdraw',
  },
  services: {
    googleAnalyticsMeasurementId: 'G-EZDBLF0NEZ',
  },
};

export default metadata;
