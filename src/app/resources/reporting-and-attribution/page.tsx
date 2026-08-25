import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Reporting and Attribution for Contractors',
  description: 'Why knowing which marketing channel actually produced a job matters more than knowing how many leads you got -- and the minimum fields needed to answer it honestly.',
  path: '/resources/reporting-and-attribution',
})

export default function ReportingAttributionPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Resources', url: '/resources' }, { name: 'Reporting & Attribution', url: '/resources/reporting-and-attribution' }])
  const article = articleSchema({
    headline: 'Reporting and Attribution for Contractors',
    description: 'The minimum fields needed to know which channel actually produces jobs.',
    path: '/resources/reporting-and-attribution',
    dateModified: '2026-08-25',
  })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="Resources" title="Reporting and Attribution for Contractors" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Resources', href: '/resources' }, { name: 'Reporting & Attribution', href: '/resources/reporting-and-attribution' }]} />
      <div className="section-container max-w-3xl py-16">
        <div className="card-panel bg-surface-light-alt mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-electric mb-2">Direct answer</p>
          <p className="text-gray-800">
            &quot;How many leads did we get?&quot; is the wrong question. &quot;Which channel actually turned into
            paying jobs?&quot; is the right one -- and answering it honestly requires capturing where a lead came
            from at the moment it arrives, not guessing afterward. Without that, marketing spend decisions are
            based on impressions, not results.
          </p>
        </div>

        <div className="prose-content">
          <h2>Why &quot;Number of Leads&quot; Is a Misleading Number</h2>
          <p>
            A channel that produces 50 cheap, poorly-qualified leads that convert at 2% can lose money next to a
            channel that produces 10 expensive, well-qualified leads that convert at 40%. Lead count alone hides
            which channel is actually worth the spend; only tracking from lead source through to a closed job
            answers that.
          </p>

          <h2>The Minimum Fields That Matter</h2>
          <ul>
            <li><strong>Original lead source</strong> -- the very first channel that brought the contact in, captured once and never overwritten.</li>
            <li><strong>Latest lead source</strong> -- the most recent touch, useful for understanding what re-engaged a returning contact.</li>
            <li><strong>Original campaign</strong> -- which specific ad, page, or referral, not just the broad channel.</li>
            <li><strong>Won/lost outcome</strong> -- tying the source all the way through to whether the job actually closed, not just whether a lead arrived.</li>
          </ul>
          <p>
            Without the first field specifically -- captured at first touch and never overwritten by a later
            interaction -- attribution collapses to whatever channel touched the contact last, which usually
            over-credits retargeting and under-credits the channel that actually created the interest.
          </p>

          <h2>A Worked Example</h2>
          <p>
            Say a contractor runs both a Google Ads campaign and a referral program. If attribution is only
            captured on the most recent touch, a customer who first heard about the business from a referral but
            later clicked a retargeting ad gets recorded as a &quot;Google Ads&quot; lead -- silently making the ad
            spend look more effective than it is, and the referral program look worthless, when the opposite may
            be true. This is illustrative, not a measured case study.
          </p>

          <h2>What to Check First</h2>
          <ul>
            <li>Do you know, for your last 20 closed jobs, which channel actually brought each one in originally?</li>
            <li>Is that source captured at first contact, or reconstructed from memory afterward?</li>
            <li>Can you see win rate broken out by source, not just lead count by source?</li>
          </ul>

          <h2>Limitations</h2>
          <p>
            Attribution is inherently imperfect for offline businesses -- word-of-mouth referrals in particular are
            hard to capture with certainty. The goal is directionally honest data, not perfect certainty.
          </p>
        </div>

        <div className="card-panel bg-gray-50 border-brand-electric/20 text-center mt-12">
          <p className="text-gray-700 mb-4">
            <a href="https://www.moderntradescrm.com/capabilities" className="text-brand-electric underline">Modern Trades CRM</a>&apos;s
            attribution fields are prepared at the data layer but not yet wired into every intake path -- see the
            capabilities matrix for the exact status.
          </p>
          <Link href="/resources" className="text-brand-electric underline">&larr; All resources</Link>
        </div>
        <p className="text-xs text-gray-400 mt-8">Last reviewed 2026-08-25.</p>
      </div>
    </div>
  )
}
