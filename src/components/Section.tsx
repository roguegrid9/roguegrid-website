type Props = { eyebrow?: string, title?: string, subtitle?: string, children?: React.ReactNode }
export default function Section({ eyebrow, title, subtitle, children }: Props) {
  return (
    <section className="py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {eyebrow && <div className="text-accent text-xs font-semibold tracking-wider uppercase mb-2">{eyebrow}</div>}
        {title && <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">{title}</h2>}
        {subtitle && <p className="text-white/70 mt-2 max-w-2xl">{subtitle}</p>}
        <div className="mt-8">
          {children}
        </div>
      </div>
    </section>
  )
}
