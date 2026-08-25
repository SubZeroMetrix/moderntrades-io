import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Revenue Recovery for Contractors',
  description: 'Missed calls, stalled estimates, and dormant customers -- where contractor revenue actually leaks, with a worked example and a research-backed case for responding fast.',
  path: '/resources/revenue-recovery',
})

export default function RevenueRecoveryPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Resources', url: '/resources' }, { name: 'Revenue Recovery', url: '/resources/revenue-recovery' }])
  const article = articleSchema({
    headline: 'Revenue Recovery for Contractors',
    description: 'Where contractor revenue leaks and what to check first.',
    path: '/resources/revenue-recovery',
    dateModified: '2026-08-25',
  })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="Resources" title="Revenue Recovery for Contractors" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Resources', href: '/resources' }, { name: 'Revenue Recovery', href: '/resources/revenue-recovery' }]} />
      <div className="section-container max-w-3xl py-16">
        <div className="card-panel bg-surface-light-alt mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-electric mb-2">Direct answer</p>
          <p className="text-gray-800">
            Most contractor revenue loss isn&apos;t from losing jobs on price -- it&apos;s from jobs that never got
            a fair shot: a call that went to voicemail, an estimate that sat too long, a past customer nobody
            thought to call. All three are structural, measurable, and fixable without new marketing spend.
          </p>
        </div>

        <div className="prose-content">
          <h2>Missed Calls</h2>
          <p>
            A missed call during business hours is usually a lost job, not a delayed one -- most callers move to
            the next name on their list rather than leave a voicemail. Research on this is old but consistent: a
            2011 Harvard Business Review study of 2,241 companies (Oldroyd, McElheran &amp; Elkington) found that
            businesses responding to a lead within one hour were roughly seven times more likely to have a
            meaningful qualifying conversation than those that waited longer, and the odds of even reaching the
            lead at all drop sharply after the first 30 minutes.
          </p>

          <h2>Stalled Estimates</h2>
          <p>
            An estimate with no follow-up schedule and no won/lost status isn&apos;t closed and isn&apos;t active --
            it&apos;s just aging out of attention. The fix is a hard rule: every open estimate gets a next
            follow-up date, no exceptions.
          </p>

          <h2>Dormant Customers</h2>
          <p>
            A past customer who hasn&apos;t heard from you in a year is quietly available to whichever competitor
            calls first when they need work again. Proactive outreach to past customers is usually the
            cheapest revenue available in the business -- and the most commonly skipped.
          </p>

          <h2>A Worked Example</h2>
          <p>
            Say your average completed job is worth $650, and your close rate on estimates you actually follow up
            with is 35%. Pulling your call log for the last 30 days, you count 40 calls during business hours that
            went unanswered. If even a conservative 40% of those callers would have become paying customers had
            someone answered:
          </p>
          <table className="w-full text-sm border-collapse my-4">
            <tbody>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4 text-gray-500">Missed calls (30 days)</td><td className="py-2 font-mono">40</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4 text-gray-500">&times; conservative conversion (40%)</td><td className="py-2 font-mono">16</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4 text-gray-500">&times; average job value</td><td className="py-2 font-mono">$650</td></tr>
              <tr><td className="py-2 pr-4 text-gray-900 font-semibold">Rough monthly exposure</td><td className="py-2 font-mono font-semibold">$10,400</td></tr>
            </tbody>
          </table>
          <p>
            This is a floor estimate, not a guarantee -- the actual conversion rate for missed callers who never
            got a callback is unknown for your specific business until you measure it. The point of the exercise
            is to replace a guess (&quot;we probably don&apos;t miss that many calls&quot;) with a real number
            pulled from your own call log.
          </p>

          <h2>What to Check First</h2>
          <ul>
            <li>Pull your call log for the last 30 days and count unanswered calls during business hours.</li>
            <li>List every open estimate older than 14 days with no scheduled follow-up.</li>
            <li>Pull the list of customers with no completed job in the last 12+ months.</li>
            <li>Multiply each list by your average job value to get a rough (not exact) exposure number for each category.</li>
          </ul>

          <h2>Limitations</h2>
          <p>
            The response-time research cited above is from 2011 and covers a mix of B2B industries, not
            contractors specifically -- treat it as directional evidence that speed matters, not a contractor-specific
            benchmark. Your actual conversion rates on missed calls, stalled estimates, and dormant customers are
            unknown until you track them for your own business.
          </p>

          <h2>Sources</h2>
          <ul className="text-sm">
            <li><a href="https://hbr.org/2011/03/the-short-life-of-online-sales-leads" target="_blank" rel="noopener noreferrer">Oldroyd, McElheran &amp; Elkington, &quot;The Short Life of Online Sales Leads,&quot; Harvard Business Review, March 2011</a></li>
          </ul>

          <h2>Where This Goes Next</h2>
          <p>
            <a href="https://www.moderntradescrm.com">Modern Trades CRM</a> is built to close exactly these gaps
            with follow-up visibility. It&apos;s a SubZeroMetrix LLC affiliate. For a broader
            diagnostic first, try the free{' '}
            <a href="https://www.subzerometrix.com/revenue-leak-check">Revenue Leak Check</a> on SubZeroMetrix.com,
            or the free <a href="https://www.metrixaudit.com/audit">Metrix Audit</a> operating diagnostic.
          </p>
        </div>
        <p className="text-xs text-gray-400 mt-8">Last reviewed 2026-08-25.</p>
        <div className="mt-6">
          <Link href="/resources" className="text-brand-electric underline">&larr; All resources</Link>
        </div>
      </div>
    </div>
  )
}
