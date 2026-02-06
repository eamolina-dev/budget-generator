import { ButtonLink } from "./ButtonLink";

type ContactLink = {
  label: string;
  href: string;
  target?: "_blank" | "_self";
};

type Props = {
  title: string;
  subtitle: string;
  links: ContactLink[];
};

export const ContactSection = ({ title, subtitle, links }: Props) => {
  return (
    <section id="contacto" className="w-full py-24 px-6 my-1">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-light mb-6">{title}</h2>

        <p className="text-muted mb-12">{subtitle}</p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {links.map((link, i) => (
            <ButtonLink key={i} href={link.href} target="_blank">
              {link.label}
            </ButtonLink>
          ))}
        </div>
      </div>
    </section>
  );
};
