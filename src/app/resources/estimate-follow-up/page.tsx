import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Estimate Follow-Up for Contractors',
  description: 'A practical system for tracking open estimates so they close or get a clear reason for loss -- instead of silently going cold.',
  path: '/resources/estimate-follow-up',
})

export default function EstimateFollowUpPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Resources', url: '/resources' }, { name: 'Estimate Follow-Up', url: '/resources/estimate-follow-up' }])
  const article = articleSchema({
    headline: 'Estimate Follow-Up for Contractors',
    description: 'A practical system for tracking open estimates to closure.',
    path: '/resources/estimate-follow-up',
    dateModified: '2026-08-25',
  })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="Resources" title="Estimate Follow-Up for Contractors" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Resources', href: '/resources' }, { name: 'Estimate Follow-Up', href: '/resources/estimate-follow-up' }]} />
      <div className="section-container max-w-3xl py-16">
        <div className="card-panel bg-surface-light-alt mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-electric mb-2">Direct answer</p>
          <p className="text-gray-800">
            An estimate with no follow-up date and no won/lost status isn&apos;t pending -- it&apos;s just aging out
            of attention. Every open estimate needs exactly two things: a next follow-up date, and eventually a
            recorded reason for winning or losing it. Without both, you can&apos;t tell the difference between a
            slow decision and a lost job.
          </p>
        </div>

        <div className="prose-content">
          <h2>Why Estimates Go Cold</h2>
          <p>
            It rarely happens on purpose. An estimate gets sent, the next job comes in, attention moves on, and
            without a system forcing a check-in, the estimate simply never gets revisited -- not because the
            customer said no, but because nobody asked again.
          </p>

          <h2>The Minimum System</h2>
          <ol>
            <li>Every estimate gets a follow-up date the moment it&apos;s sent -- not &quot;sometime next week.&quot;</li>
            <li>If the follow-up happens and the customer isn&apos;t ready, a new follow-up date is set immediately, not left open-ended.</li>
            <li>Every estimate eventually gets marked won or lost, with a one-line reason (price, timing, competitor, no response).</li>
            <li>Lost reasons get reviewed periodically -- a pattern of &quot;no response&quot; lost reasons points at a follow-up problem, not a sales problem.</li>
          </ol>

          <h2>A Worked Example</h2>
          <p>
            Say a contractor has 22 open estimates sitting with no follow-up date at all. If a conservative 20% of
            those (roughly 4-5) would have converted with one more phone call, and the average job is worth $800,
            that is $3,200-$4,000 in estimates that are still open, not lost -- they simply need to be worked. This
            is a hypothetical figure, not a measured result.
          </p>

          <h2>Checklist</h2>
          <ul>
            <li>Pull every open estimate right now and check: does it have a follow-up date?</li>
            <li>For any estimate older than 14 days with no follow-up date, set one today.</li>
            <li>For any estimate you&apos;ve already decided is dead, mark it lost with a reason -- don&apos;t just let it sit.</li>
            <li>Review lost reasons monthly and look for a pattern that points at process, not price.</li>
          </ul>

          <h2>Limitations</h2>
          <p>
            The conversion figure above is illustrative, not benchmarked against real contractor data. Actual
            recovery rates from re-engaging stalled estimates depend heavily on how recently they went cold and
            why, and are not measured here.
          </p>

          <h2>Sources</h2>
          <ul className="text-sm">
            <li><a href="https://hbr.org/2011/03/the-short-life-of-online-sales-leads" target="_blank" rel="noopener noreferrer">Oldroyd, McElheran &amp; Elkington, &quot;The Short Life of Online Sales Leads,&quot; Harvard Business Review, March 2011</a></li>
          </ul>
        </div>

        <div className="card-panel bg-gray-50 border-brand-electric/20 text-center mt-12">
          <p className="text-gray-700 mb-4">
            <a href="https://www.moderntradescrm.com/revenue-recovery" className="text-brand-electric underline">Modern Trades CRM</a>&apos;s
            9-stage pipeline exists today for exactly this -- won/lost tracking is prepared, not yet automated. See what&apos;s verified.
          </p>
          <Link href="/resources" className="text-brand-electric underline">&larr; All resources</Link>
        </div>
        <p className="text-xs text-gray-500 mt-8">Last reviewed 2026-08-25.</p>
      </div>
    </div>
  )
}
