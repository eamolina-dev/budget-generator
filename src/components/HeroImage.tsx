import { ButtonLink } from "./ButtonLink";
import { ImageSection } from "./ImageSection";

type Props = {
  src: string;
  title: string;
  subtitle: string;
  btnText: string;
};

export const Hero = ({ src, title, subtitle, btnText }: Props) => {
  return (
    <ImageSection src={src}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenido */}
      <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-6">
        <div>
          <h1 className="text-6xl md:text-8xl font-medium tracking-wide drop-shadow-lg">
            {title}
          </h1>

          <p className="mt-6 text-lg md:text-xl font-medium drop-shadow">
            {subtitle}
          </p>

          <ButtonLink href="#servicios">{btnText}</ButtonLink>
        </div>
      </div>
    </ImageSection>
  );
};
