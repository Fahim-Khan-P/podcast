import styles from './Category.module.css'
import sound from '../assets/audio.mp3'

function BooksCategory() {
  const handleMouseOver = () => {
    const audio = new Audio(sound);
    audio.play();
  };


  return (
    <div className={styles.mainDiv}>
      <div className={styles.card} onMouseOver={handleMouseOver}>
        <div className={styles.img}></div>
        <h6>Photography</h6>
      </div>
      <div className={styles.card} onMouseOver={handleMouseOver}>
        <div className={styles.img}></div>
        <h6>Childreens</h6>
      </div>
      <div className={styles.card} onMouseOver={handleMouseOver}>
        <div className={styles.img}></div>
        <h6>Hobbies</h6>
      </div>
    </div>
  )
}

export default BooksCategory