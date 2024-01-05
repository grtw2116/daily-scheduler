"use client";
import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";
import { css } from "../../../../styled-system/css";

function ProgressBar() {
  const props = {
    percent: 60,
    colorSlice: "#00ff00",
    colorCircle: "#cccccc",
    round: true,
  };

  return (
    <div className={css({ width: "max", marginX: "auto" })}>
      <CircularProgressBar {...props} />
    </div>
  );
}

export { ProgressBar };
