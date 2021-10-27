import Container from 'components/Container';
import { Button } from '@kaco/uikit';
import styles from './banner.module.css';

const Banner = () => (
  <section>
    <Container className={styles.banner}>
      <div>
        <h1 className={styles.caption}>
          Have you ever
          <br />
          Heard of
        </h1>
        <p className={styles.introduce}>
          2021, the first tarsiers were created to simply create some fun in the
          <br />
          drab world of defi. Of course, following the logic of evolution, they
          <br />
          may be endowed with special functions in the future
        </p>
        <div className={styles.action}>
          <Button>Mint &gt;&gt;</Button>
          <Button>View More &gt;&gt;</Button>
        </div>
      </div>
      <div>
        <ul className={styles.chunk}>
          <li className={styles.piece}>1</li>
          <li className={styles.piece}>1</li>
          <li className={styles.piece}>1</li>
          <li className={styles.piece}>1</li>
          <li className={styles.piece}>1</li>
          <li className={styles.piece}>1</li>
          <li className={styles.piece}>1</li>
          <li className={styles.piece}>1</li>
          <li className={styles.piece}>1</li>
          <li className={styles.piece}>1</li>
          <li className={styles.piece}>1</li>
          <li className={styles.piece}>1</li>
          <li className={styles.piece}>1</li>
          <li className={styles.piece}>1</li>
          <li className={styles.piece}>1</li>
          <li className={styles.piece}>1</li>
        </ul>
      </div>
    </Container>
  </section>
);

export default Banner;
