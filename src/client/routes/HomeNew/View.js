import React from 'react';

import Image from '../../components/Image/Image';

import profilePicture from './assets/new-pp-square.jpeg';
import * as styles from './styles';

const Home = () => {
  return (
    <header className={styles.container}>
      <div className={styles.profileImageContainer}>
        <Image className={styles.profileImage} src={profilePicture.src} placeholderSrc={profilePicture.preview} />
      </div>
      <section className={styles.profileCard}>
        <h3>Jacky Efendi</h3>
        <p>Jakarta, ID 🇮🇩</p>
      </section>
    </header>
  );
};

export default Home;
