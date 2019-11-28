import React from "react";
import { Global, css } from "@emotion/core";

export default function GlobalStyles() {
  return (
    <Global
      styles={theme => css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-size: 24px;
          font-family: "Lato", sans-serif;
          background: ${theme.colors.background};
          color: ${theme.colors.text};
        }
      `}
    />
  );
}
