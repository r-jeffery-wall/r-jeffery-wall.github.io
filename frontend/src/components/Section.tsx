import type { ReactNode } from 'react'

export default function Section({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle?: string
  children: ReactNode
}) {
  return (
    <section className="my-6">
      <div className="my-3 mt-5 border-dotted border-ctp-peach border-y-4">
        <h2 className="font-doto text-ctp-mauve text-4xl">{title}</h2>
        {subtitle ? <h3 className="italic">{subtitle}</h3> : null}
      </div>
      <div className="my-2 py-2">{children}</div>
    </section>
  )
}
