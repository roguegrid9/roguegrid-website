import Section from '../components/Section'
import Card from '../components/Card'

export default function Download() {
  return (
    <div>
      <Section title="Download RogueGrid9" subtitle="Auto‑detect platform coming soon. For now, downloads are placeholders.">
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Windows">
            <button className="w-full rounded-2xl px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10">Download (Coming soon)</button>
          </Card>
          <Card title="macOS">
            <button className="w-full rounded-2xl px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10">Download (Coming soon)</button>
          </Card>
          <Card title="Linux">
            <button className="w-full rounded-2xl px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10">Download (Coming soon)</button>
          </Card>
        </div>
      </Section>
      <Section eyebrow="Quickstart" title="Getting started" subtitle="Short, copy‑pasteable steps.">
        <Card>
{`# Coming soon
1. Install RogueGrid9
2. Sign in / join a Grid
3. Start a Process (e.g., npm run dev)
4. Share detected port
5. Invite your team and jump in a Channel`}
        </Card>
      </Section>
    </div>
  )
}
