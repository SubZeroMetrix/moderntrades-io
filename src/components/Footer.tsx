import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-brand-navy text-gray-400 mt-24">
      <div className="section-container py-14">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          <div>
            <p className="font-bold text-white text-lg mb-3">Modern Trades</p>
            <p className="text-sm leading-relaxed">
              A national contractor growth and operations publication, operated by SubZeroMetrix LLC. Modern Trades
              CRM and The Modern Trades Mentor are SubZeroMetrix LLC affiliates, not independent third parties.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Resources</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/resources" className="hover:text-white transition-colors">All Resources</Link></li>
              <li><Link href="/resources/crm-readiness" className="hover:text-white transition-colors">CRM Readiness</Link></li>
              <li><Link href="/resources/revenue-recovery" className="hover:text-white transition-colors">Revenue Recovery</Link></li>
              <li><Link href="/resources/automation-readiness" className="hover:text-white transition-colors">Automation Readiness</Link></li>
              <li><Link href="/tools" className="hover:text-white transition-colors">All Tools</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Legal</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
              <li><a href="https://www.moderntradescrm.com" className="hover:text-white transition-colors">Modern Trades CRM</a></li>
              <li><a href="https://www.subzerometrix.com" className="hover:text-white transition-colors">SubZeroMetrix</a></li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-gray-400 border-t border-white/10 pt-6">&copy; {new Date().getFullYear()} SubZeroMetrix LLC.</p>
      </div>
    </footer>
  )
}
