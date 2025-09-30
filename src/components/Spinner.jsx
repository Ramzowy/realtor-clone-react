import React from "react";

export default function Spinner() {
  return (
    <div>
      <div>
        <img
          src="../assets/spinner.svg"
          alt="Loading..."
          className="animate-spin h-6 mx-auto"
        />
      </div>
    </div>
  );
}
