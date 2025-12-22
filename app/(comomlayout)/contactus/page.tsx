'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const ContactUs = () => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
        <h2 className='mb-4 text-4xl font-bold text-center'>Contact Us</h2>

        <p className='mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>

        <form className='space-y-8'>
          <div>
            <Label className='mb-2'>Your email</Label>
            <Input type='email' placeholder='Type Your Email' required />
          </div>

          <div>
            <Label className='mb-2'>Your Name</Label>
            <Input type='text' placeholder='Type Your Name' required />
          </div>
          <div>
            <Label className='mb-2'>Your message</Label>
            <Textarea placeholder='Leave a comment...' />
          </div>

          <Button className='bg-[#029fae] cursor-pointer'>Send message</Button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
