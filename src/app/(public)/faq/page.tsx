import { Accordion } from "@/components/ui/accordion";
import Image from "next/image";
import React from "react";
import AccordionItemFaq from "./components/AccordionItemFaq";

const DATA_FAQ_PAGE = [
  {
    id: 1,
    title: "What Facilities Does Your Hotel Have?",
    value: "item-1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribuseos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto.Libero, vero natus.",
  },
  {
    id: 2,
    title: "How Do I Book A Room For My Vacation?",
    value: "item-2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribuseos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto.Libero, vero natus.",
  },
  {
    id: 3,
    title: "How We are best among others?",
    value: "item-3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribuseos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto.Libero, vero natus.",
  },
  {
    id: 4,
    title: "Is There Any Fitness Center In Your Hotel?",
    value: "item-4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribuseos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto.Libero, vero natus.",
  },
  {
    id: 5,
    title: "What Type Of Room Service Do You Offer?",
    value: "item-5",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribuseos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto.Libero, vero natus.",
  },
  {
    id: 6,
    title: "What Facilities Does Your Hotel Have?",
    value: "item-6",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribuseos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto.Libero, vero natus.",
  },
  {
    id: 7,
    title: "How Do I Book A Room For My Vacation?",
    value: "item-7",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribuseos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto.Libero, vero natus.",
  },
];

const FaqPage = () => {
  return (
    <div className="grid grid-cols-2 container py-[6.25rem] gap-6">
      <div className="relative w-full h-[33.125rem] rounded-[0.313rem]">
        <Image
          src="/images/imgFaq.webp"
          alt="imgFaq"
          fill
          priority
          unoptimized
        />
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-full space-y-[0.625rem]"
      >
        {DATA_FAQ_PAGE?.map((data) => (
          <AccordionItemFaq
            key={data?.id}
            value={data?.value}
            title={data?.title}
            content={data?.content}
          />
        ))}
       
      </Accordion>
    </div>
  );
};

export default FaqPage;
