import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from './logo.svg';
import github from './github.svg';
import twitter from './twitter.svg';
import feishu from './feishu.svg';
import Container from 'components/Container';
import Button from '../Button';
import ConnectWalletButton from 'components/Button/ConnectWalletButton';

const HeaderWarp = styled.header`
  .content {
    height: 80px;
  }
`;

const Header = () => {
  return (
    <HeaderWarp>
      <Container className="content flex items-center justify-between">
        <img src={logo} alt="logo" className="w-28" />
        <div className="items-center space-x-6 hidden sm:flex">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <img src={twitter} alt="" />
            </Link>
            <Link to="/">
              <img src={feishu} alt="" />
            </Link>
            <Link to="/">
              <img src={github} alt="" />
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            <Button type="secondary">To DApp</Button>
            <ConnectWalletButton />
          </div>
        </div>
      </Container>
    </HeaderWarp>
  );
};

export default Header;
