import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Tools',
  description: 'Free, interactive contractor operations tools -- checklists and worksheets with immediate results, no email required, nothing sent anywhere.',
  path: '/tools',
})

const TOOLS = [
  { href: '/tools/crm-readiness-checklist', title: 'CRM Readiness Checklist', description: 'See exactly which CRM-readiness gaps your business has.' },
  { href: '/tools/revenue-recovery-worksheet', title: 'Revenue Recovery Worksheet', description: 'A rough estimate of revenue sitting in missed calls, from your own numbers.' },
  { href: '/tools/missed-call-response-map', title: 'Missed-Call Response Map', description: 'Map exactly what happens when your business misses a call.' },
  { href: '/tools/estimate-follow-up-planner', title: 'Estimate Follow-Up Planner', description: 'What re-engaging your stalled estimates could be worth.' },
  { href: '/tools/customer-reactivation-planner', title: 'Customer Reactivation Planner', description: 'What your dormant customer list could be worth.' },
  { href: '/tools/ai-assistant-readiness', title: 'AI Assistant Readiness Checklist', description: 'Whether your processes are consistent enough for an AI assistant.' },
  { href: '/tools/phone-sms-readiness', title: 'Phone & SMS Compliance Checklist', description: 'What TCPA/FCC rules require before texting or auto-dialing customers.' },
  { href: '/tools/workflow-mapping', title: 'Workflow Mapping Worksheet', description: 'Test whether a specific process is consistent enough to automate.' },
  { href: '/tools/crm-implementation-prep', title: 'CRM Implementation Preparation Checklist', description: 'What to prepare before CRM implementation starts.' },
  { href: '/tools/lead-response-cost-calculator', title: 'Lead Response Cost Calculator', description: 'What slow response is roughly costing you, from your own numbers.' },
  { href: '/tools/crm-migration-checklist', title: 'CRM Migration Checklist', description: 'Check if you\'re ready to switch CRM systems without losing data.' },
  { href: '/tools/owner-dashboard-planner', title: 'Owner Dashboard Planner', description: 'See if your current numbers answer the decisions you actually make.' },
]

export default function ToolsPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tools', url: '/tools' }])

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PageHeader
        eyebrow="Tools"
        title="Free Interactive Tools"
        description="Twelve checklists and worksheets, all free, all with an immediate result, none requiring an email. Everything runs in your browser -- nothing you enter is sent anywhere."
        breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Tools', href: '/tools' }]}
      />
      <div className="section-container max-w-4xl py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOOLS.map((t, i) => (
            <Link key={t.href} href={t.href} className="card-panel hover:border-brand-electric/30 transition-colors">
              <p className="text-xs font-semibold text-brand-electric mb-3">{String(i + 1).padStart(2, '0')}</p>
              <h2 className="text-lg font-bold text-gray-900 mb-2">{t.title}</h2>
              <p className="text-sm text-gray-500">{t.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
