/* eslint-disable react/prop-types */
import styles from "./TopNav.module.css";

function TopNavigation() {

  return (
    <nav className={styles.topNav}>
      <div className={styles.logoDiv}>
        <div className={styles.logo}></div>
        <h5>
        Books & Podcasts
        </h5>
      </div>
      <form className={styles.form}>
        <input type="text" name="search" placeholder="Search for books" />
        {/* <button type="submit">Search</button> */}
      </form>
      <div className={styles.rightDiv}>
        <div className={styles.cart}></div>
        <ul>
          <li>Wish List |</li>
          <li>Log in |</li>
          <li>Sign Up</li>
        </ul>
      </div>
    </nav>
  );
}

export default TopNavigation;