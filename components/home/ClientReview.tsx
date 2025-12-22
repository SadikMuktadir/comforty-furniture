import { Avatar, AvatarImage } from '../ui/avatar';
import reviewImg1 from '../../public/image/reviewImg1.png';
import reviewImg2 from '../../public/image/reviewImg2.png';

const ClientReview = () => {
  return (
    <div className='bg-[#f0f2f3] px-[200px] py-[80px]'>
      <div className='mb-20'>
        <p className='text-[#272343] text-[35px] font-bold'>
          What Client Says About Us
        </p>
      </div>
      <div className='flex gap-20'>
        <div className='bg-[#ffffff] p-10 shadow-lg rounded-lg'>
          <div>
            <p className='text-[20px] text-[#636270]'>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sit amet mi nec massa tincidunt blandit et eu sem. Maecenas
              laoreet ultrices diam dignissim posuere. Aenean ultrices dui at
              ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex.
              Aenean dolor massa, euismod sit amet suscipit et“
            </p>
          </div>
          <div className='flex mt-10'>
            <div className='mr-5'>
              <Avatar>
                <AvatarImage src={reviewImg1.src} alt='' />
              </Avatar>
            </div>
            <div>
              <div>
                <p className='text-[#272343]'>Kristin Watson</p>
              </div>
              <div>
                <p className='text-[#9a9caa]'>Fashion Designer</p>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#ffffff] p-10 shadow-lg rounded-lg'>
          <div>
            <p className='text-[20px] text-[#636270]'>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sit amet mi nec massa tincidunt blandit et eu sem. Maecenas
              laoreet ultrices diam dignissim posuere. Aenean ultrices dui at
              ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex.
              Aenean dolor massa, euismod sit amet suscipit et“
            </p>
          </div>
          <div className='flex mt-10'>
            <div className='mr-5'>
              <Avatar>
                <AvatarImage src={reviewImg2.src} alt='' />
              </Avatar>
            </div>
            <div>
              <div>
                <p className='text-[#272343]'>Esther Howard</p>
              </div>
              <div>
                <p className='text-[#9a9caa]'>Fashion Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
