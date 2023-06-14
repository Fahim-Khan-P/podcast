import { Link } from "react-router-dom";
import styles from "./home.module.css";
import BooksCategory from '../../components/BooksCategory';
import PodcastCategory from '../../components/PodcastsCategory';

const HomePage = () => {
  return (
    <div className={styles.homeMianDiv}>

      <div className={styles.homeMidDiv}>
        <div className={styles.homeMidLeftDiv}>
          <h1>Good books don't give up all their secrets at once</h1>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
          <button>Order Now</button>
        </div>

        <div className={styles.homeMidRightDiv}>
        </div>
      </div>

      <div className={styles.homeBottomDiv}>
        <div className={styles.homeBottomLeftDiv}>
          <h6 className={styles.h4Books}>Books Category</h6> 
          <BooksCategory />
        </div>
        <div className={styles.homeBottomRightDiv}> 
          <h6 className={styles.h4Podcasts}>Podcasts Category</h6>
          <PodcastCategory />
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;
