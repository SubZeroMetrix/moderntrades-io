import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'
import { ChecklistTool, type ChecklistItem } from '@/components/ChecklistTool'

export const metadata = buildMetadata({
  title: 'Missed-Call Response Map',
  description: 'A free, interactive checklist mapping exactly what happens (or doesn\'t) when your business misses an inbound call -- no email required.',
  path: '/tools/missed-call-response-map',
})

const ITEMS: ChecklistItem[] = [
  { id: 'know-count', label: 'You know roughly how many calls your business misses during business hours in a typical week.', action: 'Pull your call log for the last 7 days and count unanswered calls -- you can\'t fix a number you haven\'t measured.' },
  { id: 'voicemail-checked', label: 'Voicemails are checked and returned the same business day, without exception.', action: 'Set a rule: voicemails get checked at fixed times each day, not "whenever."' },
  { id: 'after-hours-path', label: 'A call outside business hours has any defined next step (text-back, next-day callback list, etc).', action: 'Decide what happens to an after-hours call before it happens again -- even a simple rule beats no rule.' },
  { id: 'someone-owns-it', label: 'One specific person (not "whoever\'s free") owns following up on missed calls.', action: 'Assign missed-call follow-up to a specific person or role, not a diffuse team responsibility.' },
  { id: 'tracked-outcome', label: 'You track whether a missed-call callback actually turned into a booked job.', action: 'Without this, you can\'t tell if your follow-up process is actually working.' },
]

export default function MissedCallResponseMapPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tools', url: '/tools' }, { name: 'Missed-Call Response Map', url: '/tools/missed-call-response-map' }])
  const article = articleSchema({ headline: 'Missed-Call Response Map', description: 'Interactive checklist mapping missed-call response process.', path: '/tools/missed-call-response-map', dateModified: '2026-08-25' })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="Tools" title="Missed-Call Response Map" description="Five questions about what actually happens when a call goes unanswered -- immediate result, no email required." breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Tools', href: '/tools' }, { name: 'Missed-Call Response Map', href: '/tools/missed-call-response-map' }]} />
      <div className="section-container max-w-2xl py-16">
        <ChecklistTool items={ITEMS} methodNote="Missed-call text-back automation is not currently built in Modern Trades CRM -- see the capabilities matrix." />
        <div className="mt-10 text-center">
          <Link href="/resources/revenue-recovery" className="text-brand-electric underline">Read the full Revenue Recovery guide</Link>
        </div>
      </div>
    </div>
  )
}
