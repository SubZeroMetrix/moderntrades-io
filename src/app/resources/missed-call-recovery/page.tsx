import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Missed-Call Recovery for Contractors',
  description: 'What actually happens to a missed call, why it usually means a lost job rather than a delayed one, and a practical system for recovering them -- with or without automation.',
  path: '/resources/missed-call-recovery',
})

export default function MissedCallRecoveryPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Resources', url: '/resources' }, { name: 'Missed-Call Recovery', url: '/resources/missed-call-recovery' }])
  const article = articleSchema({ headline: 'Missed-Call Recovery for Contractors', description: 'What happens to a missed call and how to recover it.', path: '/resources/missed-call-recovery', dateModified: '2026-08-25' })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="Resources" title="Missed-Call Recovery for Contractors" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Resources', href: '/resources' }, { name: 'Missed-Call Recovery', href: '/resources/missed-call-recovery' }]} />
      <div className="section-container max-w-3xl py-16">
        <div className="card-panel bg-surface-light-alt mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-electric mb-2">Direct answer</p>
          <p className="text-gray-800">
            A missed call during business hours is usually a lost job, not a delayed one. Most callers move to the
            next name on their list rather than leave a voicemail and wait. Recovery means calling back fast --
            ideally within minutes -- not eventually.
          </p>
        </div>

        <div className="prose-content">
          <h2>Why Voicemail Doesn&apos;t Save the Lead</h2>
          <p>
            Leaving a voicemail requires effort and a belief that someone will call back soon. A caller who&apos;s
            already comparison-shopping several contractors has little reason to wait -- the next number on their
            list is one tap away. Treating &quot;they&apos;ll leave a message if it&apos;s important&quot; as a
            safety net is usually wrong.
          </p>

          <h2>A Practical Recovery System</h2>
          <ol>
            <li><strong>Know your missed-call count.</strong> Pull your call log for the last 7 days and count unanswered calls during business hours. Most contractors are surprised by this number.</li>
            <li><strong>Assign ownership.</strong> One person (or a defined rotation) is responsible for calling back every missed call within a set window -- ideally under 5 minutes, and same-hour at worst.</li>
            <li><strong>Text if you can&apos;t call back immediately.</strong> A short text (&quot;Sorry we missed your call -- we&apos;ll call you back within the hour&quot;) holds the lead while you get to it. This requires SMS consent handling -- see our{' '}
              <Link href="/resources/phone-and-sms-readiness" className="text-brand-electric underline">Phone &amp; SMS Readiness</Link> guide before enabling automated texting.</li>
            <li><strong>Track the outcome.</strong> Did the callback reach them? Did it convert? Without tracking, you can&apos;t tell if the system is working.</li>
            <li><strong>Review weekly.</strong> A missed-call process degrades quietly the moment nobody checks it.</li>
          </ol>

          <h2>A Worked Example</h2>
          <p>
            Say a contractor misses 30 calls a month during business hours. If a conservative 40% would have
            converted with a callback within the hour, and the average job is $650, that represents roughly
            $7,800/month in estimatable exposure -- not a guarantee, a number worth pulling from your own call log
            before assuming it doesn&apos;t apply to you. This is illustrative, not a measured outcome.
          </p>

          <h2>Automated vs. Manual Recovery</h2>
          <p>
            Automated missed-call text-back exists as a product category, but it is not a substitute for someone
            actually calling back -- it buys time, it doesn&apos;t close the job. Before adopting any automated
            tool, confirm it&apos;s actually live and tested for your account rather than assuming a vendor&apos;s
            marketing page describes your specific plan.
          </p>

          <h2>Checklist</h2>
          <ul>
            <li>Do you know your missed-call count for the last 7 days?</li>
            <li>Is there one clearly assigned owner for callbacks, not a diffuse team responsibility?</li>
            <li>Is there a defined callback time window, and is it actually being hit?</li>
            <li>Do you track whether callbacks convert, or only that they happened?</li>
          </ul>

          <h2>Limitations</h2>
          <p>
            The worked example uses illustrative figures to demonstrate the arithmetic, not a measured industry
            benchmark. Actual conversion rates for missed-call callbacks vary by trade, urgency, and market.
          </p>

          <h2>Sources</h2>
          <ul className="text-sm">
            <li><a href="https://hbr.org/2011/03/the-short-life-of-online-sales-leads" target="_blank" rel="noopener noreferrer">Oldroyd, McElheran &amp; Elkington, &quot;The Short Life of Online Sales Leads,&quot; Harvard Business Review, March 2011</a></li>
          </ul>
        </div>

        <div className="card-panel bg-gray-50 border-brand-electric/20 mt-12">
          <p className="text-sm text-gray-700 mb-3">
            Try the free <Link href="/tools/missed-call-response-map" className="text-brand-electric underline">Missed-Call Response Map</Link> or{' '}
            <Link href="/tools/revenue-recovery-worksheet" className="text-brand-electric underline">Revenue Recovery Worksheet</Link> -- immediate result, no email required.
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
