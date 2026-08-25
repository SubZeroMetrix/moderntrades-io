import { buildMetadata, breadcrumbSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Terms of Use',
  description: 'Terms of use for the Modern Trades publication.',
  path: '/terms',
})

export default function TermsPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Terms', url: '/terms' }])

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PageHeader eyebrow="Legal" title="Terms of Use" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Terms', href: '/terms' }]} />
      <div className="section-container max-w-3xl py-16">
        <div className="prose-content">
          <p>Modern Trades is operated by SubZeroMetrix LLC.</p>
          <h2>Nature of the Content</h2>
          <p>Content on this site is educational and general in nature. It is not personalized business, legal, or financial advice.</p>
          <h2>Affiliate Links</h2>
          <p>This site links to Modern Trades CRM, The Modern Trades Mentor, and Metrix Audit, all SubZeroMetrix LLC affiliates. Reading this content does not obligate you to use any of them.</p>
          <h2>Changes</h2>
          <p>These terms may be updated from time to time. Continued use of the site constitutes acceptance of the current terms.</p>
        </div>
      </div>
    </div>
  )
}
