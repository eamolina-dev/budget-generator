type Props = {
  src: string;
  alt?: string;
  children?: React.ReactNode;
  className?: string;
};

export const ImageSection = ({ src, alt = "", children, className }: Props) => {
  return (
    <section
      className={`relative w-full h-[60vh] md:h-[75vh] lg:h-screen overflow-hidden my-1 ${
        className ?? ""
      }`}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {children && (
        <div className="relative z-10 w-full h-full">{children}</div>
      )}
    </section>
  );
};
