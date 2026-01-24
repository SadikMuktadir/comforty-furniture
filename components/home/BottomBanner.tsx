import Image from 'next/image';
import boxImg from '../../public/image/box.png';
import truckImg from '../../public/image/delivery-truck.png';
import twentyFourImg from '../../public/image/24-hours.png';
import secureImg from '../../public/image/shield.png';

const BottomBanner = () => {
  return (
    <div
      className='bg-white shadow-xl 
                    mx-auto mt-10
                    px-6 py-10 
                    sm:px-10 md:px-14
                    max-w-7xl rounded-xl'
    >
      <div
        className='grid grid-cols-1 
                      sm:grid-cols-2 
                      lg:grid-cols-4 
                      gap-8'
      >
        {/* Item */}
        <div className='flex items-center gap-5 justify-center sm:justify-start'>
          <Image src={boxImg} alt='Fast delivery' className='w-12 h-12' />
          <div>
            <p className='text-[#272343] font-medium'>Fast Delivery</p>
            <p className='text-[#9a9caa] text-sm'>We care your experiences</p>
          </div>
        </div>

        {/* Item */}
        <div className='flex items-center gap-5 justify-center sm:justify-start'>
          <Image src={truckImg} alt='Free shipping' className='w-12 h-12' />
          <div>
            <p className='text-[#272343] font-medium'>Free Shipping</p>
            <p className='text-[#9a9caa] text-sm'>On all orders</p>
          </div>
        </div>

        {/* Item */}
        <div className='flex items-center gap-5 justify-center sm:justify-start'>
          <Image src={twentyFourImg} alt='24/7 Support' className='w-12 h-12' />
          <div>
            <p className='text-[#272343] font-medium'>24/7 Support</p>
            <p className='text-[#9a9caa] text-sm'>We care your experiences</p>
          </div>
        </div>

        {/* Item */}
        <div className='flex items-center gap-5 justify-center sm:justify-start'>
          <Image src={secureImg} alt='Secure payment' className='w-12 h-12' />
          <div>
            <p className='text-[#272343] font-medium'>Secure Payment</p>
            <p className='text-[#9a9caa] text-sm'>100% Protected</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
