import React from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/qtify-icon.svg';
import { IoSearch } from 'react-icons/io5';
import Button from './Button';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="QTify Logo" className={styles.logo} />
      </div>
      <div className={styles.searchContainer}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search a song of your choice"
        />
         <button className={styles.searchButton}>
          <IoSearch className={styles.searchIcon} />
        </button>
      </div>
      <Button text='Give Feedback' />
    </div>
  );
};

export default Navbar;
