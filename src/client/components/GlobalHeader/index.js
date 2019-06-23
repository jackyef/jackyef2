import React from 'react';
// import React, { useRef, useCallback } from 'react';
import { css } from 'react-emotion';

import Image from '../Image/Image';
import profileImage from './assets/profile.jpg';

const MAX_Z_INDEX = 500000; // TODO: put this in a constants folder or something
const BORDER_RADIUS = 24;
const headerContainer = css`
  background: linear-gradient(75deg, #003ad0 0, #005af0 75%);
  padding: 16px;
  border-radius: 0 0 0 ${BORDER_RADIUS}px;
  font-size: 24px;
  color: #fefefe;
  margin-bottom: -${BORDER_RADIUS}px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
  font-weight: 200;
  letter-spacing: 2px;
  z-index: ${MAX_Z_INDEX};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const profile = css`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-right: 24px;
`;

const flexRow = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

// const addButton = css`
//   border-radius: 50%;
//   width: 40px;
//   height: 40px;
//   border: 2px solid #fafafa;
//   background: transparent;
//   color: #fafafa;
//   font-size: 32px;
//   line-height: 32px;
//   display: flex;
//   justify-content: center;
//   transition: background, transform .2s ease-out;
//   transform: scale(1);
// `;

// const clickedButton = css`
//   transform: scale(1.3);
//   background: rgba(255, 255, 255, 0.1);
// `;

const GlobalHeader = () => {
  // const buttonRef = useRef();

  // const handleClick = useCallback(() => {
  //   requestAnimationFrame(() => {
  //     buttonRef.current.classList.add(clickedButton);
      
  //     setTimeout(() => {
  //       buttonRef.current.classList.remove(clickedButton);
  //     }, 200);
  //   })
  // }, [buttonRef]);

  return (
    <div className={headerContainer}>
      <div className={flexRow}>
        <Image className={profile} src={profileImage.src} placeholderSrc={profileImage.preview} />
        <div>Jacky Efendi</div>
      </div>

      {/* <div>
        <div className={addButton} ref={buttonRef} onClick={handleClick}>
          +
        </div>
      </div> */}
    </div>
  )
}

export default GlobalHeader;
