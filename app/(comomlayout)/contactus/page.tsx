/* eslint-disable react/no-unescaped-entities */
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const ContactUs = () => {
  return (
    <section className='relative overflow-hidden py-24'>
      {/* Background Glow */}
      <div className='absolute inset-0 -z-10'>
        <div
          className='
            absolute top-0 left-0
            h-[350px] w-[350px]
            rounded-full
            bg-[#029fae]/10
            blur-[120px]
          '
        />

        <div
          className='
            absolute bottom-0 right-0
            h-[350px] w-[350px]
            rounded-full
            bg-[#029fae]/10
            blur-[120px]
          '
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <span
            className='
              inline-flex items-center
              rounded-full
              border border-[#029fae]/20
              bg-[#029fae]/10
              px-4 py-2
              text-sm text-[#029fae]
            '
          >
            Contact Comforty
          </span>

          <h1
            className='
              mt-5
              text-4xl sm:text-5xl
              font-bold
              text-foreground
            '
          >
            We'd Love to Hear From You
          </h1>

          <p
            className='
              mt-5
              max-w-2xl mx-auto
              text-muted-foreground
              leading-8
            '
          >
            Have questions about furniture, delivery, or custom orders? Our team
            is here to help you create your perfect living space.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-10 items-start'>
          {/* LEFT CONTACT INFO */}
          <div className='space-y-6'>
            {[
              {
                icon: Mail,
                title: 'Email Us',
                value: 'support@comforty.com',
              },
              {
                icon: Phone,
                title: 'Call Us',
                value: '+880 1234-567890',
              },
              {
                icon: MapPin,
                title: 'Visit Showroom',
                value: 'Dhaka, Bangladesh',
              },
              {
                icon: Clock,
                title: 'Working Hours',
                value: 'Mon - Sat, 9AM - 8PM',
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className='
                      flex items-start gap-5
                      rounded-[28px]
                      border border-white/10
                      bg-background/60
                      backdrop-blur-xl
                      p-6
                    '
                >
                  <div
                    className='
                        flex h-14 w-14
                        shrink-0
                        items-center justify-center
                        rounded-2xl
                        bg-[#029fae]/10
                        text-[#029fae]
                      '
                  >
                    <Icon className='h-6 w-6' />
                  </div>

                  <div>
                    <h3 className='font-semibold text-foreground'>
                      {item.title}
                    </h3>

                    <p className='mt-2 text-muted-foreground'>{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT FORM */}
          <div
            className='
              rounded-[36px]
              border border-white/10
              bg-background/70
              backdrop-blur-2xl
              p-8 lg:p-10
              shadow-2xl
            '
          >
            <h2 className='text-2xl font-bold text-foreground mb-2'>
              Send Message
            </h2>

            <p className='text-muted-foreground mb-8'>
              Fill out the form and our support team will contact you shortly.
            </p>

            <form className='space-y-6'>
              <div>
                <Label className='mb-2 block'>Your Name</Label>

                <Input
                  type='text'
                  placeholder='Enter your name'
                  required
                  className='
                    h-12
                    border-white/10
                    bg-white/[0.03]
                  '
                />
              </div>

              <div>
                <Label className='mb-2 block'>Email Address</Label>

                <Input
                  type='email'
                  placeholder='Enter your email'
                  required
                  className='
                    h-12
                    border-white/10
                    bg-white/[0.03]
                  '
                />
              </div>

              <div>
                <Label className='mb-2 block'>Your Message</Label>

                <Textarea
                  placeholder='Tell us how we can help...'
                  rows={6}
                  className='
                    border-white/10
                    bg-white/[0.03]
                    resize-none
                  '
                />
              </div>

              <Button
                className='
                  w-full
                  h-12
                  rounded-xl
                  bg-[#029fae]
                  hover:bg-[#028896]
                  shadow-lg
                  shadow-[#029fae]/30
                '
              >
                Send Message
                <Send className='ml-2 h-4 w-4' />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
