import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { useState } from 'react';

const ImageUploder = () => {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    setImageFiles((prev) => [...prev, file]);

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreview((prev) => [...prev, reader.result as string]);
      };

      reader.readAsDataURL(file);
    }
    event.target.value = '';
  };

  console.log(imageFiles);
  return (
    <div>
      <Input
        onChange={handleImageChange}
        type='file'
        multiple
        accept='image/*'
        id='image-upload'
        hidden
      />
      <Button>
        <Label htmlFor='image-upload'>Upload Image</Label>
      </Button>
      <div>
        {imagePreview.map((preview, id) => (
          <Image key={id} src={preview} width={100} height={100} alt='images' />
        ))}
      </div>
    </div>
  );
};

export default ImageUploder;
