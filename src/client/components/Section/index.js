import React from 'react';
import { node, string } from 'prop-types';

import styled from 'react-emotion';

const STARTING_Z_INDEX = 500000;
const BORDER_RADIUS = 24;

window.currentZIndex = STARTING_Z_INDEX;

const Container = styled.section`
  ${props => {
    return `
      position: relative;
      background: ${props.background || '#2358de'};
      padding: ${BORDER_RADIUS + 16}px 16px 16px 16px;
      border-radius: 0 0 0 ${BORDER_RADIUS}px;
      font-size: 14px;
      line-height: 1.5;
      color: #fefefe;
      margin-bottom: -${BORDER_RADIUS}px;
      box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.3);
      z-index: ${props.zIndex};

      a {
        color: #fefefe;
      }
    `;
  }}
`;

class Section extends React.Component {
  constructor(props) {
    super(props);

    // every new section should be below the previously created section.
    // To create stacking effect
    window.currentZIndex -= 1;
    this.zIndex = window.currentZIndex;
  }

  render() {
    const { background, children } = this.props;

    return (
      <Container zIndex={this.zIndex} background={background}>
        {children}
      </Container>
    )
  }
}

Section.propTypes = {
  background: string,
  children: node,
};

Section.defaultProps = {
  background: '#2358de',
  children: null,
};

export default Section;
