import { motion } from 'framer-motion'
import Section from '../components/Section'
import Card from '../components/Card'
import Button from '../components/Button'

export default function Home() {
  return (
    <div className="">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Collaborative compute that lives on your machines.
            </h1>
            <p className="text-white/70 mt-4 text-lg">
              Spin up a grid, run processes in the background, and talk while you build.
              Like Discord + VS Code Live Share + ngrok — peer‑to‑peer.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="/download" className="inline-flex items-center justify-center rounded-2xl px-5 py-2.5 text-sm font-semibold bg-accent/20 hover:bg-accent/30 border border-accent/40">
                Download Alpha
              </a>
              <a href="/how-it-works" className="inline-flex items-center justify-center rounded-2xl px-5 py-2.5 text-sm font-semibold bg-white/5 hover:bg-white/10 border border-white/10">
                How it works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <Section eyebrow="Core model" title="Grids · Processes · Channels" subtitle="Simple mental model; powerful outcomes. Everything else is just ergonomics. (Coming soon)"> 
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Grids">
            <p className="text-white/70">Your shared space: permissions, invites, roles. (Coming soon)</p>
          </Card>
          <Card title="Processes">
            <p className="text-white/70">VPS‑style sessions keep running even if you close the window. Reattach later. (Coming soon)</p>
          </Card>
          <Card title="Channels">
            <p className="text-white/70">Voice/video/text baked in for real collaboration. (Coming soon)</p>
          </Card>
        </div>
      </Section>

      {/* Demo strip */}
      <Section eyebrow="Flow" title="From local dev to shared URL in seconds" subtitle="Auto‑detect ports; click Share; collaborators join. (Coming soon)">
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Auto‑discovery">
            <div className="rounded-xl border border-white/10 bg-black/40 p-4 font-mono text-sm">
              <p>$ npm run dev</p>
              <p className="opacity-70">▶ Detected port 3000</p>
              <p className="opacity-70">▶ Click to share → https://rg9.dev/yourapp</p>
            </div>
          </Card>
          <Card title="Reattach">
            <p className="text-white/70">Close the window; your process keeps running. Reopen RogueGrid9 and reattach to see logs/history. (Coming soon)</p>
          </Card>
        </div>
      </Section>

      {/* Screenshots / gallery */}
      <Section eyebrow="Peek" title="Product gallery" subtitle="Dev‑mode UI is totally fine — we’ll show it as Prototype. Drag & drop later.">
        <div className="grid md:grid-cols-3 gap-6">
          {Array.from({length:6}).map((_,i)=> (
            <Card key={i} subtle className="aspect-[4/3] flex items-center justify-center">
              <div className="w-full h-full rounded-xl border border-dashed border-white/15 bg-white/[0.02] flex items-center justify-center">
                <span className="text-white/50 text-sm">Screenshot placeholder #{i+1} — “Prototype”</span>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl border border-white/10 bg-surface px-6 py-6">
          <div>
            <h3 className="text-xl font-bold">Ready to try the alpha?</h3>
            <p className="text-white/70">Downloads & quickstart guides are coming soon.</p>
          </div>
          <div className="flex gap-3">
            <Button>Join Waitlist</Button>
            <a href="/download" className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold bg-white/5 hover:bg-white/10 border border-white/10">Download Alpha</a>
          </div>
        </div>
      </Section>
    </div>
  )
}
