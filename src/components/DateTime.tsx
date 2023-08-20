export type TDate = {
  date: string;
};

export const DateTime = ({ date }: TDate) => {
  return <p className="date">{date}</p>;
};
