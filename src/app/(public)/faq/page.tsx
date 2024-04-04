import { Accordion } from "@/components/ui/accordion";
import Image from "next/image";
import React from "react";
import AccordionItemFaq from "./components/AccordionItemFaq";

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
        <AccordionItemFaq
          value={"item-1"}
          title={"What Facilities Does Your Hotel Have?"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribuseos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto.Libero, vero natus."
          }
        />
        <AccordionItemFaq
          value={"item-2"}
          title={"What Facilities Does Your Hotel Have?"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribuseos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto.Libero, vero natus."
          }
        />
        <AccordionItemFaq
          value={"item-3"}
          title={"What Facilities Does Your Hotel Have?"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribuseos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto.Libero, vero natus."
          }
        />
        <AccordionItemFaq
          value={"item-4"}
          title={"What Facilities Does Your Hotel Have?"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribuseos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto.Libero, vero natus."
          }
        />
        <AccordionItemFaq
          value={"item-5"}
          title={"What Facilities Does Your Hotel Have?"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribuseos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto.Libero, vero natus."
          }
        />
        <AccordionItemFaq
          value={"item-6"}
          title={"What Facilities Does Your Hotel Have?"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribuseos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto.Libero, vero natus."
          }
        />
        <AccordionItemFaq
          value={"item-1"}
          title={"What Facilities Does Your Hotel Have?"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribuseos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto.Libero, vero natus."
          }
        />
      </Accordion>
    </div>
  );
};

export default FaqPage;
