import { Link } from "react-router-dom";
import styles from "./home.module.css"

const HomePage = () => {
  return (
    <div className = {styles.homeMianDiv}>
      <h1>Welcome to My Podcast and Book App!</h1>
      <h2>Featured Books</h2>
      <div className={styles.rootDivOfPodBook}>
        <Link to="/all-books">
          <div className={styles.PodBookInHomePage}>
            List All Books
          </div>
        </Link>
        <div className={styles.PodBookInHomePage}>
          List All Podcasts
        </div>
      </div>
    </div>
  );
};

export default HomePage;