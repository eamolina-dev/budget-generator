import { useEffect, useRef } from "react";
import { ImageSection } from "./ImageSection";

type Props = {
  image: string;
};

export const DynamicImageSection = ({ image }: Props) => {
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;
      const section = imgRef.current.closest("section");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let progress = 1 - rect.bottom / (windowHeight + rect.height);
      progress = Math.min(Math.max(progress, 0), 1);

      const scale = 1.5 - progress * 0.5;
      imgRef.current.style.transform = `scale(${scale})`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ImageSection src={image}>
      <img
        ref={imgRef}
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
    </ImageSection>
  );
};
