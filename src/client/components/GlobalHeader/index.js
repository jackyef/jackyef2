import React from 'react';
import { css } from 'react-emotion';

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
`;

const profile = css`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-right: 24px;
`;

const GlobalHeader = () => {
  return (
    <div className={headerContainer}>
      <img className={profile} src={profileImage} />
      <div>Jacky Efendi</div>
    </div>
  )
}

export default GlobalHeader;
