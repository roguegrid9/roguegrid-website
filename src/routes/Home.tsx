
import { motion } from 'framer-motion'
import Section from '../components/Section'
import Card from '../components/Card'

export default function Home() {
  return (
    <div className="">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Collaborative Computing, Reimagined
            </h1>
            <p className="text-white/70 mt-4 text-lg">
              Share processes peer-to-peer with your team. Direct connections are free. 
              When you need a relay, it's just $5 per 100GB.
            </p>
            <div className="mt-8 flex gap-3">
              <a 
                href="https://discord.gg/NMM9KRXgHU" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-2.5 text-sm font-semibold bg-[#5865F2]/20 hover:bg-[#5865F2]/30 border border-[#5865F2]/40"
              >
                Join Discord for Beta Access
              </a>
            </div>
            <p className="text-white/50 text-sm mt-4">
              🔒 Currently in closed beta • Beta invites distributed in Discord
            </p>
          </div>
        </div>
      </section>

      {/* How P2P Works */}
      <Section 
        eyebrow="Smart Connection Strategy" 
        title="P2P-First Architecture" 
        subtitle="We try direct connections first. Only use relay servers when needed."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Direct P2P (Free)">
            <div className="space-y-3">
              <p className="text-white/70">~70% of connections work directly:</p>
              <ul className="text-white/60 text-sm space-y-2">
                <li>✓ Same network → Direct P2P</li>
                <li>✓ Compatible NAT → Direct P2P</li>
                <li>✓ No firewall restrictions → Direct P2P</li>
              </ul>
              <div className="pt-3 border-t border-white/10">
                <p className="text-accent font-semibold">$0.00 / month</p>
              </div>
            </div>
          </Card>
          <Card title="Relay Servers (When Needed)">
            <div className="space-y-3">
              <p className="text-white/70">~30% need relay servers:</p>
              <ul className="text-white/60 text-sm space-y-2">
                <li>• Restrictive corporate firewalls</li>
                <li>• Complex network topologies</li>
                <li>• Symmetric NAT configurations</li>
              </ul>
              <div className="pt-3 border-t border-white/10">
                <p className="text-accent font-semibold">$5 per 100GB bandwidth</p>
                <p className="text-white/50 text-xs mt-1">Only pay for what you use</p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Real-World Costs */}
      <Section 
        eyebrow="Transparent Pricing" 
        title="What Will You Actually Pay?" 
        subtitle="Honest estimates based on typical usage patterns"
      >
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Small Dev Team">
            <div className="space-y-2">
              <p className="text-white/70 text-sm">3-5 developers sharing terminals</p>
              <div className="py-4">
                <p className="text-2xl font-bold text-accent">$2-5</p>
                <p className="text-white/50 text-xs">per month</p>
              </div>
              <p className="text-white/60 text-xs">~5-10GB relay bandwidth</p>
            </div>
          </Card>
          <Card title="Gaming Group">
            <div className="space-y-2">
              <p className="text-white/70 text-sm">10 people, game server + voice</p>
              <div className="py-4">
                <p className="text-2xl font-bold text-accent">$5-10</p>
                <p className="text-white/50 text-xs">per month</p>
              </div>
              <p className="text-white/60 text-xs">~15-20GB relay bandwidth</p>
            </div>
          </Card>
          <Card title="Most Users">
            <div className="space-y-2">
              <p className="text-white/70 text-sm">P2P works, minimal relay usage</p>
              <div className="py-4">
                <p className="text-2xl font-bold text-accent">$0-2</p>
                <p className="text-white/50 text-xs">per month</p>
              </div>
              <p className="text-white/60 text-xs">~0-5GB relay bandwidth</p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Comparison */}
      <Section 
        eyebrow="Cost Comparison" 
        title="Save 80-90% vs Traditional Hosting"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Traditional Stack">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-white/70">VPS Hosting (DigitalOcean)</span>
                <span className="text-white/90">$24/mo</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">ngrok Pro (tunneling)</span>
                <span className="text-white/90">$20/mo</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Discord Nitro</span>
                <span className="text-white/90">$10/mo</span>
              </div>
              <div className="pt-3 border-t border-white/10 flex justify-between font-semibold">
                <span>Total</span>
                <span className="text-lg">$54/mo</span>
              </div>
              <p className="text-white/50 text-xs pt-2">= $648/year</p>
            </div>
          </Card>
          <Card title="RogueGrid9">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-white/70">Direct P2P connections</span>
                <span className="text-accent">$0/mo</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Relay bandwidth (~20GB)</span>
                <span className="text-white/90">$5/mo</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Voice/Video/Chat</span>
                <span className="text-accent">$0/mo</span>
              </div>
              <div className="pt-3 border-t border-white/10 flex justify-between font-semibold">
                <span>Total</span>
                <span className="text-lg text-accent">$5/mo</span>
              </div>
              <p className="text-accent/80 text-xs pt-2">= $60/year • Save $588/year</p>
            </div>
          </Card>
        </div>
        <div className="mt-6 text-center">
          <p className="text-accent font-bold text-2xl">💰 Save 91% annually</p>
        </div>
      </Section>

      {/* FAQ */}
      <Section 
        eyebrow="Frequently Asked" 
        title="Common Questions"
      >
        <div className="space-y-4">
          <Card>
            <h3 className="font-bold mb-2">Is RogueGrid9 really free?</h3>
            <p className="text-white/70 text-sm">
              Yes, with nuance: P2P connections between compatible networks are completely FREE. 
              About 70% of connections work directly without relay. Relay servers cost $5/100GB when needed. 
              Most small teams spend $0-10/month total.
            </p>
          </Card>
          <Card>
            <h3 className="font-bold mb-2">When would I need relay servers?</h3>
            <p className="text-white/70 text-sm">
              You'll need relays when behind corporate firewalls, using symmetric NAT (restrictive routers), 
              or connecting across certain ISPs. Our app automatically handles this—you don't decide. 
              You'll see clearly whether you're connected via P2P or relay.
            </p>
          </Card>
          <Card>
            <h3 className="font-bold mb-2">How do I get beta access?</h3>
            <p className="text-white/70 text-sm">
              Join our Discord community at discord.gg/NMM9KRXgHU. Introduce yourself in #introductions 
              and participate in discussions. We send beta invites in waves to active community members. 
              Priority given to users who can help us test specific features.
            </p>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="flex flex-col items-center text-center gap-6 rounded-2xl border border-white/10 bg-surface px-6 py-12">
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold">Ready to Join the Beta?</h3>
            <p className="text-white/70 mt-3">
              Join 340+ developers in Discord. Beta invites distributed weekly.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href="https://discord.gg/NMM9KRXgHU"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold bg-[#5865F2]/20 hover:bg-[#5865F2]/30 border border-[#5865F2]/40"
            >
              Join Discord Community
            </a>
          </div>
          <p className="text-white/50 text-sm">
            🔒 Closed beta • Applied review process • Priority for active members
          </p>
        </div>
      </Section>
    </div>
  )
}
