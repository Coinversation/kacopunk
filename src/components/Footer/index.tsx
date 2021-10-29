import React from 'react';
import fecebook from './facebook_dark.png';
import feishu from './feishu_dark.png';
import twitter from './twitter_dark.png';
import styled from 'styled-components';

const FooterWarp = styled.footer`
  padding: 80px 0;
  img {
    background: black;
    padding: 10px;
    border-radius: 12px;
  }
`;

const Footer = () => (
  <FooterWarp>
    <div className="space-x-8 flex items-center justify-center">
      <img src={twitter} alt="" />
      <img src={feishu} alt="" />
      <img src={fecebook} alt="" />
    </div>
    <p className="mt-4 text-secondaryTextColor text-sm text-center font-gotham">Smart Contract</p>
  </FooterWarp>
);

export default Footer;
