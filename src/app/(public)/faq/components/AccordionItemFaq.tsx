import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import React from 'react';

interface AccordionProp {
  value: string;
  title: string;
  content: string;
}

const AccordionItemFaq: React.FC<AccordionProp> = ({
  value,
  title,
  content,
}) => {
  return (
    <AccordionItem
      value={value}
      className="border space-y-[0.625rem] px-4 py-3 rounded-[0.313rem]"
    >
      <AccordionTrigger className="font-sans text-base leading-tight text-[#000000] font-medium">
        {title}
      </AccordionTrigger>
      <AccordionContent className="font-sans text-sm leading-relaxed text-[#7a7a7a] font-normal">
        {content}
      </AccordionContent>
    </AccordionItem>
  );
};

export default AccordionItemFaq;
