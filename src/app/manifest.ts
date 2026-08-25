import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Modern Trades',
    short_name: 'Modern Trades',
    description: 'A national contractor growth and operations publication.',
    start_url: '/',
    display: 'browser',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      { src: '/brand/modern-trades-mark.png', sizes: 'any', type: 'image/png' },
    ],
  }
}
