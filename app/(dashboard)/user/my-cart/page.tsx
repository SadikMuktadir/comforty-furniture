/* eslint-disable @next/next/no-img-element */
'use client';

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

const MyCart = () => {
  const products = useAppSelector(orderedProducts);

  return (
    <div className="w-full overflow-x-auto px-2 sm:px-0">
      <Table className="min-w-[700px]">
        <TableCaption>My Cart Products</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {products.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                {item?.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-10 w-10 sm:h-12 sm:w-12 rounded-md object-cover"
                  />
                ) : (
                  'N/A'
                )}
              </TableCell>

              <TableCell className="font-medium">
                {item?.name}
              </TableCell>

              <TableCell className="max-w-[260px] truncate text-sm text-gray-600">
                {item?.description}
              </TableCell>

              <TableCell className="text-right font-semibold">
                ${item?.price}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MyCart;
