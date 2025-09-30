type Props = { title?: string, children?: React.ReactNode, className?: string, subtle?: boolean }
export default function Card({ title, children, className='', subtle=false }: Props) {
  return (
    <div className={`rounded-2xl border ${subtle?'border-white/5 bg-white/[0.02]':'border-white/10 bg-surface'} shadow-soft ${className}`}>
      {title && <div className="px-5 pt-5 text-sm font-semibold opacity-80">{title}</div>}
      <div className="p-5">{children}</div>
    </div>
  )
}
