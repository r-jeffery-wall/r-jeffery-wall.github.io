export default function Title({
  text,
  size,
}: {
  text: string
  size: string
}) {
  return (
    <div
      className={`border-b-4 border-orange-400 border-dotted w-auto h-auto text-center ${size}`}
    >
      <p className="font-doto text-orange-400 pb-5">{text}</p>
    </div>
  )
}
