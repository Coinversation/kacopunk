import React from 'react';

interface HomepageProps {
  count: number;
}

const Homepage = ({ count }: HomepageProps): JSX.Element => <div>{count}</div>;

export default Homepage;
