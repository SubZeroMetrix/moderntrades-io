import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Referral Workflows for Contractors',
  description: 'Why referrals are the cheapest lead source contractors have and usually the least systematized, with a practical process for asking and tracking them.',
  path: '/resources/referral-workflows',
})

export default function ReferralWorkflowsPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Resources', url: '/resources' }, { name: 'Referral Workflows', url: '/resources/referral-workflows' }])
  const article = articleSchema({ headline: 'Referral Workflows for Contractors', description: 'A practical process for generating and tracking referrals.', path: '/resources/referral-workflows', dateModified: '2026-08-25' })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="Resources" title="Referral Workflows for Contractors" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Resources', href: '/resources' }, { name: 'Referral Workflows', href: '/resources/referral-workflows' }]} />
      <div className="section-container max-w-3xl py-16">
        <div className="card-panel bg-surface-light-alt mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-electric mb-2">Direct answer</p>
          <p className="text-gray-800">
            A referred customer already trusts you before you say a word -- that trust transfer is worth more than
            almost any ad. Most contractors get referrals passively and never ask directly, which leaves a real,
            low-cost lead source almost entirely unsystematized.
          </p>
        </div>

        <div className="prose-content">
          <h2>Why &quot;They&apos;ll Refer Us If We&apos;re Good&quot; Isn&apos;t a System</h2>
          <p>
            A happy customer rarely thinks to refer you unprompted -- not because they wouldn&apos;t, but because
            it doesn&apos;t occur to them until someone they know happens to mention needing the same work. A
            direct ask, at the right moment, converts a passive goodwill into an active recommendation.
          </p>

          <h2>A Practical Referral Process</h2>
          <ol>
            <li><strong>Ask at the moment of highest satisfaction</strong> -- typically right after job completion, alongside or shortly after the review request.</li>
            <li><strong>Make the ask specific and easy</strong> -- &quot;Do you know anyone else who needs [service]?&quot; converts better than a generic &quot;refer us to your friends.&quot;</li>
            <li><strong>Give them something concrete to share</strong> -- a card, a link, or a simple phrase to pass along, not just a verbal request they have to remember.</li>
            <li><strong>Track the source on every new lead</strong> -- if you don&apos;t capture &quot;referred by,&quot; you can&apos;t tell which customers are your best referral sources or thank them.</li>
            <li><strong>Close the loop</strong> -- when a referral converts, let the referring customer know. It reinforces the behavior.</li>
          </ol>

          <h2>A Worked Example</h2>
          <p>
            Say a contractor completes 40 jobs a month and starts asking for referrals directly at job completion.
            If even 15% of customers refer one person within 3 months, that&apos;s 6 new leads a month from a
            source that costs nothing but the ask -- against whatever a paid lead currently costs per inquiry.
            Illustrative figures, not measured outcomes.
          </p>

          <h2>Checklist</h2>
          <ul>
            <li>Do you ask for referrals directly, or hope they happen?</li>
            <li>Is there a specific moment in your process when the ask happens?</li>
            <li>Do you capture referral source on new leads so you know who&apos;s sending you work?</li>
            <li>Do you thank or acknowledge customers who refer someone?</li>
          </ul>

          <h2>Limitations</h2>
          <p>
            The 15% conversion figure is illustrative, chosen to demonstrate the arithmetic, not a measured
            benchmark. Actual referral response rates vary by trade, relationship quality, and how the ask is made.
          </p>
        </div>

        <div className="card-panel bg-gray-50 border-brand-electric/20 mt-12">
          <p className="text-sm text-gray-700 mb-3">
            Referral-request automation is prepared in Modern Trades CRM&apos;s code but not yet triggered by a
            completed job -- see the honest <a href="https://www.moderntradescrm.com/capabilities" className="text-brand-electric underline">capabilities matrix</a>.
          </p>
          <p className="text-xs text-gray-500">
            Disclosure: Modern Trades CRM and The Modern Trades Mentor are affiliated businesses operated by
            SubZeroMetrix LLC. Any recommendation of them here is not independent.
          </p>
        </div>
        <div className="mt-6"><Link href="/resources" className="text-brand-electric underline">&larr; All resources</Link></div>
        <p className="text-xs text-gray-500 mt-8">Last reviewed 2026-08-25.</p>
      </div>
    </div>
  )
}
