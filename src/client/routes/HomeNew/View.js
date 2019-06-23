import React, { useEffect, useRef } from 'react';

import Image from '../../components/Image/Image';

import profilePicture from './assets/new-pp-square.jpeg';
import githubIcon from './assets/github/PNG/GitHub-Mark-120px-plus.png';
import mediumIcon from './assets/medium/monogram/Monogram.png';
import twitterIcon from './assets/twitter/Twitter-Social-Icons/Twitter_SocialIcon_Circle/Twitter_Social_Icon_Circle_Color.png';
import * as styles from './styles';

const Home = () => {
  const contentBackgroundRef = useRef();
  const contentRef = useRef();
  
  useEffect(() => {
    const handleScroll = () => {
      const MAX_TRANSLATE = 114;
      const percentage =  Math.min(window.scrollY / window.innerWidth * 1.7, 1);
      const translateContent = Math.min((1 - percentage) * -MAX_TRANSLATE, 0);

      contentRef.current.style.transform = `translateY(${translateContent}px)`;
      contentBackgroundRef.current.style.opacity = percentage;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <header className={styles.container}>
      <div className={styles.profileImageContainer}>
        <Image className={styles.profileImage} src={profilePicture.src} placeholderSrc={profilePicture.preview} />
      </div>

      <div className={styles.content} ref={contentRef}>
        <div className={styles.contentBackground} ref={contentBackgroundRef} />
        <section className={styles.profileCard}>
          <h3>Jacky Efendi</h3>
          <p>Jakarta, ID 🇮🇩</p>
          <section className={styles.flexRowCenter}>
            <a href="https://github.com/jackyef" target="_blank" rel="noopener noreferrer" className={styles.socialButton}>
              <Image
                className={styles.socialButtonImage}
                src={githubIcon.src}
                placeholderSrc={githubIcon.preview}
                alt="GitHub"
              />
            </a>
            <a href="https://medium.com/@jackyef" target="_blank" rel="noopener noreferrer" className={styles.socialButton}>
              <Image
                className={styles.socialButtonImage}
                src={mediumIcon.src}
                placeholderSrc={mediumIcon.preview}
                alt="Medium"
              />
            </a>
            <a href="https://twitter.com/jacky_efendi" target="_blank" rel="noopener noreferrer" className={styles.socialButton}>
              <Image
                className={styles.socialButtonImage}
                src={twitterIcon.src}
                placeholderSrc={twitterIcon.preview}
                alt="Twitter"
              />
            </a>
          </section>

          <div className={styles.divider} />

          <section>
            I am a software engineer who loves the web platform. I believe that software engineering is not just about
            writing code, but solving problems. I am striving to improve myself to be able to solve problems better and
            improve upon existing solutions.
          </section>
        </section>

        <section className={styles.sectionCard}>
          <h3>Professional Experience</h3>
          <p>
            I am currently working at Tokopedia, focusing on the web platform and tinkering with NodeJS, React, Redux,
            Webpack, PWA, Apollo, AMP, Svelte and GraphQL on a daily basis.
          </p>
          <p>My day-to-day responsibilities includes:</p>
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
        </section>
      </div>
    </header>
  );
};

export default Home;
