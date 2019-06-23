import { css, keyframes } from 'react-emotion';

const fadeIn = keyframes`
  0% {
    filter: blur(4px);
  }
  100% {
    filter: blur(0px);
  }
`;

export const loadedImageClass = css`
  animation: ${fadeIn} .3s;
`; 
