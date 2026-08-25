import { buildMetadata, organizationSchema, breadcrumbSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'About & Disclosure',
  description: 'Modern Trades is owned and operated by SubZeroMetrix LLC. Modern Trades CRM and The Modern Trades Mentor are affiliates.',
  path: '/about',
})

export default function AboutPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'About', url: '/about' }])

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PageHeader eyebrow="About" title="About Modern Trades" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'About', href: '/about' }]} />
      <div className="section-container max-w-3xl py-16">
        <div className="prose-content">
          <p>
            Modern Trades is a national contractor growth and operations publication, owned and operated by{' '}
            <strong>SubZeroMetrix LLC</strong>.
          </p>
          <h2>Ownership &amp; Affiliation</h2>
          <p>SubZeroMetrix LLC is also affiliated with:</p>
          <ul>
            <li><strong>Modern Trades CRM</strong> -- the national CRM product this publication routes qualified readers toward. An affiliate, not an independent third party.</li>
            <li>
              <strong>The Modern Trades Mentor (TMT)</strong> -- local, hands-on contractor consulting in Pinellas
              County, FL. Also an affiliate. The Modern Trades Mentor LLC has a{' '}
              <a href="https://www.bbb.org/us/fl/dunedin/profile/consultant/the-modern-trades-mentor-llc-0653-90465091">BBB Business Profile with BBB Serving West Florida</a>.
            </li>
            <li><strong>Metrix Audit</strong> -- a free contractor diagnostic. Also an affiliate.</li>
          </ul>
          <p>
            This publication does not pretend to be an independent, unaffiliated source. Every recommendation of an
            affiliate is disclosed at the point of recommendation.
          </p>
          <h2>Editorial Approach</h2>
          <p>
            Content here reflects practical operating experience, not generic AI-generated advice. We don&apos;t
            claim reader counts, subscriber numbers, or results we haven&apos;t verified.
          </p>
        </div>
      </div>
    </div>
  )
}
