import React, { useEffect, useState } from "react";
import ReCaptcha from "@pittica/gatsby-plugin-recaptcha";
import {
  bgDark,
  bgLight,
  borderLight,
  buttonBase,
  textDark,
  textLight,
} from "../../styles/common";

export default function Contact({ email }) {
  const [innerText, setInnerText] = useState({ __html: "" });
  const [submitted, setSubmitted] = useState(false);

  const [open, setOpen] = useState(false);

  function handleClick() {
    if (!open) {
      setOpen(true);
      setSubmitted(true);
      setInnerText({
        __html: email,
      });
    }
  }

  const submit = (token) => {
    console.log("Submitted");
  };

  return (
    <div>
      <div
        className={`${
          open ? "hidden" : ""
        } flex flex-col items-center ${borderLight} border-2`}
      >
        <span className="p-4 md:p-2 text-center">
          Please confirm that you are not a robot trying to harvest and sell my
          email address.
        </span>

        <button
          data-sitekey="6LcJoX4dAAAAABU1cGGwVyAa28kWUInQJzA7PsSy"
          onClick={handleClick}
          className={`g-recaptcha my-4 p-2 ${bgLight} ${buttonBase} ${textDark}`}
        >
          I am not a robot.
        </button>
        <div className="mb-4 min-w-[256px] min-h-[60px]">
          <ReCaptcha
            action="contact"
            siteKey="6LcJoX4dAAAAABU1cGGwVyAa28kWUInQJzA7PsSy"
            onVerify={(token) => submit(token)}
            submitted={submitted}
          />
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={innerText}
        className="flex justify-center"
      ></div>
    </div>
  );
}
