import Banner from '@/components/home/Banner';
import BottomBanner from '@/components/home/BottomBanner';
import MaqueeCom from '@/components/home/MaqueeCom';

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
    </div>
  );
};

export default Home;
