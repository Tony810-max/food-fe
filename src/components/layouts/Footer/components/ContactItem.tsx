import React from "react";

interface ContactItemProps {
  children: React.ReactNode;
  content: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ children, content }) => {
  return (
    <div className="flex gap-[0.65rem]">
      {children}

      <span className="font-sans text-[#777777] leading-normal">{content}</span>
    </div>
  );
};

export default ContactItem;
