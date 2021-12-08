import React from "react";

export default function ContentMetaData({ date, time, words }) {
  return (
    <div className="flex justify-center items-center mt-2">
      {date} | {time} {time > 1 ? "mins" : "min"} | {words} words
    </div>
  );
}
