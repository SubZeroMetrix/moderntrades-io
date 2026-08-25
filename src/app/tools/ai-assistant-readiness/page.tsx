import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'
import { ChecklistTool, type ChecklistItem } from '@/components/ChecklistTool'

export const metadata = buildMetadata({
  title: 'AI Assistant Readiness Checklist',
  description: 'A free, interactive checklist to see if your business processes are consistent enough for an AI assistant to safely handle -- no email required.',
  path: '/tools/ai-assistant-readiness',
})

const ITEMS: ChecklistItem[] = [
  { id: 'documented-pricing', label: 'Your pricing ranges and service area are written down somewhere, not just known by you.', action: 'Write down even a rough version -- an assistant given vague pricing will quote it confidently anyway.' },
  { id: 'handoff-rules', label: 'You have a clear rule for exactly when a conversation must go to a human.', action: 'Decide this in advance: quote commitments, complaints, and edge cases should always escalate.' },
  { id: 'consistent-scheduling', label: 'Your scheduling process is consistent enough that a script could follow it without guessing.', action: 'If humans book inconsistently today, fix that first -- automation inherits whatever inconsistency already exists.' },
  { id: 'disclosure-plan', label: 'You have a plan for telling customers when they\'re talking to an automated system.', action: 'Decide this before deploying anything -- transparency here avoids a real trust problem later.' },
]

export default function AiAssistantReadinessToolPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tools', url: '/tools' }, { name: 'AI Assistant Readiness Checklist', url: '/tools/ai-assistant-readiness' }])
  const article = articleSchema({ headline: 'AI Assistant Readiness Checklist', description: 'Interactive checklist for AI assistant readiness.', path: '/tools/ai-assistant-readiness', dateModified: '2026-08-25' })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="Tools" title="AI Assistant Readiness Checklist" description="Four questions about your underlying process, not the AI tool itself -- immediate result, no email required." breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Tools', href: '/tools' }, { name: 'AI Assistant Readiness Checklist', href: '/tools/ai-assistant-readiness' }]} />
      <div className="section-container max-w-2xl py-16">
        <ChecklistTool items={ITEMS} methodNote="Modern Trades CRM has no live AI-assisted feature today -- see the capabilities matrix." />
        <div className="mt-10 text-center">
          <Link href="/resources/ai-assistant-readiness" className="text-brand-electric underline">Read the full AI Assistant Readiness guide</Link>
        </div>
      </div>
    </div>
  )
}
