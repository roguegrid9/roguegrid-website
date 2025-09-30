import Section from '../components/Section'
import Card from '../components/Card'

export default function Pricing() {
  return (
    <div>
      <Section title="Pricing" subtitle="Transparent, simple. (All tiers are placeholders for now.)">
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Free">
            <p className="text-white/70">Core P2P, 1 Grid, limited Processes. (Coming soon)</p>
          </Card>
          <Card title="Plus">
            <p className="text-white/70">More Processes, priority relays, backups. (Coming soon)</p>
          </Card>
          <Card title="Team">
            <p className="text-white/70">Org roles, SSO, audit logs, compliance. (Coming soon)</p>
          </Card>
        </div>
      </Section>
    </div>
  )
}
