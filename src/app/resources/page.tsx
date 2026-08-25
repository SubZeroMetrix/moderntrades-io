import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Resources',
  description: 'Guides on CRM readiness, revenue recovery, and automation readiness for contractor businesses.',
  path: '/resources',
})

const GUIDES = [
  { href: '/resources/contractor-growth-system', title: 'The Contractor Growth System', description: 'How visibility, response, follow-up, reviews, and reactivation fit together as one pipeline.' },
  { href: '/resources/crm-readiness', title: 'CRM Readiness', description: 'What "ready for a CRM" actually means, and the signs a business is still better off without one.' },
  { href: '/resources/revenue-recovery', title: 'Revenue Recovery', description: 'Missed calls, stalled estimates, and dormant customers -- where contractor revenue actually leaks.' },
  { href: '/resources/automation-readiness', title: 'Automation Readiness', description: 'What to automate first, what to keep manual, and how to tell the difference.' },
  { href: '/resources/phone-and-sms-readiness', title: 'Phone & SMS Readiness', description: 'What TCPA and FCC consent rules actually require before you text or auto-dial customers.' },
  { href: '/resources/customer-reactivation', title: 'Customer Reactivation', description: 'Why past customers are usually the cheapest revenue available, and how to find who has gone quiet.' },
  { href: '/resources/estimate-follow-up', title: 'Estimate Follow-Up', description: 'A minimum system for tracking open estimates so they close or get a clear reason for loss.' },
  { href: '/resources/reporting-and-attribution', title: 'Reporting & Attribution', description: 'The minimum fields needed to know which marketing channel actually produces jobs.' },
  { href: '/resources/ai-assistant-readiness', title: 'AI Assistant Readiness', description: 'What has to be true before an AI assistant can safely handle a customer conversation.' },
  { href: '/resources/software-buying-guide', title: 'Software Buying Guide', description: 'Vendor-neutral questions to ask before buying any contractor software, including ours.' },
  { href: '/resources/speed-to-lead', title: 'Speed-to-Lead', description: 'Why response time predicts who wins the job, and how to measure your own honestly.' },
  { href: '/resources/missed-call-recovery', title: 'Missed-Call Recovery', description: 'What happens to a missed call, and a practical system for recovering it.' },
  { href: '/resources/review-request-systems', title: 'Review Request Systems', description: 'Why review recency matters more than count, and the FTC rules that govern how you can ask.' },
  { href: '/resources/referral-workflows', title: 'Referral Workflows', description: 'Why referrals are the cheapest lead source and usually the least systematized.' },
  { href: '/resources/scheduling-readiness', title: 'Scheduling Readiness', description: 'What has to be true before a shared calendar actually helps.' },
  { href: '/resources/crm-migration-planning', title: 'CRM Migration Planning', description: 'What actually breaks during a CRM switch, and how to avoid double-messaging customers.' },
  { href: '/resources/owner-dashboards', title: 'Owner Dashboards', description: 'Designing a dashboard around decisions you actually make, not vanity metrics.' },
]

export default function ResourcesPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Resources', url: '/resources' }])

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PageHeader eyebrow="Resources" title="Contractor Growth & Operations Guides" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Resources', href: '/resources' }]} />
      <div className="section-container max-w-4xl py-16">
        <div className="grid sm:grid-cols-3 gap-6">
          {GUIDES.map((g, i) => (
            <Link key={g.href} href={g.href} className="card-panel hover:border-brand-electric/30 transition-colors">
              <p className="text-xs font-semibold text-brand-electric mb-3">{String(i + 1).padStart(2, '0')}</p>
              <h2 className="text-lg font-bold text-gray-900 mb-2">{g.title}</h2>
              <p className="text-sm text-gray-500">{g.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
