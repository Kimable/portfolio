import styles from "./styles/Home.module.css";

export default function Home() {
  return (
    <>
      <main className="section">
        <div className={`container ${styles.hero}`}>
          <div className={styles.left}>
            <h1 className={styles.title}>Hi, I'm Kelvin</h1>
            <p className={styles.subtitle}>I am a software developer.</p>
            <p>Let's Talk: kelvin@kkimani.com</p>
          </div>
          <div className={styles.right}>
            <img
              className={styles.img}
              src="./kelvin's-passport.jpg"
              alt="Kelvin Kimani"
            />
          </div>
        </div>
      </main>
    </>
  );
}
