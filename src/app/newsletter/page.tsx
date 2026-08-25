import { buildMetadata, breadcrumbSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Newsletter',
  description: 'The Modern Trades CRM Growth & Systems Brief -- national contractor growth, CRM, and operations content.',
  path: '/newsletter',
})

export default function NewsletterPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Newsletter', url: '/newsletter' }])

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PageHeader eyebrow="Newsletter" title="Modern Trades CRM Growth & Systems Brief" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Newsletter', href: '/newsletter' }]} />
      <div className="section-container max-w-lg py-16">
        <p className="text-body-lg mb-8">
          National contractor growth, CRM, revenue recovery, workflow, and AI-readiness content. Sign-up for this
          publication and its local counterpart (Pinellas Contractor Field Notes) lives on{' '}
          <strong>SubZeroMetrix.com</strong>, one shared preference center for both publications so you never get
          duplicate infrastructure or double opt-ins.
        </p>
        <div className="card-panel">
          <a href="https://www.subzerometrix.com/newsletter" className="btn-primary inline-block">Go to Newsletter Sign-Up</a>
        </div>
        <p className="text-xs text-gray-400 mt-6">
          Preference management and unsubscribe are also handled there, on the shared preference center.
        </p>
      </div>
    </div>
  )
}
