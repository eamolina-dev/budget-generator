type Props = {
  children?: React.ReactNode;
};

export const BudgetLayout = ({ children }: Props) => {
  return <main className="theme-light font-body">{children}</main>;
};
