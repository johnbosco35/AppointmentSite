/** @format */

import { Global, css } from "@emotion/react";

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;600;700;800&display=swap");
        body {
          margin: 0;
          padding: 0;
          font-family: "Montserrat", sans-serif;
          color: "#fff";
        }
      `}
    />
  );
};

export default GlobalStyle;
