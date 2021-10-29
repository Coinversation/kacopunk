import styled from 'styled-components';

import Button from 'components/Button';
import Container from 'components/Container';
import AnimateGroupImage from './AnimateGroupImage';

const BannerWarp = styled.div`
  padding: 100px 0;
  .caption {
    background: linear-gradient(90deg, #f59fee 0%, #b8c1c0 25%, #65c0e0 50%, #f59fee 75%, #81c1d9 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Banner = ({ nft }): JSX.Element => (
  <BannerWarp className="font-gotham">
    <Container className="flex items-center justify-between">
      <div>
        <h1 className="text-6xl mb-6">
          <span className="caption">
            What is
            <br /> Tarsier?
          </span>
        </h1>
        <p className="text-sm text-secondaryTextColor leading-loose">
          Tarsier is the smallest primate in the world. <br />
          Tarsier came to the blockchain world to create some fun for us. <br />
          Following the logic of evolution, the tarsier will be <br /> given some special functions in the future.
        </p>
        <div className="space-x-4 mt-10">
          <Button>Mint &gt;&gt;</Button>
          <Button type="outline">View More &gt;&gt;</Button>
        </div>
      </div>
      <div>
        <AnimateGroupImage nft={nft} />
      </div>
    </Container>
  </BannerWarp>
);

export default Banner;
