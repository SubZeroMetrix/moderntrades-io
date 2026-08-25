import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'The Contractor Growth System',
  description: 'How visibility, response speed, follow-up, reviews, and reactivation fit together as one system -- and why fixing one in isolation rarely moves revenue by itself.',
  path: '/resources/contractor-growth-system',
})

export default function ContractorGrowthSystemPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Resources', url: '/resources' }, { name: 'Contractor Growth System', url: '/resources/contractor-growth-system' }])
  const article = articleSchema({
    headline: 'The Contractor Growth System',
    description: 'How visibility, response speed, follow-up, reviews, and reactivation fit together.',
    path: '/resources/contractor-growth-system',
    dateModified: '2026-08-25',
  })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="Resources" title="The Contractor Growth System" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Resources', href: '/resources' }, { name: 'Contractor Growth System', href: '/resources/contractor-growth-system' }]} />
      <div className="section-container max-w-3xl py-16">
        <div className="card-panel bg-surface-light-alt mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-electric mb-2">Direct answer</p>
          <p className="text-gray-800">
            Visibility, response speed, follow-up, reviews, and reactivation are not five separate problems --
            they&apos;re five stages of the same pipeline, and a leak in one stage limits what fixing another one
            can accomplish. Getting found without responding fast wastes the visibility. Responding fast without
            following up on the estimate wastes the response. This page maps the whole system.
          </p>
        </div>

        <div className="prose-content">
          <h2>The Five Stages</h2>
          <ol>
            <li><strong>Visibility</strong> -- can a prospect actually find and trust the business at the moment they&apos;re deciding? See <a href="https://www.metrixaudit.com/operating-domains#digital-visibility">digital visibility</a>.</li>
            <li><strong>Response</strong> -- does the business reply fast enough that the prospect doesn&apos;t move to the next name? See <Link href="/resources/revenue-recovery">Revenue Recovery</Link>.</li>
            <li><strong>Follow-Up</strong> -- does every estimate get worked to a real decision, not left to go cold? See <Link href="/resources/estimate-follow-up">Estimate Follow-Up</Link>.</li>
            <li><strong>Reputation</strong> -- do recent reviews reflect current, active work, with a professional response to any negative one? See <a href="https://www.metrixaudit.com/operating-domains#review-management">review management</a>.</li>
            <li><strong>Reactivation</strong> -- are past customers re-contacted before they forget who did the work, or before a competitor gets there first? See <Link href="/resources/customer-reactivation">Customer Reactivation</Link>.</li>
          </ol>

          <h2>Why Fixing One Stage in Isolation Underperforms</h2>
          <p>
            A business that invests heavily in visibility (ads, SEO, listings) while still taking three hours to
            return a call is paying to generate leads that go to a faster competitor. A business with instant
            response but no estimate follow-up system is winning the first conversation and losing the sale
            silently weeks later. The stages compound -- improving the weakest one usually moves the needle more
            than improving the strongest one further.
          </p>

          <h2>How to Find Your Weakest Stage</h2>
          <p>
            The <a href="https://www.metrixaudit.com/audit">Metrix Audit</a> (free, no email required) is built
            around exactly this -- nine questions across six operating signals, with a single primary signal and
            recommended first action, not a list of everything that could theoretically be improved.
          </p>

          <h2>Limitations</h2>
          <p>
            This is a conceptual framework, not a measured formula -- the relative weight of each stage varies by
            business, trade, and market, and isn&apos;t quantified here.
          </p>
        </div>

        <div className="card-panel bg-gray-50 border-brand-electric/20 text-center mt-12">
          <p className="text-gray-700 mb-4">Find your weakest stage in under two minutes.</p>
          <a href="https://www.metrixaudit.com/audit" className="btn-primary">Take the Free Audit</a>
        </div>
        <p className="text-xs text-gray-500 mt-8">Last reviewed 2026-08-25.</p>
      </div>
    </div>
  )
}
