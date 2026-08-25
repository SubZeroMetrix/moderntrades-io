import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Revenue Recovery for Contractors',
  description: 'Missed calls, stalled estimates, and dormant customers -- where contractor revenue actually leaks, and what to check first.',
  path: '/resources/revenue-recovery',
})

export default function RevenueRecoveryPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Resources', url: '/resources' }, { name: 'Revenue Recovery', url: '/resources/revenue-recovery' }])
  const article = articleSchema({ headline: 'Revenue Recovery for Contractors', description: 'Where contractor revenue leaks and what to check first.', path: '/resources/revenue-recovery' })

  return (
    <div className="py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <div className="section-container max-w-3xl">
        <p className="text-label text-brand-electric mb-3">Resources</p>
        <h1 className="text-headline text-gray-900 mb-8">Revenue Recovery for Contractors</h1>
        <div className="prose-content">
          <p>
            Most contractor revenue loss isn&apos;t from losing jobs on price -- it&apos;s from jobs that never
            got a fair shot because of something structural: a call that went to voicemail, an estimate that sat
            too long, a past customer nobody thought to call.
          </p>

          <h2>Missed Calls</h2>
          <p>
            A missed call during business hours is usually a lost job, not a delayed one -- most callers move to
            the next name on their list rather than leave a voicemail. The fix starts with knowing your actual
            missed-call rate, which most owners don&apos;t.
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

          <h2>What to Check First</h2>
          <p>
            Pull your call log for the last 30 days and count unanswered calls during business hours. That single
            number, multiplied by your average job value, is a rough floor on what missed calls alone are costing you.
          </p>

          <h2>Where This Goes Next</h2>
          <p>
            <a href="https://www.moderntradescrm.com">Modern Trades CRM</a> is built to close exactly these gaps
            with automated follow-up and visibility. It&apos;s a SubZeroMetrix LLC affiliate. For a broader
            diagnostic first, try the free{' '}
            <a href="https://www.subzerometrix.com/revenue-leak-check">Revenue Leak Check</a> on SubZeroMetrix.com.
          </p>
        </div>
        <div className="mt-10">
          <Link href="/resources" className="text-brand-electric underline">&larr; All resources</Link>
        </div>
      </div>
    </div>
  )
}
