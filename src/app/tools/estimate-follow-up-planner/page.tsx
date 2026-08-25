import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'
import { WorksheetTool, type WorksheetField } from '@/components/WorksheetTool'

export const metadata = buildMetadata({
  title: 'Estimate Follow-Up Planner',
  description: 'Enter your open-estimate numbers to see a rough estimate of what re-engaging stalled estimates could be worth -- calculated in your browser, nothing sent anywhere.',
  path: '/tools/estimate-follow-up-planner',
})

const FIELDS: WorksheetField[] = [
  { id: 'openEstimates', label: 'Open estimates right now with no scheduled follow-up date', suffix: 'estimates' },
  { id: 'recoveryRate', label: 'Conservative estimate: % that would convert with one more follow-up', suffix: '%', defaultHint: 'If unsure, a conservative starting guess is 15-25%.' },
  { id: 'avgJobValue', label: 'Average job value', suffix: '$' },
]

export default function EstimateFollowUpPlannerPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tools', url: '/tools' }, { name: 'Estimate Follow-Up Planner', url: '/tools/estimate-follow-up-planner' }])
  const article = articleSchema({ headline: 'Estimate Follow-Up Planner', description: 'Interactive stalled-estimate value calculator.', path: '/tools/estimate-follow-up-planner', dateModified: '2026-08-25' })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="Tools" title="Estimate Follow-Up Planner" description="Pull your own open-estimate list and see what re-engaging them could be worth -- calculated in your browser, no email required." breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Tools', href: '/tools' }, { name: 'Estimate Follow-Up Planner', href: '/tools/estimate-follow-up-planner' }]} />
      <div className="section-container max-w-2xl py-16">
        <WorksheetTool fields={FIELDS} formula="stalled-estimate-value" methodNote="This is simple multiplication using the numbers you entered." />
        <div className="mt-10 text-center">
          <Link href="/resources/estimate-follow-up" className="text-brand-electric underline">Read the full Estimate Follow-Up guide</Link>
        </div>
      </div>
    </div>
  )
}
