export const Social: React.FC<{ name: string; url: string; icon: string }> = ({
  name,
  url,
  icon,
}) => {
  return (
    <li key={name} className="m-2">
      <a href={url} target="_blank">
        <i className={`img-hover fs-1 text-black ${icon}`} />
      </a>
    </li>
  )
}
