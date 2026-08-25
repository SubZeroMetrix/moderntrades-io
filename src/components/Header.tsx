import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-surface-border">
      <div className="section-container flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-lg text-brand-navy tracking-tight">Modern Trades</Link>
        <nav className="hidden sm:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/resources" className="hover:text-brand-electric transition-colors">Resources</Link>
          <Link href="/resources/crm-readiness" className="hover:text-brand-electric transition-colors">CRM Readiness</Link>
          <Link href="/about" className="hover:text-brand-electric transition-colors">About</Link>
          <Link href="/contact" className="hover:text-brand-electric transition-colors">Contact</Link>
        </nav>
        <a href="https://www.moderntradescrm.com" className="btn-primary !px-5 !py-2 !text-sm">See Modern Trades CRM</a>
      </div>
    </header>
  )
}
