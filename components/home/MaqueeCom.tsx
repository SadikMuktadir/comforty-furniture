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
    <div>
      <Marquee speed={70}>
        <div className='flex items-center space-x-20'>
          {images.map((img, index) => (
            <div key={index}>
              <Image src={img} alt={`image-${index}`} width={120} height={80} />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default MaqueeCom;
