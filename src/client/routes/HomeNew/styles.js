import { css, injectGlobal } from 'react-emotion';

// TODO: make this font loading optional, only import it if user want to see cool stuffs

import DecovarFont from './fonts/DecovarAlpha-VF.subset.ttf';

injectGlobal`
@font-face {
  font-family: Decovar;
  src: url(${DecovarFont});
  font-display: swap;
}
`;

export const container = css`
  display: flex;
  min-height: 100vh;
  background: #fff;
  flex-direction: column;
  z-index: 0;
`;

// export const cover = css`
//   background: linear-gradient(to right, #ffffff)
// `;

export const profileImageContainer = css`
  width: 100vw;
  height: 100vw;
`;

export const profileImage = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const profileCard = css`
  width: 84vw;
  opacity: 0.85;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(240, 240, 240, 0.9));
  align-self: center;
  border-radius: 4px;
  box-shadow: 0 2px 9px 0px grey;
  position: relative;
  top: -88px;
  height: 152px;

  > h3 {
    font-size: 1.45rem;
    text-align: center;
    margin-bottom: 8px;
    font-family: Decovar, system-ui, sans-serif;
    font-variation-settings: "WMX2" 50;
    letter-spacing: 4px;
    font-weight: bold;
    text-transform: uppercase;
  }

  > p {
    font-size: 0.8rem;
    text-align: center;
  }
`;

