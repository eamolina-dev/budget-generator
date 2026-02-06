export type ContactLinkType = {
  label: string;
  href: string;
};

export const ContactLink = ({ label, href }: ContactLinkType) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="border border-current px-8 py-3 text-sm tracking-widest hover:bg-current hover:text-[var(--color-bg)] transition"
    >
      {label}
    </a>
  );
};
