import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import image1 from '../../public/image/image1.png';
import image2 from '../../public/image/image2.png';
import image3 from '../../public/image/image3.png';
import image4 from '../../public/image/image4.png';
import image5 from '../../public/image/image5.png';
import image6 from '../../public/image/image6.png';
import image7 from '../../public/image/image7.png';

const images = [image1, image2, image3, image4, image5, image6, image7];

const MaqueeCom = () => {
  return (
    <div className='py-10 bg-white overflow-hidden'>
      <Marquee speed={50} pauseOnHover gradient={false}>
        <div className='flex items-center gap-10 sm:gap-16 md:gap-20 px-4'>
          {images.map((img, index) => (
            <div
              key={index}
              className='flex items-center justify-center min-w-[80px] sm:min-w-[120px]'
            >
              <Image
                src={img}
                alt={`brand-${index}`}
                className='object-contain 
                           w-[80px] sm:w-[100px] md:w-[120px]
                           h-auto'
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default MaqueeCom;
