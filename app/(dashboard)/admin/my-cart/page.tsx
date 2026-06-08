'use client';

/* eslint-disable @next/next/no-img-element */

import { orderedProducts } from '@/redux/features/cartSlice';
import { useAppSelector } from '@/redux/hook';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Button } from '@/components/ui/button';
import { Trash2, ShoppingBag } from 'lucide-react';

const MyCart = () => {
  const products = useAppSelector(orderedProducts);

  if (!products.length) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <ShoppingBag className="h-12 w-12 text-[#029fae]" />
        <h2 className="mt-4 text-xl font-semibold">
          Your cart is empty
        </h2>
        <p className="text-muted-foreground">
          Add some beautiful furniture to continue shopping
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#272343]">
          My Cart
        </h1>
        <p className="text-muted-foreground">
          Review your selected furniture items
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border bg-white/60 backdrop-blur-xl shadow-lg">

        <Table className="min-w-[650px]">

          <TableCaption className="py-4">
            Shopping Cart Summary
          </TableCaption>

          <TableHeader>
            <TableRow className="bg-muted/40">
              <TableHead>Product</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {products.map((item, index) => (
              <TableRow
                key={index}
                className="hover:bg-muted/30 transition"
              >

                {/* Image */}
                <TableCell>
                  <img
                    src={item?.image}
                    alt={item?.name}
                    className="
                      h-12 w-12 sm:h-14 sm:w-14
                      rounded-xl object-cover
                      ring-2 ring-[#029fae]/20
                    "
                  />
                </TableCell>

                {/* Name */}
                <TableCell className="font-medium">
                  {item?.name}
                </TableCell>

                {/* Description */}
                <TableCell className="max-w-[220px] truncate text-sm text-muted-foreground">
                  {item?.description}
                </TableCell>

                {/* Price */}
                <TableCell className="text-right font-semibold text-[#272343]">
                  ${item?.price}
                </TableCell>

                {/* Action */}
                <TableCell className="text-right">
                  <Button
                    size="icon"
                    variant="destructive"
                    className="rounded-xl"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>

        </Table>
      </div>
    </div>
  );
};

export default MyCart;