import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'CRM Readiness for Contractors',
  description: 'What "ready for a CRM" actually means for a contractor business, and the honest signs a business is still better off without one.',
  path: '/resources/crm-readiness',
})

export default function CrmReadinessPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Resources', url: '/resources' }, { name: 'CRM Readiness', url: '/resources/crm-readiness' }])
  const article = articleSchema({ headline: 'CRM Readiness for Contractors', description: 'Signs a contractor business is or isn\'t ready for a CRM.', path: '/resources/crm-readiness' })

  return (
    <div className="py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <div className="section-container max-w-3xl">
        <p className="text-label text-brand-electric mb-3">Resources</p>
        <h1 className="text-headline text-gray-900 mb-8">CRM Readiness for Contractors</h1>
        <div className="prose-content">
          <p>
            &quot;We need a CRM&quot; is often the wrong first conclusion. The real question is whether the business
            has a follow-up problem, a visibility problem, or a discipline problem -- because a CRM only fixes the
            first two, and it makes the third one visible without fixing it on its own.
          </p>

          <h2>Signs You&apos;re Actually Ready</h2>
          <p>
            You have more than one person who touches leads or scheduling, open leads and quotes currently live
            somewhere inconsistent (some in a notebook, some in texts, some in memory), and you&apos;ve already tried
            a shared spreadsheet or basic system and outgrown it.
          </p>

          <h2>Signs You&apos;re Not Ready Yet</h2>
          <p>
            If you&apos;re a true one-person operation with a handful of jobs a month, a CRM adds overhead before it
            adds value. The honest first step at that stage is usually just picking one tracking system -- even a
            spreadsheet -- and using it consistently.
          </p>

          <h2>What a CRM Actually Solves</h2>
          <p>
            Visibility (everyone can see the same current state), consistency (follow-up happens the same way every
            time, not dependent on memory), and accountability (a number is either tracked or it isn&apos;t --
            there&apos;s no ambiguity). It does not solve a discipline problem by itself; the system still has to be used.
          </p>

          <h2>Where This Goes Next</h2>
          <p>
            If the signs above point toward &quot;ready,&quot; <a href="https://www.moderntradescrm.com">Modern Trades CRM</a>{' '}
            is built specifically for contractor lead, follow-up, and scheduling visibility. It&apos;s a SubZeroMetrix LLC
            affiliate. If you&apos;re not sure yet, the free{' '}
            <a href="https://www.metrixaudit.com/audit">Metrix Audit</a> diagnostic (also a SubZeroMetrix LLC affiliate)
            can help identify which specific gap matters most first.
          </p>
        </div>
        <div className="mt-10">
          <Link href="/resources" className="text-brand-electric underline">&larr; All resources</Link>
        </div>
      </div>
    </div>
  )
}
