import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import React from 'react';

interface ListProps {
  id: number | string | null;
  name: string;
  onClick?: (value: number | string) => void;
  categoryFilter: number | null | string;
}

const ListItem: React.FC<ListProps> = ({
  id,
  name,
  onClick,
  categoryFilter,
}) => {
  const handleSetFilterByCategoryId = () => {
    if (onClick && id) {
      onClick(id);
    }

    if (onClick && !id) {
      onClick('');
    }
  };

  return (
    <button
      onClick={handleSetFilterByCategoryId}
      className={cn(
        'flex w-full justify-between items-center bg-[#f7f7f8] rounded-lg px-4 py-3  hover:opacity-70 hover:text-[#F53E32]',
        {
          'text-[#F53E32]': categoryFilter === id,
        },
      )}
    >
      <span className="font-bold text-lg capitalize ">{name}</span>
      <ArrowRight />
    </button>
  );
};

export default ListItem;
