import React, { useMemo } from 'react';

import Section from '../../components/Section';

import sections from './constants/sections';

import * as styles from './styles';

const Home = () => {
  const renderedSections = useMemo(() =>
    sections.map((section, index) => (
      <Section key={index} background={section.background}>
        {section.content}
      </Section>
    ))
  );

  return <div className={styles.container}>{renderedSections}</div>;
};

export default Home;
