import React from 'react';
import discord from '../Header/discord.svg';
import twitter from '../Header/twitter.svg';
import feishu from '../Header/feishu.svg';
import github from '../Header/github.svg';
import medium from '../Header/medium.svg';
import styled from 'styled-components';

const FooterWarp = styled.footer`
  padding: 80px 0;
`;

const Footer = () => (
  <FooterWarp>
    <div className="space-x-8 flex items-center justify-center">
      <a href="https://discord.gg/YUTe8uCYft" target="_blank" rel="noreferrer">
        <img className="w-8" src={discord} alt="discord" />
      </a>
      <a href="https://twitter.com/KacOFinance" target="_blank" rel="noreferrer">
        <img className="w-8" src={twitter} alt="twitter" />
      </a>
      <a href="https://t.me/coinversationofficial" target="_blank" rel="noreferrer">
        <img className="w-8" src={feishu} alt="feishu" />
      </a>
      <a href="https://github.com/Coinversation" target="_blank" rel="noreferrer">
        <img className="w-8" src={github} alt="github" />
      </a>
      <a href="https://coinversationofficial.medium.com/" target="_blank" rel="noreferrer">
        <img className="w-8" src={medium} alt="medium" />
      </a>
    </div>
    <p className="mt-6 text-secondaryTextColor text-sm text-center font-gotham">Smart Contract</p>
  </FooterWarp>
);

export default Footer;
