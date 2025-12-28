/* eslint-disable @next/next/no-img-element */
'use client';
import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getAllReview } from '@/services/review';

export interface IReview {
  _id: string;
  name: string;
  description: string;
  profession: string;
  image: string;
}

const AllReviews = () => {
  const [data, setData] = useState<IReview[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getAllReview();
      setData(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading ...</p>;
  if (data.length === 0) return <p>No Furniture found.</p>;
  return (
    <div>
      <Table>
        <TableCaption>All registered users</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Proffesion</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((item, index) => (
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
              <TableCell>{item?.profession}</TableCell>
              <TableCell>{item?.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllReviews;
