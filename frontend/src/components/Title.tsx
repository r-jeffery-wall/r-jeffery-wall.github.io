export default function Title({
  text,
  size,
}: {
  text: string
  size: string
}) {
  return (
    <div
      className={`border-b-4 border-ctp-peach border-dotted w-auto h-auto text-center ${size}`}
    >
      <p className="font-doto text-ctp-mauve pb-5 px-8">{text}</p>
    </div>
  )
}
