type InfoProps = {
  title: string;
  description: string;
};

export default function Info({ title, description }: InfoProps) {
  return (
    <div className="flex-1 flex flex-col">
      <div className="border-b-2 border-light-grey py-5">
        <span className="font-semibold text-sm">{title}</span>
      </div>
      <span className="font-medium text-base py-5">{description}</span>
    </div>
  );
}
