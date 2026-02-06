type Props = {
  title: string;
};

export const SectionTitle = ({ title }: Props) => {
  return (
    <section className="w-full py-24 px-6 flex items-center justify-center">
      <h2 className="text-4xl md:text-6xl font-title font-light tracking-wide text-center">
        {title}
      </h2>
    </section>
  );
};
