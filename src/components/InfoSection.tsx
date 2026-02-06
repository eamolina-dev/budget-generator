import { ButtonLink } from "./ButtonLink";
import { SplitLayout } from "./SplitLayout";

type Props = {
  title: string;
  description: React.ReactNode;
  image: string;
  ctaText?: string;
};

export const InfoSection = ({ title, description, image, ctaText }: Props) => {
  return (
    <SplitLayout image={image}>
      <div className="max-w-md fade-in-right">
        <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wide">
          {title}
        </h2>

        <div className="text-gray-600 mb-6 leading-relaxed">{description}</div>

        <ButtonLink href="#contacto">{ctaText}</ButtonLink>
      </div>
    </SplitLayout>
  );
};
