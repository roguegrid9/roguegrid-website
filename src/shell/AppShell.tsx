import { Outlet, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const nav = [
  { href: '/how-it-works', label: 'How it works' },
  { href: '/download', label: 'Download' },
  { href: '/docs', label: 'Docs' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/press-kit', label: 'Press Kit' },
]

export default function AppShell() {
  return (
    <div className="min-h-screen bg-bg text-text flex flex-col">
      <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 no-underline">
            <img src="/logo1.svg" alt="RogueGrid9" className="h-7 w-auto" />
            <span className="font-extrabold tracking-tight text-lg">RogueGrid9</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((n) => (
              <NavLink
                key={n.href}
                to={n.href}
                className={({isActive}) => 
                  'text-sm no-underline hover:opacity-100 opacity-90 ' + (isActive ? 'text-accent' : 'text-white/80')
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
          <a href="/download" className="text-sm font-semibold px-3 py-1.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 shadow-soft">
            Download Alpha
          </a>
        </div>
      </header>

      <main className="flex-1">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className=""
        >
          <Outlet />
        </motion.div>
      </main>

      <footer className="mt-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-white/70">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src="/logo1.svg" className="h-6" />
              <span>© {new Date().getFullYear()} RogueGrid9</span>
            </div>
            <div className="flex gap-4">
              <a className="hover:text-white/100" href="/docs">Docs</a>
              <a className="hover:text-white/100" href="/roadmap">Roadmap</a>
              <a className="hover:text-white/100" href="/press-kit">Press Kit</a>
              <a className="hover:text-white/100" href="/pricing">Pricing</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
