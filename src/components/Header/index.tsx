import styled from 'styled-components';

import logo from './logo.svg';
import discord from './discord.svg';
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

const Header = ({ account, logout }) => {
  return (
    <HeaderWarp className="border-b border-borderColor">
      <Container className="content flex items-center justify-between">
        <img src={logo} alt="logo" className="w-40" />
        <div className="items-center space-x-6 hidden sm:flex">
          <div className="flex items-center space-x-4">
            <a href="https://discord.gg/YUTe8uCYft" target="_blank" rel="noreferrer">
              <img src={discord} alt="discord" />
            </a>
            <a href="https://twitter.com/KacOFinance" target="_blank" rel="noreferrer">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="https://t.me/coinversationofficial" target="_blank" rel="noreferrer">
              <img src={feishu} alt="feishu" />
            </a>
            <a href="https://github.com/Coinversation" target="_blank" rel="noreferrer">
              <img src={github} alt="github" />
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <a href="https://www.kaco.finance/" target="_blank" rel="noreferrer">
              <Button type="secondary">To DApp</Button>
            </a>
            {account ? (
              <div
                className="flex items-center bg-primary text-white h-12 rounded-xl px-6 cursor-pointer"
                onClick={logout}
              >
                <span className="inline-block w-40 overflow-hidden overflow-ellipsis">{account}</span>
              </div>
            ) : (
              <ConnectWalletButton />
            )}
          </div>
        </div>
      </Container>
    </HeaderWarp>
  );
};

export default Header;
