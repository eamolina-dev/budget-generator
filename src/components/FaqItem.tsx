export type FaqItemType = {
  question: string;
  answer: string;
};

export const FaqItem = ({ question, answer }: FaqItemType) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-2">{question}</h3>
      <p className="text-muted leading-relaxed">{answer}</p>
    </div>
  );
};
