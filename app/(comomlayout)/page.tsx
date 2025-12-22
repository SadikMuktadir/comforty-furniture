import Banner from '@/components/home/Banner';
import BottomBanner from '@/components/home/BottomBanner';
import ClientReview from '@/components/home/ClientReview';
import FeatureProducts from '@/components/home/FeatureProducts';
import MaqueeCom from '@/components/home/MaqueeCom';
import RecentlyAdded from '@/components/home/RecentlyAdded';

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div className='-mt-[100px] flex justify-center'>
        <BottomBanner></BottomBanner>
      </div>
      <div className='my-[50px]'>
        <MaqueeCom></MaqueeCom>
      </div>
      <div className='m-[50px]'>
        <FeatureProducts></FeatureProducts>
      </div>
      <div className='m-[50px]'>
        <RecentlyAdded></RecentlyAdded>
      </div>
      <div>
        <ClientReview></ClientReview>
      </div>
    </div>
  );
};

export default Home;
