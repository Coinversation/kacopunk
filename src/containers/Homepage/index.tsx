import React, { useState } from 'react';
import logo from 'components/Header/logo.svg';
import Banner from 'components/Homepage/Banner';
import SayHello from 'components/Homepage/SayHello';
import ColorfulWorld from 'components/Homepage/ColorfulWorld';
import Roadmap from 'components/Homepage/Roadmap';
import Faq from 'components/Homepage/Faq';

const Homepage = (): JSX.Element => {
  const [photos] = useState([
    { id: 1, url: logo },
    { id: 2, url: logo },
    { id: 3, url: logo },
    { id: 4, url: logo },
    { id: 5, url: logo },
    { id: 6, url: logo },
    { id: 7, url: logo },
    { id: 8, url: logo },
    { id: 9, url: logo },
    { id: 10, url: logo },
    { id: 11, url: logo },
    { id: 12, url: logo },
  ]);

  return (
    <>
      <Banner photos={photos} />
      <SayHello />
      <ColorfulWorld />
      <Roadmap />
      <Faq />
    </>
  );
};

export default Homepage;
