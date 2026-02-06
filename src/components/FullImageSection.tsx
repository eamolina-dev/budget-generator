import { ImageSection } from "./ImageSection";

type Props = {
  src: string;
  alt?: string;
};

export const FullImageSection = ({ src, alt }: Props) => {
  return <ImageSection src={src} alt={alt} />;
};
