import React from "react";
import spinner from "../assets/Spinnerpx.svg";

export default function Spinner() {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-[rgb(240,253,244)]">
        <img src={spinner} alt="Loading..." />
      </div>
    </>
  );
}
