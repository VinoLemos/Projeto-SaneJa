import React from "react";

import water from "../../img/pexels-water.mp4";
import { css } from "@emotion/css";

function Video() {
  return (
    <video
      src={water}
      autoPlay
      loop
      muted
      className={css`
        object-fit: cover;
        width: 100vw;
        min-height: 100vh;
        position: absolute;
        z-index: -1;
      `}
    />
  );
}

export default Video;
