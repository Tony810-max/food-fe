import React from 'react';

interface descriptionProps {
  description: string | undefined;
}

const DescriptionTabAboutProduct: React.FC<descriptionProps> = ({
  description,
}) => {
  return <div className="py-4">{description}</div>;
};

export default DescriptionTabAboutProduct;
