import { Link } from "react-router-dom";
import styles from "./home.module.css";

const HomePage = () => {
  return (
    <div className={styles.homeMianDiv}>
      <div className={styles.rootDivOfPodBook}>
        <div className={styles.PodBookInHomePage}>
          <div alt="books" className={styles.img1} />
          <Link to="/all-books">
            <button>View all books</button>
          </Link>
        </div>
        <div className={styles.PodBookInHomePage}>
          <div alt="podcasts" className={styles.img2} />
          <button>View all books</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
