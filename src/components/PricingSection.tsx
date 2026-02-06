import { ButtonLink } from "./ButtonLink";
import { SplitLayout } from "./SplitLayout";

type Props = {
  title: string;
  description: React.ReactNode;
  price: string;
  image: string;
  reverse?: boolean;
  priceLabel?: string;
  ctaText?: string;
};

export const PricingSection = ({
  title,
  description,
  price,
  image,
  reverse = false,
  priceLabel,
  ctaText,
}: Props) => {
  return (
    <SplitLayout image={image} reverse={reverse}>
      <div className={`max-w-md ${reverse ? "fade-in-left" : "fade-in-right"}`}>
        <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wide">
          {title}
        </h2>

        <div className="text-gray-600 mb-6 leading-relaxed">{description}</div>

        <div className="mb-8">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            {priceLabel}
          </p>
          <p className="text-4xl font-light">{price}</p>
        </div>

        <ButtonLink href="#contacto">{ctaText}</ButtonLink>
      </div>
    </SplitLayout>
  );
};
