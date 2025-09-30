import Section from '../components/Section'
import Card from '../components/Card'

export default function Roadmap() {
  return (
    <div>
      <Section title="Roadmap" subtitle="High‑level milestones only. (Coming soon)">
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Q3">
            <ul className="list-disc list-inside text-white/70">
              <li>Alpha downloads</li>
              <li>Process reattach</li>
              <li>Basic Channels</li>
            </ul>
          </Card>
          <Card title="Q4">
            <ul className="list-disc list-inside text-white/70">
              <li>Permissions & audit</li>
              <li>Backups & presets</li>
              <li>Public beta</li>
            </ul>
          </Card>
        </div>
      </Section>
    </div>
  )
}
