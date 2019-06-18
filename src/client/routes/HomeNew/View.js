import React from 'react';

import Image from '../../components/Image/Image';

import profilePicture from './assets/new-pp-square.jpeg';
import githubIcon from './assets/github/PNG/GitHub-Mark-120px-plus.png';
import mediumIcon from './assets/medium/monogram/Monogram.png';
import twitterIcon from './assets/twitter/Twitter-Social-Icons/Twitter_SocialIcon_Circle/Twitter_Social_Icon_Circle_Color.png';
import * as styles from './styles';

const Home = () => {
  return (
    <header className={styles.container}>
      <div className={styles.profileImageContainer}>
        <Image className={styles.profileImage} src={profilePicture.src} placeholderSrc={profilePicture.preview} />
      </div>
      
      <div className={styles.content}>
        <section className={styles.profileCard}>
          <h3>Jacky Efendi</h3>
          <p>Jakarta, ID 🇮🇩</p>
          <section className={styles.flexRowCenter}>
            <Image
              className={styles.socialButton}
              src={githubIcon.src}
              placeholderSrc={githubIcon.preview}
              alt="GitHub"
            />
            <Image
              className={styles.socialButton}
              src={mediumIcon.src}
              placeholderSrc={mediumIcon.preview}
              alt="Medium"
            />
            <Image
              className={styles.socialButton}
              src={twitterIcon.src}
              placeholderSrc={twitterIcon.preview}
              alt="Twitter"
            />
          </section>
        </section>

        <section>
          Next section here
        </section>
        
      </div>

    </header>
  );
};

export default Home;
