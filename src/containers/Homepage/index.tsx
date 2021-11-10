import Banner from './Banner';
import Different from './Different';
import Tarsiers from 'components/Homepage/Tarsiers';
import Roadmap from 'components/Homepage/Roadmap';
import Faq from 'components/Homepage/Faq';
import { useAppSelector } from 'hooks';
import { selectNft, selectNftName, NFT } from 'containers/Homepage/slice';
import { head } from './assets';

const Homepage = (): JSX.Element => {
  const nft = useAppSelector(selectNft);
  const nftName = useAppSelector(selectNftName);

  const getPartByIndex = (type: NFT, index: number) => {
    return nft[type][index];
  };

  const getImageByIndex = ({ backgroundIndex, capIndex, glasseIndex, clotheIndex }) => {
    return {
      background: getPartByIndex(NFT.backgrounds, backgroundIndex),
      cap: getPartByIndex(NFT.caps, capIndex),
      head: head,
      glasse: getPartByIndex(NFT.glasses, glasseIndex),
      clothe: getPartByIndex(NFT.clothes, clotheIndex),
    };
  };

  return (
    <>
      <Banner nft={nft} getImageByIndex={getImageByIndex} />
      <Different nft={nft} getPartByIndex={getPartByIndex} getImageByIndex={getImageByIndex} />
      <Tarsiers nft={nft} nftName={nftName} />
      <Roadmap />
      <Faq />
    </>
  );
};

export default Homepage;
