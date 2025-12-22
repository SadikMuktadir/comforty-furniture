import { Button } from '../ui/button';
import bannerimg from '../../public/image/banner-image.png';
import bannerCirlce from '../../public/image/banner-circle.png';
import Image from 'next/image';
import { MoveRight } from 'lucide-react';

const Banner = () => {
  return (
    <div className='flex justify-between bg-[#f0f2f3] p-[100px]'>
      <div className='w-[50%] my-auto'>
        <div>
          <p className='text-[14px] text-[#272343]'>WELCOME TO CHAIRY</p>
        </div>
        <div className='mb-[30px]'>
          <p className='text-[60px] text-[#272343] font-bold'>
            Best Furniture Collection for your interior.
          </p>
        </div>
        <div>
          <Button className='bg-[#029fae]'>
            Shop Now
            <span className='ml-1'>
              <MoveRight />
            </span>
          </Button>
        </div>
      </div>
      <div className='relative w-[475px] h-[600px]'>
        <div className='absolute -top-20 left-1/2 transform -translate-x-1/2 z-0 w-[500px] h-[500px] '>
          <Image
            src={bannerCirlce}
            alt='banner circle'
            className='object-contain w-full h-full'
          />
        </div>

        <Image
          src={bannerimg}
          alt='banner'
          fill
          className='object-contain z-10'
        />
      </div>
    </div>
  );
};

export default Banner;
