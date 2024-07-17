import { Button } from '@/components/ui/button';
import React from 'react';
import { DATA_HEADING } from '../../types/constant';

export interface HeadingProps {
  onSetValueLabel: (value: string) => void;
}

const HeadingAboutProduct: React.FC<HeadingProps> = ({ onSetValueLabel }) => {
  return (
    <div className="hidden sm:flex gap-1 sm:gap-8">
      {DATA_HEADING?.map((data) => (
        <Button
          key={data.id}
          variant={'ghost'}
          className="text-center font-sans text-lg leading-normal font-semibold"
          onClick={() => onSetValueLabel(data.value)}
        >
          {data.name}
        </Button>
      ))}
    </div>
  );
};

export default HeadingAboutProduct;
