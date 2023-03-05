import React from "react";

const ProgressBar = ({
  percent,
  title,
}: {
  percent: number;
  title: string;
}) => {
  return (
    <>
      <div className="circle_box">
        <div>
          <svg className="progress-bar">
            <circle cx="100" cy="100" r="60" />
            <circle
              cx="100"
              cy="100"
              r="60"
              style={{
                strokeDasharray: "calc(100 * 6)",
                strokeDashoffset: `calc(100 * 6 - (60 * 6 * ${percent}) / 100)`,
              }}
            />
          </svg>
          <span>
            <h2 className="text-[24px] font-bold leading-[1]">{percent}%</h2>
            <p className="text-[15px] leading-[1.2] mt-2">{title}</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
