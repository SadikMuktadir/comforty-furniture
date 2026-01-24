import { Button } from '../ui/button';
import bannerimg from '../../public/image/banner-image.png';
import bannerCirlce from '../../public/image/banner-circle.png';
import Image from 'next/image';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className='bg-[#f0f2f3] px-6 py-16 md:px-16 lg:px-28'>
      <div className='flex flex-col-reverse lg:flex-row items-center justify-between gap-12'>
        {/* Text Section */}
        <div className='w-full lg:w-1/2 text-center lg:text-left'>
          <p className='text-sm text-[#272343] mb-3'>WELCOME TO CHAIRY</p>

          <h1
            className='text-3xl sm:text-4xl md:text-5xl xl:text-6xl
                         font-bold text-[#272343] mb-8 leading-tight'
          >
            Best Furniture Collection For Your Interior.
          </h1>

          <Link href='/product'>
            <Button className='bg-[#029fae] hover:bg-[#028896] px-6 py-5'>
              Shop Now
              <MoveRight className='ml-2' />
            </Button>
          </Link>
        </div>

        {/* Image Section */}
        <div className='relative w-[260px] sm:w-[320px] md:w-[400px] lg:w-[475px] h-[360px] sm:h-[420px] md:h-[520px]'>
          {/* Circle Background */}
          <div
            className='absolute -top-10 left-1/2 -translate-x-1/2 
                          w-[300px] sm:w-[380px] md:w-[450px] 
                          h-[300px] sm:h-[380px] md:h-[450px] z-0'
          >
            <Image
              src={bannerCirlce}
              alt='banner circle'
              className='object-contain'
              fill
            />
          </div>

          {/* Main Image */}
          <Image
            src={bannerimg}
            alt='banner'
            fill
            className='object-contain z-10'
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
