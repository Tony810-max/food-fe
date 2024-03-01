import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const layout: React.FC<IProps> = ({ children }) => {
  return (
    <div>
      <span>lay out trong</span>
      {children}
    </div>
  );
};

export default layout;
