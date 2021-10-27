import React from 'react';
import Banner from './Banner';

interface HomepageProps {
  count: number;
}

const Homepage = ({ count }: HomepageProps): JSX.Element => (
  <>
    <Banner />
  </>
);

export default Homepage;
