import React, { useState } from 'react';

import Banner from 'components/Homepage/Banner';
import SayHello from 'components/Homepage/SayHello';
import ColorfulWorld from 'components/Homepage/ColorfulWorld';
import Roadmap from 'components/Homepage/Roadmap';
import Faq from 'components/Homepage/Faq';
import logo from 'components/Header/logo.svg';

const Homepage = (): JSX.Element => {
  const [photos] = useState([logo, logo, logo, logo, logo, logo, logo, logo, logo, logo, logo, logo]);

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
