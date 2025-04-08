import React from 'react';
import styles from './home-page.module.css';
import AboutUs from '../components/AboutUs'; // Corrected path
import Featured from '../components/Featured'; // Corrected path
import ContactButton from '../components/ContactButton';


export default function HomePage() {
  return (
    <div className={styles.page}>
      <div className={styles.topfold}>
        <h1 className={styles.topfoldTitle}>Funky Fruits</h1>
        <a className={styles.logo}>
          <img id={styles.logoIcon} src='/img/fruitbowl-icon.png'/>
        </a>
        <a href="#" className={styles.redirect}>Shop</a>
      </div>

      <div className={styles.featureContainer}>
        <Featured />
      </div>
      <AboutUs />
      
      <div className={styles.contactSection}>
        <p id={styles.title}>Learn More</p>
        <div id={styles.buttonContainer}>
          <ContactButton buttonText="Reach Out" imgURL="/img/marky_edited.png" />
          <ContactButton buttonText="FAQ" imgURL="/img/faq-bulb-edited.png" />
        </div>
      </div>
      <div className={styles.partition} id={styles.final}></div>


    </div>
  );
}