type Props = {
  image: string;
  reverse?: boolean;
  children: React.ReactNode;
};

export const SplitLayout = ({ image, reverse = false, children }: Props) => {
  return (
    <section className="w-full flex flex-col lg:flex-row lg:min-h-screen my-1">
      {/* Imagen */}
      <div
        className={`w-full lg:w-1/2 aspect-[4/5] lg:h-auto relative ${
          reverse ? "order-1 lg:order-2" : "order-1"
        }`}
      >
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Contenido */}
      <div
        className={`w-full lg:w-1/2 relative aspect-[4/5] lg:aspect-auto flex items-center justify-center px-10 py-16 ${
          reverse ? "order-2 lg:order-1" : "order-2"
        }`}
      >
        {children}
      </div>
    </section>
  );
};
