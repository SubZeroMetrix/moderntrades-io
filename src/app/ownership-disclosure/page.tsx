import { buildMetadata, organizationSchema, breadcrumbSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Ownership & Disclosure',
  description: 'Who operates Modern Trades and how it relates to Modern Trades CRM, The Modern Trades Mentor, and other SubZeroMetrix LLC properties.',
  path: '/ownership-disclosure',
})

export default function OwnershipDisclosurePage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Ownership & Disclosure', url: '/ownership-disclosure' }])

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PageHeader eyebrow="Ownership & Disclosure" title="Ownership & Disclosure" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Ownership & Disclosure', href: '/ownership-disclosure' }]} />
      <div className="section-container max-w-3xl py-16">
        <div className="prose-content">
          <h2>Who Operates This Site</h2>
          <p>Modern Trades is a national contractor operations publication operated by <strong>SubZeroMetrix LLC</strong>.</p>

          <h2>Affiliated Businesses</h2>
          <p>SubZeroMetrix LLC also owns or is affiliated with:</p>
          <ul>
            <li><strong>Modern Trades CRM</strong> (moderntradescrm.com) -- a national contractor CRM product.</li>
            <li><strong>The Modern Trades Mentor</strong> -- local, hands-on contractor consulting in Pinellas County, FL.</li>
            <li><strong>Metrix Audit</strong> (metrixaudit.com) -- a free contractor operating diagnostic.</li>
            <li><strong>SubZeroMetrix</strong> (subzerometrix.com) and other SubZeroMetrix LLC properties.</li>
          </ul>
          <p>
            When this site recommends Modern Trades CRM or The Modern Trades Mentor, that recommendation is not
            independent -- it comes from a commonly-owned affiliate. We disclose this directly next to any such
            recommendation, not only here.
          </p>

          <h2>What We Don&apos;t Do</h2>
          <p>
            We don&apos;t use fake testimonials, invented statistics, or unsupported ROI claims. Every source cited
            on this site is a real, checkable primary source -- see our sourcing standard reflected throughout the{' '}
            <a href="/resources">resources</a> section.
          </p>
        </div>
        <p className="text-xs text-gray-500 mt-8">Last reviewed 2026-08-25.</p>
      </div>
    </div>
  )
}
