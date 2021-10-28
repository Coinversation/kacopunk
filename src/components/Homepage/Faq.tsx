import React from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import faq_costar from './assets/faq_costar.png';

const faqContents = [
  {
    title: 'What’s an NFT?',
    sections: [
      [
        'n NFT stands for “Non-fungible token” and is a fancy way of saying it’s a unique, one of a kind digital item that users can buy, own,',
        'and trade. Some NFTs main function are to be digital art and look cool, some offer additional utility like exclusive access to websites',
        'or participation in an event, think of it like a rare piece of art that can also act as a “members” card.',
      ],
      [
        'What is Metamask? Metamask is a crypto wallet that can store your Ethereum, and is needed to purchase and mint a Cool Cat.',
        'Having a wallet gives you an Ethereum address (i.e. 0xABCD….1234), this is where your NFT will be stored. Learn more about',
        'Metamask and how easy it is to use over here! (https://metamask.io/)',
      ],
    ],
  },
  {
    title: 'Where does my NFT go after I purchase a Kaco Monkey?',
    sections: [
      [
        'Your Cool Cat NFT will appear in whatever address, or connected wallet you used to purchase the Cool Cat. You can see your Cool',
        'Cat here from our website, by clicking My Cats, or view them on Opensea. (Link to Opensea)',
      ],
    ],
  },
  {
    title: 'What is the cost to mint?',
    sections: [
      [
        'The price per Sacred Sapling is 0.12 ETH. This ensures a solid runway for expanding our team and building an incredible universe',
        'around The Evolving Forest.',
      ],
    ],
  },
  {
    title: 'What is The Evolving Forest game?',
    sections: [
      [
        'It is a Play to Earn game where you will be able to take your Genesis saplings to breed and fruit them. Fruiting will produce new',
        'elements that you can craft to create other in-game items. The utility token of the game - PSCI or Pscillion - will also be something',
        'you can obtain via fruiting.',
      ],
    ],
  },
];

const FaqWarp = styled.div`
  padding: 190px 0 170px 0;
  position: relative;
  .costar {
    width: 600px;
    position: absolute;
    right: 48px;
    top: -160px;
  }
  .caption {
    background: linear-gradient(
      0deg,
      #f59fee 0%,
      #b8c1c0 25%,
      #65c0e0 50%,
      #f59fee 75%,
      #81c1d9 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Faq = () => (
  <FaqWarp className="font-gotham">
    <Container>
      <h1 className="text-6xl mb-24 caption">FAQ</h1>
      {faqContents.map((content, i) => (
        <article className="mb-10" key={i}>
          <h3 className="text-3xl text-textColor mb-4">{content.title}</h3>
          {content.sections.map((section, j) => (
            <section
              className="text-secondaryTextColor text-sm leading-loose mb-6"
              key={`${i}_${j}`}
            >
              {section.map((text, k) => (
                <React.Fragment key={`${i}_${j}_${k}`}>
                  {text}
                  {k < section.length - 1 && <br />}
                </React.Fragment>
              ))}
            </section>
          ))}
        </article>
      ))}
    </Container>
    <img className="costar" src={faq_costar} alt="img" />
  </FaqWarp>
);

export default Faq;
