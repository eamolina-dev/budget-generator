type Props = {
  href: string;
  children: React.ReactNode;
  target?: "_blank" | "_self";
};

export const ButtonLink = ({ href, children, target = "_self" }: Props) => {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className="inline-block border border-current px-8 py-3 text-sm tracking-widest hover:bg-current hover:text-[var(--color-bg)] transition"
    >
      {children}
    </a>
  );
};
