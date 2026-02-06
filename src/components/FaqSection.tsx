import { FaqItem, type FaqItemType } from "./FaqItem";

type Props = {
  title?: string;
  items: FaqItemType[];
};

export const FaqSection = ({
  title = "Preguntas Frecuentes",
  items,
}: Props) => {
  return (
    <section className="w-full py-24 px-6 my-1">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-16">
          {title}
        </h2>

        <div className="space-y-10">
          {items.map((item, i) => (
            <FaqItem key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
