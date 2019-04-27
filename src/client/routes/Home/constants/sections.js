import React, { Fragment } from 'react';
import * as styles from '../styles';

export default [
  {
    content: (
      <Fragment>
        <div className={styles.sectionHeader}>
          Hi, I am a&nbsp;<em>Software Engineer</em>
        </div>
        <div>
          I am a tech enthusiast who loves the web platform. I believe that software engineering is not just about
          writing code, but solving problems. I am striving to improve myself to be able to solve problems better and
          improve upon existing solutions.
        </div>
      </Fragment>
    ),
    background: 'linear-gradient(75deg, #d0003a 0, #f0005a 75%)',
  },
  {
    content: (
      <Fragment>
        <div className={styles.sectionHeader}>Professional Experience</div>
        <div>
          I am currently working at Tokopedia, focusing on the web platform and tinkering with NodeJS, React, Redux,
          Webpack, PWA, Apollo, AMP, Svelte and GraphQL on a daily basis.
        </div>
        <br />
        <div>
          My day-to-day responsibilities includes:
          <ul>
            <li>Building and maintaining Tokopedia mobile web-app using React.js</li>
            <li>Collaborating with other teams to deliver features on time</li>
            <li>
              Researching ways to improve web performance, both client-side and server-side, even if it means stepping
              out of our regular stack.
            </li>
            <li>Sharing knowledge with peers</li>
            <li>Mentor other engineers</li>
          </ul>
        </div>
      </Fragment>
    ),
    background: 'linear-gradient(75deg, #d07600 0, #f09600 75%)',
  },
  {
    content: (
      <Fragment>
        <div className={styles.sectionHeader}>Stuffs I have written</div>
        <ul>
          <li>
            <a href="https://medium.com/tokopedia-engineering/achieving-90-mobile-web-performance-at-tokopedia-23f557d98d5?source=friends_link&sk=60ab3737d2bf5ad764dc14bdd5e8da19">
              Achieving 90+ Mobile Web Performance at Tokopedia
            </a>
          </li>
          <li>
            <a href="https://medium.com/@jackyef/react-hooks-why-we-should-embrace-it-86e408663ad6?source=friends_link&sk=523f9c076d9e6e4254f999ca88d1bbcc">
              React Hooks: Why We should Embrace it
            </a>
          </li>
        </ul>
      </Fragment>
    ),
    background: 'linear-gradient(75deg, #6600c0 0, #9610f0 75%)',
  },
  // {
  //   content: (
  //     <Fragment>
  //       <div className={styles.sectionHeader}>Let&lsquo;s Connect!</div>
  //     </Fragment>
  //   ),
  //   background: 'linear-gradient(75deg, #003ad0 0, #005af0 75%)',
  // },
];
