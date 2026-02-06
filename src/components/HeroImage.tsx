type Props = {
  src: string;
  title: string;
  subtitle: string;
  btnText: string;
};

export const Hero = ({ src, title, subtitle, btnText }: Props) => {
  return (
    <section className="relative w-full h-[60vh] md:h-[75vh] lg:h-screen overflow-hidden my-1">
      {/* Imagen de fondo */}
      <img
        src={src}
        alt="Fotografía artística"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenido */}
      <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-6">
        <div>
          <h1 className="text-6xl md:text-8xl font-medium tracking-wide drop-shadow-lg">
            {title}
          </h1>

          <p className="mt-6 text-lg md:text-xl font-medium drop-shadow">
            {subtitle}
          </p>

          <br />

          <a
            href="#servicios"
            className="mt-8 inline-block border border-white px-8 py-3 text-lg tracking-widest hover:bg-white hover:text-black transition"
          >
            {btnText}
          </a>
        </div>
      </div>
    </section>
  );
};
