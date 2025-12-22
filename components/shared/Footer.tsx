import Image from 'next/image';
import logoImg from '../../public/image/comforty-logo.png';
import { Input } from '../ui/input';

const Footer = () => {
  return (
    <div>
      <footer className='px-[50px] w-full text-sm text-slate-500 bg-white pt-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14'>
          <div className='sm:col-span-2 lg:col-span-1'>
            <Image src={logoImg} alt='logoImg' height={150} width={170}></Image>
            <p className='text-sm/7 mt-6'>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sit amet mi nec massa tincidunt blandit et eu sem.
            </p>
          </div>
          <div className='flex flex-col lg:items-center lg:justify-center'>
            <div className='flex flex-col text-sm space-y-2.5'>
              <h2 className='font-semibold mb-5 text-gray-800'>Company</h2>
              <a className='hover:text-slate-600 transition' href='#'>
                About us
              </a>
              <a className='hover:text-slate-600 transition' href='#'>
                Careers
                <span className='text-xs text-white bg-[#029fae] rounded-md ml-2 px-2 py-1'>
                  We’re hiring!
                </span>
              </a>
              <a className='hover:text-slate-600 transition' href='#'>
                Contact us
              </a>
              <a className='hover:text-slate-600 transition' href='#'>
                Privacy policy
              </a>
            </div>
          </div>
          <div>
            <h2 className='font-semibold text-gray-800 mb-5'>
              Subscribe to our newsletter
            </h2>
            <div className='text-sm space-y-6 max-w-sm'>
              <p>
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
              <div className='flex items-center justify-center gap-2 p-2 rounded-md'>
                <Input type='email' placeholder='Enter your email' />
                <button className='bg-[#029fae] px-4 py-2 text-white rounded cursor-pointer'>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className='py-4 text-center border-t mt-6 border-slate-200'>
          Copyright 2025 ©
          <span className='text-[#029fae]'>Web Tech Wizard</span> All Right
          Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
