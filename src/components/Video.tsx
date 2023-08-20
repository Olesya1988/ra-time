import { DateTime } from "./DateTime";
import { DateTimePrettier } from "./DateTimePrettier";

const DateTimePretty = DateTimePrettier(DateTime);

export type TListItem = {
  url: string;
  date: string;
};

export const Video = ({ url, date }: TListItem) => {
  return (
    <div className="video">
      <iframe
        src={url}
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <DateTimePretty date={date} />
    </div>
  );
};
