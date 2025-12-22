import Image from 'next/image';
import boxImg from '../../public/image/box.png';
import truckImg from '../../public/image/delivery-truck.png';
import twentyFourImg from '../../public/image/24-hours.png';
import secureImg from '../../public/image/shield.png';

const BottomBanner = () => {
  return (
    <div className='w-[80%] px-[70px] py-[50px] bg-[#ffffff] shadow-xl flex justify-center gap-10'>
      <div className='flex'>
        <div className='mr-8'>
          <Image src={boxImg} alt='twentyFourImg'></Image>
        </div>
        <div>
          <div>
            <p className='text-[#272343]'>Great Support 24/7</p>
          </div>
          <div>
            <p className='text-[#9a9caa]'>We care your experiences</p>
          </div>
        </div>
      </div>
      <div className='flex'>
        <div className='mr-8'>
          <Image src={truckImg} alt='twentyFourImg'></Image>
        </div>
        <div>
          <div>
            <p className='text-[#272343]'>Great Support 24/7</p>
          </div>
          <div>
            <p className='text-[#9a9caa]'>We care your experiences</p>
          </div>
        </div>
      </div>
      <div className='flex'>
        <div className='mr-8'>
          <Image src={twentyFourImg} alt='twentyFourImg'></Image>
        </div>
        <div>
          <div>
            <p className='text-[#272343]'>Great Support 24/7</p>
          </div>
          <div>
            <p className='text-[#9a9caa]'>We care your experiences</p>
          </div>
        </div>
      </div>
      <div className='flex'>
        <div className='mr-8'>
          <Image src={secureImg} alt='twentyFourImg'></Image>
        </div>
        <div>
          <div>
            <p className='text-[#272343]'>Great Support 24/7</p>
          </div>
          <div>
            <p className='text-[#9a9caa]'>We care your experiences</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
