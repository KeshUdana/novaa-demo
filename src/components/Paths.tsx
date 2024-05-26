interface PathsProps {
  namePath: string;
}

export default function Paths({ namePath }: PathsProps) {
  return (
    <div className="breadcrumbs my-4 text-sm">
      <p className="mb-4 text-balance text-center">Make changes here :</p>
      <ul>
        <li>
          <a>src</a>
        </li>
        <li>
          <a>app</a>
        </li>
        <li>team</li>
        <li>{namePath}</li>
      </ul>
    </div>
  );
}
