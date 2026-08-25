import { buildMetadata, breadcrumbSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'How Modern Trades handles visitor information.',
  path: '/privacy',
})

export default function PrivacyPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Privacy', url: '/privacy' }])

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PageHeader eyebrow="Privacy" title="Privacy Policy" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Privacy', href: '/privacy' }]} />
      <div className="section-container max-w-3xl py-16">
        <div className="prose-content">
          <p>Modern Trades is operated by SubZeroMetrix LLC.</p>
          <h2>Analytics</h2>
          <p>This site uses privacy-conscious analytics (Vercel Analytics) to understand aggregate traffic. We do not use third-party advertising or cross-site tracking cookies, and we do not sell any data.</p>
          <h2>First-Touch Attribution Cookie</h2>
          <p>
            This site sets a first-party cookie (<code>mt_first_touch</code>, and a same-purpose
            <code>mt_last_touch</code> cookie) to remember, for up to 90 days, which page and marketing source you
            first arrived from -- for example, whether you came from a search engine, a specific campaign, or one
            of our affiliated sites. This helps us understand which content is actually useful, and lets an
            affiliated site (Modern Trades CRM or Metrix Audit) credit the right source if you later visit there
            through a link on this site. The cookie stores only the page/source information described here -- never
            anything you type into a calculator or form, and never a third-party advertising identifier. It is set
            with <code>SameSite=Lax</code> and is not shared with any advertising network.
          </p>
          <h2>Contact Information</h2>
          <p>If you contact us through the SubZeroMetrix.com contact form linked from this site, that submission is governed by <a href="https://www.subzerometrix.com/privacy">SubZeroMetrix&apos;s privacy policy</a>.</p>
          <h2>Affiliates</h2>
          <p>Modern Trades CRM, The Modern Trades Mentor, and Metrix Audit are SubZeroMetrix LLC affiliates. Following a link to any of them from this site does not share your information with them beyond the first-touch source information described above.</p>
        </div>
      </div>
    </div>
  )
}
