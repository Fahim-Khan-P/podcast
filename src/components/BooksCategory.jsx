import styles from './Category.module.css'

function BooksCategory() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.card}>
        <div className={styles.img}></div>
        <h6>Photography</h6>
      </div>
      <div className={styles.card}>
        <div className={styles.img}></div>
        <h6>Childreens</h6>
      </div>
      <div className={styles.card}>
        <div className={styles.img}></div>
        <h6>Hobbies</h6>
      </div>
    </div>
  )
}

export default BooksCategory