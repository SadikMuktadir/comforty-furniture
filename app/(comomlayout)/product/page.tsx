/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from 'react';
import { getAllFurniture } from '@/services/product';
import { IFurniture } from '@/types/product';

const Furnitures = () => {
  const [furniture, setFurniture] = useState<IFurniture[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getAllFurniture();
      setFurniture(data); // data should be an array
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading furniture...</p>;
  if (furniture.length === 0) return <p>No furniture found.</p>;

  return (
    <div
      className='furniture-list'
      style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}
    >
      {furniture.map((item, index) => (
        <div key={index}>
          <div>
            <img src={item?.image} alt='image'></img>
          </div>
          <h2>{item?.name}</h2>
          <p>{item?.description}</p>
          <p>Price: ${item?.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Furnitures;
