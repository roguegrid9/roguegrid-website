type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' }
export default function Button({ variant='primary', className='', ...props }: Props) {
  const base = 'inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition border'
  const variants = {
    primary: 'bg-accent/20 border-accent/30 hover:bg-accent/30 hover:border-accent/50',
    ghost: 'bg-white/5 border-white/10 hover:bg-white/10'
  }
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />
}
