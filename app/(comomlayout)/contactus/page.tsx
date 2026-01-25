'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const ContactUs = () => {
  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <div className='py-12 sm:py-16 px-4 mx-auto max-w-xl'>
        {/* Heading */}
        <h2 className='mb-4 text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white'>
          Contact Us
        </h2>

        <p className='mb-10 text-center text-gray-500 dark:text-gray-400 text-sm sm:text-lg'>
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>

        {/* Form */}
        <form className='space-y-6 bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-sm'>
          <div>
            <Label className='mb-2 block'>Your Email</Label>
            <Input type='email' placeholder='Type your email' required />
          </div>

          <div>
            <Label className='mb-2 block'>Your Name</Label>
            <Input type='text' placeholder='Type your name' required />
          </div>

          <div>
            <Label className='mb-2 block'>Your Message</Label>
            <Textarea placeholder='Leave a comment...' rows={5} />
          </div>

          <Button className='bg-[#029fae] hover:bg-[#028896] w-full sm:w-auto'>
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
