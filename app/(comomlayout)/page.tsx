import Banner from '@/components/home/Banner';
import BottomBanner from '@/components/home/BottomBanner';

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div className='-mt-[100px] flex justify-center'>
        <BottomBanner></BottomBanner>
      </div>
    </div>
  );
};

export default Home;
