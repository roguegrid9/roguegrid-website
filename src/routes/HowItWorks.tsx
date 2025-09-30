import Section from '../components/Section'
import Card from '../components/Card'

export default function HowItWorks() {
  return (
    <div>
      <Section title="How it works" subtitle="A simple model for real‑time collaboration. (Everything on this page is coming soon.)">
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="1 · Grids">
            <p className="text-white/70">Create or join a Grid — your shared workspace. Invite people; assign roles. (Coming soon)</p>
          </Card>
          <Card title="2 · Processes">
            <p className="text-white/70">Start background sessions for apps/servers. They persist; you can reattach anytime. (Coming soon)</p>
          </Card>
          <Card title="3 · Channels">
            <p className="text-white/70">Jump into voice/video and chat next to your running processes. (Coming soon)</p>
          </Card>
        </div>
      </Section>
      <Section eyebrow="Security" title="Permissions & audit" subtitle="Owner/Admin/Member roles with granular overrides. (Coming soon)">
        <Card>
          <ul className="list-disc list-inside text-white/70">
            <li>Role presets with override rules</li>
            <li>Resource‑scoped permissions</li>
            <li>Audit trail for sensitive actions</li>
          </ul>
        </Card>
      </Section>
    </div>
  )
}
