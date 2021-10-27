import { Button } from '@kaco/uikit';
import styles from './index.module.css';
import logo from 'assets/images/logo.svg';
import github from 'assets/images/github.svg';
import twitter from 'assets/images/twitter.svg';
import feishu from 'assets/images/feishu.svg';
import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container className={styles.header}>
        <img src={logo} alt="logo" className="logo" />
        <div className="flex items-center">
          <img src={twitter} alt="" />
          <img src={feishu} alt="" />
          <img src={github} alt="" />
          <Button>To DApp</Button>
          <Button>Connect Wallet</Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
