import Banner from './Banner';
import Different from './Different';
import Karsiers from 'components/Homepage/Karsiers';
import Roadmap from 'components/Homepage/Roadmap';
import Faq from 'components/Homepage/Faq';
import { useAppSelector } from 'hooks';
import { selectNft, selectNftName, selectNftRarity, NFT } from 'containers/Homepage/slice';
import { head } from './assets';

const Homepage = (): JSX.Element => {
  const nft = useAppSelector(selectNft);
  const nftName = useAppSelector(selectNftName);
  const nftRarity = useAppSelector(selectNftRarity);

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
      <Karsiers nft={nft} nftName={nftName} nftRarity={nftRarity} />
      <Roadmap />
      <Faq />
    </>
  );
};

export default Homepage;
