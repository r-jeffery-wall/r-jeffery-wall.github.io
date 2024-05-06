export const Social = ({
  name,
  url,
  icon,
}: {
  name: string
  url: string
  icon: string
}) => {
  return (
    <li key={name} className="m-2">
      <a href={url} target="_blank">
        <i className={`img-hover fs-1 text-black ${icon}`} />
      </a>
    </li>
  )
}
