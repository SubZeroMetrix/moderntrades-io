import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Owner Dashboards for Contractors',
  description: 'What a contractor owner actually needs visible in one place, why more metrics usually means less clarity, and how to design a dashboard around decisions instead of vanity numbers.',
  path: '/resources/owner-dashboards',
})

export default function OwnerDashboardsPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Resources', url: '/resources' }, { name: 'Owner Dashboards', url: '/resources/owner-dashboards' }])
  const article = articleSchema({ headline: 'Owner Dashboards for Contractors', description: 'Designing a dashboard around decisions, not vanity metrics.', path: '/resources/owner-dashboards', dateModified: '2026-08-25' })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="Resources" title="Owner Dashboards for Contractors" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Resources', href: '/resources' }, { name: 'Owner Dashboards', href: '/resources/owner-dashboards' }]} />
      <div className="section-container max-w-3xl py-16">
        <div className="card-panel bg-surface-light-alt mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-electric mb-2">Direct answer</p>
          <p className="text-gray-800">
            A useful owner dashboard answers a small number of specific questions you actually act on -- not every
            number a system can generate. More metrics on a screen usually means less clarity, because the two or
            three that matter get lost in the fifteen that don&apos;t.
          </p>
        </div>

        <div className="prose-content">
          <h2>Start From Decisions, Not Data</h2>
          <p>
            Before building or buying a dashboard, list the actual decisions you make weekly: who to follow up
            with, whether you&apos;re on pace for the month, which team member needs a check-in. A good dashboard
            answers those specific questions. A dashboard built by listing &quot;everything the software can
            track&quot; usually answers none of them well.
          </p>

          <h2>A Minimum Useful Set</h2>
          <ul>
            <li><strong>Response time</strong> -- how fast inbound leads are actually getting a reply, not just how many came in.</li>
            <li><strong>Open estimates with no follow-up date</strong> -- the single number most likely to represent real, recoverable revenue.</li>
            <li><strong>Won/lost this period, with reasons</strong> -- not just a count, but why jobs were lost, so patterns are visible.</li>
            <li><strong>Customers overdue for reactivation or maintenance</strong> -- if your business has a recurring-revenue component.</li>
            <li><strong>One number per team member that&apos;s actually theirs</strong> -- accountability requires a number someone can see is tracked, not a vague sense of busyness.</li>
          </ul>

          <h2>A Worked Example</h2>
          <p>
            Say an owner currently checks five different places -- a spreadsheet, a shared inbox, a paper board, a
            texting app, and memory -- to answer &quot;are we on pace this month?&quot; Consolidating even three of
            those numbers (leads in, estimates sent, jobs won) into one weekly view removes most of the friction
            that causes the check to simply not happen some weeks. Illustrative scenario, not a measured outcome.
          </p>

          <h2>Checklist</h2>
          <ul>
            <li>Can you list the 3-5 decisions you actually make weekly using business numbers?</li>
            <li>Does your current view answer those, or does it show everything except those?</li>
            <li>Is there one number, per team member, that they know is visible to you?</li>
            <li>Do you review it on a fixed cadence, or only when something goes wrong?</li>
          </ul>

          <h2>Limitations</h2>
          <p>
            This page describes a general framework for designing a useful dashboard, not a specific product
            recommendation. What&apos;s actually useful varies by business size and how hands-on the owner is.
          </p>
        </div>

        <div className="card-panel bg-gray-50 border-brand-electric/20 mt-12">
          <p className="text-sm text-gray-700 mb-3">
            An owner reporting dashboard is planned for Modern Trades CRM but no reporting layer exists yet --
            see the honest <a href="https://www.moderntradescrm.com/capabilities" className="text-brand-electric underline">capabilities matrix</a>.
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
