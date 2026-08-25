import { buildMetadata, breadcrumbSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Contact',
  description: 'Get in touch about Modern Trades content or Modern Trades CRM.',
  path: '/contact',
})

export default function ContactPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact' }])

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PageHeader eyebrow="Contact" title="Get in Touch" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Contact', href: '/contact' }]} />
      <div className="section-container max-w-lg py-16">
        <p className="text-body-lg mb-8">
          A live contact form isn&apos;t set up yet on this site. Reach us through the working contact form on
          SubZeroMetrix.com, the parent company site.
        </p>
        <div className="card-panel">
          <a href="https://www.subzerometrix.com/contact?subject=Modern+Trades+inquiry" className="btn-primary inline-block">Contact SubZeroMetrix</a>
        </div>
      </div>
    </div>
  )
}
