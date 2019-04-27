import React from 'react';
import { node } from 'prop-types';

import { container } from './styles';

const Layout = ({ children }) => <div className={container}>{children}</div>;

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
