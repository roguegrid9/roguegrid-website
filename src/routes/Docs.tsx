import Section from '../components/Section'
import Card from '../components/Card'

export default function Docs() {
  return (
    <div>
      <Section title="Documentation" subtitle="MDX docs & search coming soon. For now, this is a stub.">
        <div className="prose prose-invert max-w-none">
          <h3>Concepts</h3>
          <ul>
            <li>Grids</li>
            <li>Processes</li>
            <li>Channels</li>
          </ul>
          <h3>Tutorials</h3>
          <ul>
            <li>Share a React app</li>
            <li>Minecraft server preset</li>
            <li>Reattach to a running process</li>
          </ul>
        </div>
      </Section>
    </div>
  )
}
