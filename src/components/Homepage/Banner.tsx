import styled from 'styled-components';

import Button from 'components/Button';
import Container from 'components/Container';
import AnimateRandomPhoto from './AnimateRandomPhoto';

const BannerWarp = styled.div`
  padding: 100px 0;
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

const Banner = ({ photos }): JSX.Element => (
  <BannerWarp className="font-gotham">
    <Container className="flex items-center justify-between">
      <div>
        <h1 className="text-6xl mb-6 caption">
          Have you ever
          <br />
          Heard of
        </h1>
        <p className="text-sm text-secondaryTextColor leading-loose">
          2021, the first tarsiers were created to simply create some fun in the
          <br />
          drab world of defi. Of course, following the logic of evolution, they
          <br />
          may be endowed with special functions in the future
        </p>
        <div className="space-x-4 mt-10">
          <Button>Mint &gt;&gt;</Button>
          <Button type="outline">View More &gt;&gt;</Button>
        </div>
      </div>
      <div>
        <AnimateRandomPhoto photos={photos} />
      </div>
    </Container>
  </BannerWarp>
);

export default Banner;
