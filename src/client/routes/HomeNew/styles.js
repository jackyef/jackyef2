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
  flex-direction: column;
  z-index: 0;
`;

export const content = css`
  padding: 16px;
  transform: translateY(-114px);
  transition: .3s cubic-bezier(.15,.79,.4,.95);
`;

export const contentBackground = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  background: linear-gradient(45deg, rgb(193,198,192), rgb(255,255,255));
  box-shadow: 0 -4px 9px 0px rgba(0,0,0,.3);
`;

export const profileImageContainer = css`
  width: 100vw;
  height: 100vw;
  transition: .3s cubic-bezier(.15,.79,.4,.95);
`;

export const profileImage = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const profileCard = css`
  opacity: 0.85;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(240, 240, 240, 0.9));
  align-self: center;
  border-radius: 4px;
  box-shadow: 0 2px 9px 0px grey;
  position: relative;
  //top: -114px;
  //margin-bottom: -114px;
  padding: 24px 16px;
  font-size: 14px;

  > h3 {
    margin: 0;
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
    text-align: center;
  }
`;

export const flexRowCenter = css`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const divider = css`
  height: 1px;
  margin: 8px 0;
  color: black;
`;

export const socialButton = css`
  flex: 1;
  text-align: center;
  font-size: 0.8rem;
  width: 33.333%;
  height: auto;
  object-fit: cover;
  padding: 12px 36px;
`;

export const sectionCard = css`
opacity: 0.85;
background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(240, 240, 240, 0.9));
align-self: center;
border-radius: 4px;
box-shadow: 0 2px 9px 0px grey;
position: relative;
padding: 16px;
margin: 16px 0;
font-size: 14px;

> h3 {
  margin: 0;
  font-size: 1.45rem;
  text-align: center;
  margin-bottom: 8px;
  font-family: Decovar, system-ui, sans-serif;
  font-variation-settings: "WMX2" 50;
  letter-spacing: 4px;
  font-weight: bold;
  text-transform: uppercase;
}
`;