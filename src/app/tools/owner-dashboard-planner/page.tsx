import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'
import { ChecklistTool, type ChecklistItem } from '@/components/ChecklistTool'

export const metadata = buildMetadata({
  title: 'Owner Dashboard Planner',
  description: 'A free, interactive checklist to see if your current numbers actually answer the decisions you make weekly -- no email required.',
  path: '/tools/owner-dashboard-planner',
})

const ITEMS: ChecklistItem[] = [
  { id: 'response-time-visible', label: 'You can see, right now, how fast inbound leads are actually getting a reply.', action: 'Response time is usually the single highest-leverage number to make visible -- see the Speed-to-Lead guide.' },
  { id: 'open-estimates-visible', label: 'You can see, right now, every open estimate with no scheduled follow-up.', action: 'This is usually the most directly recoverable number on the list.' },
  { id: 'won-lost-reasons', label: 'You track why jobs are lost, not just how many.', action: 'A pattern in lost reasons (price, timing, no response) points at a specific fix -- a raw count doesn\'t.' },
  { id: 'reactivation-visible', label: 'You can see which customers are overdue for reactivation or maintenance.', action: 'If your business has any recurring-revenue component, this list is usually worth more than it gets credit for.' },
  { id: 'team-numbers', label: 'Each team member has one number that\'s visibly theirs, not just a general sense of busyness.', action: 'Accountability requires a specific, visible number -- pick one per person rather than tracking everything for everyone.' },
]

export default function OwnerDashboardPlannerPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tools', url: '/tools' }, { name: 'Owner Dashboard Planner', url: '/tools/owner-dashboard-planner' }])
  const article = articleSchema({ headline: 'Owner Dashboard Planner', description: 'Interactive checklist for designing a useful owner dashboard.', path: '/tools/owner-dashboard-planner', dateModified: '2026-08-25' })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="Tools" title="Owner Dashboard Planner" description="Five questions to see if your current view actually answers the decisions you make weekly -- immediate result, no email required." breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Tools', href: '/tools' }, { name: 'Owner Dashboard Planner', href: '/tools/owner-dashboard-planner' }]} />
      <div className="section-container max-w-2xl py-16">
        <ChecklistTool items={ITEMS} methodNote="Owner reporting is planned for Modern Trades CRM -- no reporting layer exists yet. See the capabilities matrix." />
        <div className="mt-10 text-center">
          <Link href="/resources/owner-dashboards" className="text-brand-electric underline">Read the full Owner Dashboards guide</Link>
        </div>
      </div>
    </div>
  )
}
