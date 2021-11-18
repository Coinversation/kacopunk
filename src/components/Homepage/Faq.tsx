import React from 'react';
import styled from 'styled-components';

import Container from 'components/Container';
import faq_costar from './assets/faq_costar.png';

const faqContents = [
  {
    title: 'How can I participate?',
    sections: [
      'You can visit our website and mint by yourself. In addition, you can go to Telegram, join the conversation and let us know what you think!',
    ],
  },
  {
    title: 'Will there have rare Tarsiers?',
    sections: ['Yes! There will be 2 rare Tarsier in total. Moreover, all NFTs will be randomly forged.'],
  },
  {
    title: 'Where can I trade Tarsier after casting?',
    sections: [
      'You can choose to trade Tarsier on Kaco NFT Market, Treasureland or any platform that supports BEP-721. At the same time, the Kaco NFT trading market will establish a new KNFT and KAC trading pool for Tarsier, which is different from the kkac&kac pool.',
    ],
  },
];

const FaqWarp = styled.div`
  padding: 100px 0 170px 0;
  position: relative;
  .costar {
    width: 480px;
    position: absolute;
    right: 48px;
    top: -160px;
  }
  .caption {
    background: linear-gradient(90deg, #f59fee 0%, #b8c1c0 25%, #65c0e0 50%, #f59fee 75%, #81c1d9 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .leftQ {
    min-width: 360px;
  }
`;

const Faq = () => (
  <FaqWarp className="font-gotham bg-bgColor">
    <Container>
      <h1 className="text-5xl mb-10 md:mb-20 text-center md:text-left">
        <span className="caption">FAQ</span>
      </h1>
      <div className="flex space-x-0 md:space-x-8 mb-10 md:mb-20 relative flex-col md:flex-row">
        <div className="border-primary border-l-4 border-b-4 rounded-xl leftQ p-10 bg-white">
          <h3 className="text-primary text-2xl relative z-10 mb-4">How much is the minting?</h3>
          <p className="text-secondaryTextColor relative text-sm z-10">Stay tuned</p>
        </div>
        <div className="border-primary border-l-4 border-b-4 rounded-xl p-10 bg-white mt-4 md:mt-0">
          <h3 className="text-primary text-2xl relative z-10 mb-4">Tokenomics:</h3>
          <p className="text-secondaryTextColor relative text-sm z-10">
            5% minting fee will be used to buy back the NFT on the market.
          </p>
        </div>
      </div>
      {faqContents.map((content, i) => (
        <article className="mb-14 text-center md:text-left" key={i}>
          <h3 className="text-3xl text-textColor mb-4">{content.title}</h3>
          {content.sections.map((section, j) => (
            <section className="text-secondaryTextColor text-sm leading-loose mb-6 w-full md:w-5/6" key={`${i}_${j}`}>
              {section}
            </section>
          ))}
        </article>
      ))}
    </Container>
    <img className="hidden md:inline-block animate-spin-slow costar" src={faq_costar} alt="img" />
  </FaqWarp>
);

export default Faq;
