import React from "react";

type Props = {
  className?: string;
};

const Timeline = ({ className }: Props) => {
  return (
    <div className={`relative h-14 ${className}`} style={{ width: "80%" }}>
      <h1
        className="absolute top-0 text-3xl font-extrabold tracking-wide text-blue-700 text-opacity-80 left-6"
        style={{ transform: "translateY(-1.48rem)" }}
      >
        Timeline
      </h1>
      <div className="absolute top-0 left-0 w-full border border-blue-200 rounded-md shadow-lg h-14 bg-gray-50"></div>
    </div>
  );
};

export { Timeline };
