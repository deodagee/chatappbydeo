import React from 'react';
import Image from 'next/image';
import styles from '../../styles/dashboard/icons.module.css';

function TopLogoAndText() {
  return (
      <div className={styles.image_wrapper}>
        {/* Use your custom image with the next/image component */}
        <Image
          className={styles.logo_front}
          width={100}
          height={100}
          alt='image'
          src={"/logowhite.png"}
        />
      </div>
  );
}

export default TopLogoAndText;
