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
    <div>
      <Table>
        <TableCaption>All registered users</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className='text-right'>Price</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {products.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                {item?.image ? (
                  <img
                    src={item?.image}
                    alt={item?.name}
                    className='h-10 w-10 rounded-full object-cover'
                  />
                ) : (
                  'N/A'
                )}
              </TableCell>
              <TableCell>{item?.name}</TableCell>
              <TableCell>{item?.description}</TableCell>
              <TableCell className='text-right'>{item?.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MyCart;
