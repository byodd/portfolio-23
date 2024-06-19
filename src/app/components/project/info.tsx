type InfoProps = {
  title: string;
  description: string;
  list?: string[];
};

export default function Info({ title, description, list }: InfoProps) {
  return (
    <div className="flex-1 flex flex-col">
      <div className="border-b-2 border-light-grey py-5">
        <span className="font-semibold text-sm">{title}</span>
      </div>
      <span className="font-medium text-base py-5">{description}</span>
      {list &&
        list.map((skill, index) => (
          <span
            key={index}
            className="font-medium text-base px-3 py-2 bg-rv-dark-grey mb-2 rounded-xl"
          >
            {skill}
          </span>
        ))}
    </div>
  );
}
