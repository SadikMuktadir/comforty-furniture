/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client';

import { orderedProducts } from '@/redux/features/cartSlice';

import { useAppSelector } from '@/redux/hook';

import { Button } from '@/components/ui/button';

import { ShoppingBag, ArrowRight, ShoppingCart } from 'lucide-react';

import Link from 'next/link';

const MyCart = () => {
  const products = useAppSelector(orderedProducts);

  const totalPrice = products.reduce((total, item) => total + item.price, 0);

  if (products.length === 0) {
    return (
      <section className='min-h-[70vh] flex items-center justify-center px-4'>
        <div className='text-center max-w-md'>
          <div
            className='
              mx-auto mb-6
              flex h-24 w-24
              items-center justify-center
              rounded-full
              bg-[#029fae]/10
            '
          >
            <ShoppingCart className='h-10 w-10 text-[#029fae]' />
          </div>

          <h1 className='text-3xl font-bold'>Your Cart is Empty</h1>

          <p className='mt-3 text-muted-foreground leading-7'>
            Looks like you haven't added any premium furniture yet.
          </p>

          <Link href='/product'>
            <Button
              className='
                mt-8
                bg-[#029fae]
                hover:bg-[#028896]
                h-12 px-8
              '
            >
              Shop Furniture
            </Button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className='relative overflow-hidden py-20'>
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
        <div className='mb-12'>
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
            <ShoppingBag className='mr-2 h-4 w-4' />
            Shopping Cart
          </span>

          <h1 className='mt-5 text-4xl font-bold'>My Cart</h1>

          <p className='mt-3 text-muted-foreground'>
            Review your selected premium furniture before checkout.
          </p>
        </div>

        <div className='grid lg:grid-cols-[1fr_380px] gap-10'>
          {/* Products */}
          <div className='space-y-6'>
            {products.map((item, index) => (
              <div
                key={index}
                className='
                    flex flex-col sm:flex-row
                    gap-5
                    rounded-[32px]
                    border border-white/10
                    bg-background/60
                    backdrop-blur-xl
                    p-5
                    transition-all duration-300
                    hover:shadow-xl
                  '
              >
                {/* Image */}
                <div
                  className='
                      overflow-hidden
                      rounded-3xl
                      sm:w-[180px]
                      h-[180px]
                      shrink-0
                    '
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className='
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        hover:scale-105
                      '
                  />
                </div>

                {/* Info */}
                <div className='flex flex-1 flex-col justify-between'>
                  <div>
                    <h2 className='text-2xl font-semibold'>{item.name}</h2>

                    <p
                      className='
                          mt-3
                          text-muted-foreground
                          line-clamp-3
                          leading-7
                        '
                    >
                      {item.description}
                    </p>
                  </div>

                  <div className='mt-5 flex items-center justify-between'>
                    <div>
                      <p className='text-sm text-muted-foreground'>Price</p>

                      <p
                        className='
                            text-2xl
                            font-bold
                            text-[#029fae]
                          '
                      >
                        ${item.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div
            className='
              sticky top-24
              rounded-[36px]
              border border-white/10
              bg-background/60
              backdrop-blur-xl
              p-8
              h-fit
            '
          >
            <h2 className='text-2xl font-bold'>Order Summary</h2>

            <div className='mt-8 space-y-5'>
              <div className='flex justify-between'>
                <span className='text-muted-foreground'>Products</span>

                <span>{products.length}</span>
              </div>

              <div className='flex justify-between'>
                <span className='text-muted-foreground'>Shipping</span>

                <span>Free</span>
              </div>

              <div className='border-t border-white/10 pt-5 flex justify-between'>
                <span className='text-lg font-semibold'>Total</span>

                <span
                  className='
                    text-2xl
                    font-bold
                    text-[#029fae]
                  '
                >
                  ${totalPrice}
                </span>
              </div>
            </div>

            <Button
              className='
                mt-8
                w-full
                h-12
                bg-[#029fae]
                hover:bg-[#028896]
              '
            >
              Checkout
              <ArrowRight className='ml-2 h-4 w-4' />
            </Button>

            <Link href='/product'>
              <Button
                variant='outline'
                className='
                  mt-4
                  w-full
                  h-12
                '
              >
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyCart;
