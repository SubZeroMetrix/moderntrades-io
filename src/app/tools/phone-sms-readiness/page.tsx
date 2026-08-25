import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'
import { ChecklistTool, type ChecklistItem } from '@/components/ChecklistTool'

export const metadata = buildMetadata({
  title: 'Phone & SMS Compliance Checklist',
  description: 'A free, interactive checklist covering what TCPA and FCC consent rules require before texting or auto-dialing customers -- no email required. Educational only, not legal advice.',
  path: '/tools/phone-sms-readiness',
})

const ITEMS: ChecklistItem[] = [
  { id: 'documented-consent', label: 'You have a specific, documented consent record for SMS/calls -- separate from a general contact form.', action: 'Build a dedicated consent capture step before enabling any automated texting or calling.' },
  { id: 'specific-consent', label: 'Your consent language is specific to your business, not shared with any other company or lead source.', action: 'Since January 2025, consent can no longer be shared across brands -- verify your consent language is yours alone.' },
  { id: 'revocation-methods', label: 'A customer can revoke consent through more than just a reply keyword, and you act on it within days.', action: 'FCC rules (effective April 2025) require honoring revocation via any reasonable method, generally within 10 business days.' },
  { id: 'quiet-hours', label: 'You have a documented quiet-hours policy for marketing calls/texts.', action: 'Write down your quiet-hours policy, even a simple one -- this is a common compliance gap.' },
  { id: 'sender-clarity', label: 'You know who is legally the "sender" if you use a third-party CRM or marketing platform.', action: 'Clarify this with your platform provider or legal counsel before sending anything at scale.' },
]

export default function PhoneSmsReadinessToolPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tools', url: '/tools' }, { name: 'Phone & SMS Compliance Checklist', url: '/tools/phone-sms-readiness' }])
  const article = articleSchema({ headline: 'Phone & SMS Compliance Checklist', description: 'Interactive TCPA/FCC readiness checklist.', path: '/tools/phone-sms-readiness', dateModified: '2026-08-25' })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="Tools" title="Phone & SMS Compliance Checklist" description="Five questions based on current FCC/TCPA rules -- immediate result, no email required. Educational only, not legal advice." breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Tools', href: '/tools' }, { name: 'Phone & SMS Compliance Checklist', href: '/tools/phone-sms-readiness' }]} />
      <div className="section-container max-w-2xl py-16">
        <ChecklistTool items={ITEMS} methodNote="This is educational content, not legal advice -- consult a licensed attorney for your specific consent flow." />
        <div className="mt-10 text-center">
          <Link href="/resources/phone-and-sms-readiness" className="text-brand-electric underline">Read the full Phone &amp; SMS Readiness guide</Link>
        </div>
      </div>
    </div>
  )
}
