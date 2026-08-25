import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Customer Reactivation for Contractors',
  description: 'Why past customers are usually the cheapest revenue a contractor business has available, and a practical way to find and re-contact them.',
  path: '/resources/customer-reactivation',
})

export default function CustomerReactivationPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Resources', url: '/resources' }, { name: 'Customer Reactivation', url: '/resources/customer-reactivation' }])
  const article = articleSchema({
    headline: 'Customer Reactivation for Contractors',
    description: 'Finding and re-contacting dormant customers.',
    path: '/resources/customer-reactivation',
    dateModified: '2026-08-25',
  })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="Resources" title="Customer Reactivation for Contractors" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Resources', href: '/resources' }, { name: 'Customer Reactivation', href: '/resources/customer-reactivation' }]} />
      <div className="section-container max-w-3xl py-16">
        <div className="card-panel bg-surface-light-alt mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-electric mb-2">Direct answer</p>
          <p className="text-gray-800">
            A past customer already trusts you enough to have paid you once -- reaching them again is almost always
            cheaper than acquiring a new customer through marketing. Most contractor businesses have no systematic
            way to find who has gone quiet, so this revenue sits unclaimed by default, not by choice.
          </p>
        </div>

        <div className="prose-content">
          <h2>Why Acquisition Cost Matters Here</h2>
          <p>
            New-customer acquisition through paid marketing carries real, ongoing cost -- ad spend, lead-gen fees,
            or SEO/content investment, repeated every time. Re-contacting an existing customer costs a phone call
            or a message, because the trust-building work is already done. The Small Business Administration&apos;s
            own guidance on customer retention is direct about this: existing relationships are consistently
            cheaper to sustain than new ones are to build.
          </p>

          <h2>What &quot;Dormant&quot; Actually Means</h2>
          <p>
            A dormant customer isn&apos;t someone who left dissatisfied -- most are simply someone whose need
            hasn&apos;t come up again yet, or who forgot who did the work last time. Reactivation isn&apos;t
            winning back a lost customer; it&apos;s reminding an existing one that you&apos;re still the answer.
          </p>

          <h2>A Worked Example</h2>
          <p>
            Say a contractor has 400 past customers, and no completed job in the last 12+ months for 150 of them.
            If a conservative 8% of that 150 (12 customers) have a real, current need and would book if reminded,
            and the average job is worth $500, that is roughly $6,000 in available revenue sitting in a customer
            list that already exists -- before spending anything on new-lead marketing. This is a hypothetical
            illustration, not a measured outcome; your actual reactivation rate depends on your relationship
            quality and outreach, and is unknown until measured.
          </p>

          <h2>What to Check First</h2>
          <ul>
            <li>Pull every customer with no completed job in the last 12 months and count them.</li>
            <li>Check whether you have a working phone number or email for each one -- stale contact data is the most common blocker.</li>
            <li>Pick a reason to reach out that isn&apos;t just &quot;we miss you&quot; -- a seasonal reminder, a maintenance check, a past-job follow-up.</li>
            <li>Track who responds, so the next round of outreach gets better, not just repeated blindly.</li>
          </ul>

          <h2>Limitations</h2>
          <p>
            The 8% figure above is illustrative, chosen to demonstrate the arithmetic, not a benchmark from any
            study. Actual reactivation response rates vary widely by trade, relationship quality, and outreach
            method, and no authoritative contractor-specific figure is cited here because none was found that met
            this site&apos;s sourcing standard.
          </p>

          <h2>Sources</h2>
          <ul className="text-sm">
            <li><a href="https://www.sba.gov/business-guide/manage-your-business/marketing-sales" target="_blank" rel="noopener noreferrer">U.S. Small Business Administration, Marketing and Sales guidance for small businesses</a></li>
            <li><a href="https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" target="_blank" rel="noopener noreferrer">FTC, CAN-SPAM Act Compliance Guide (applies to email outreach to past customers)</a></li>
          </ul>
        </div>

        <div className="card-panel bg-gray-50 border-brand-electric/20 text-center mt-12">
          <p className="text-gray-700 mb-4">
            <a href="https://www.moderntradescrm.com/revenue-recovery" className="text-brand-electric underline">Modern Trades CRM</a> is
            building toward reactivation support -- see what&apos;s verified working today, honestly labeled.
          </p>
          <Link href="/resources" className="text-brand-electric underline">&larr; All resources</Link>
        </div>
        <p className="text-xs text-gray-500 mt-8">Last reviewed 2026-08-25.</p>
      </div>
    </div>
  )
}
