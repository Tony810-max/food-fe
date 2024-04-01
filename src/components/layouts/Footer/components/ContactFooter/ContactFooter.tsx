import React from "react";

import { Mail, MapPin, Phone } from "lucide-react";
import AuthLogo from "@/components/AuthLogo";
import ContactItem from "./ContactItem";

const ContactFooter = () => {
  return (
    <div>
      <AuthLogo />
      <div className="px-4">
        <span className="text-[#7A7A7A] font-sans leading-normal">
          FoodTrove is the biggest market of grocery products. Get your daily
          needs from our store.
        </span>

        <div className="space-y-[1.1rem] mt-7">
          <ContactItem content="51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.">
            <MapPin color="#F53E32" size={30} strokeWidth={3} />
          </ContactItem>

          <ContactItem content="example@email.com">
            <Mail color="#F53E32" size={24} strokeWidth={3} />
          </ContactItem>

          <ContactItem content="+91 123 4567890">
            <Phone color="#F53E32" size={24} strokeWidth={3} />
          </ContactItem>
        </div>
      </div>
    </div>
  );
};

export default ContactFooter;
