import Section from '../components/Section'
import Card from '../components/Card'

export default function PressKit() {
  return (
    <div>
      <Section title="Press Kit" subtitle="Logo, brand notes, and screenshots.">
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Logo">
            <div className="flex items-center gap-4">
              <img src="/logo1.svg" alt="RogueGrid9 Logo" className="h-12" />
              <a className="rounded-2xl border border-white/10 px-3 py-1 text-sm bg-white/5 hover:bg-white/10" href="/logo1.svg" download>Download SVG</a>
            </div>
          </Card>
          <Card title="Screenshots">
            <p className="text-white/70">Add your own images to <code>/public/screenshots</code> and they’ll auto‑appear here. (Coming soon)</p>
          </Card>
        </div>
      </Section>
    </div>
  )
}
