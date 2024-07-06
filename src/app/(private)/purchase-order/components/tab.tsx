import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

interface tabProps {
  href: string;
  title: string;
  checkHref: string;
  onSetCheckHref: (value: string) => void;
}

const Tab: React.FC<tabProps> = ({
  href,
  title,
  checkHref,
  onSetCheckHref,
}) => {
  return (
    <Link
      href={href}
      className={cn('border py-1 px-2 rounded-lg ', {
        'bg-[#f53e32] ': title === checkHref,
      })}
      onClick={() => onSetCheckHref(title)}
    >
      <Button
        variant={'link'}
        className={cn('text-base  font-sans capitalize', {
          'text-white ': title === checkHref,
        })}
      >
        {title}
      </Button>
    </Link>
  );
};

export default Tab;
