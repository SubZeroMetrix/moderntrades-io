import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'
import { WorksheetTool, type WorksheetField } from '@/components/WorksheetTool'

export const metadata = buildMetadata({
  title: 'Customer Reactivation Planner',
  description: 'Enter your dormant-customer numbers to see a rough estimate of what re-contacting them could be worth -- calculated in your browser, nothing sent anywhere.',
  path: '/tools/customer-reactivation-planner',
})

const FIELDS: WorksheetField[] = [
  { id: 'dormantCustomers', label: 'Customers with no completed job in the last 12+ months', suffix: 'customers' },
  { id: 'responseRate', label: 'Conservative estimate: % who would book if re-contacted', suffix: '%', defaultHint: 'If unsure, a conservative starting guess is 5-10%.' },
  { id: 'avgJobValue', label: 'Average job value', suffix: '$' },
]

export default function CustomerReactivationPlannerPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tools', url: '/tools' }, { name: 'Customer Reactivation Planner', url: '/tools/customer-reactivation-planner' }])
  const article = articleSchema({ headline: 'Customer Reactivation Planner', description: 'Interactive dormant-customer revenue estimator.', path: '/tools/customer-reactivation-planner', dateModified: '2026-08-25' })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="Tools" title="Customer Reactivation Planner" description="See what your dormant customer list could be worth -- calculated in your browser, no email required." breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Tools', href: '/tools' }, { name: 'Customer Reactivation Planner', href: '/tools/customer-reactivation-planner' }]} />
      <div className="section-container max-w-2xl py-16">
        <WorksheetTool fields={FIELDS} formula="dormant-customer-value" methodNote="This is simple multiplication using the numbers you entered." />
        <div className="mt-10 text-center">
          <Link href="/resources/customer-reactivation" className="text-brand-electric underline">Read the full Customer Reactivation guide</Link>
        </div>
      </div>
    </div>
  )
}
