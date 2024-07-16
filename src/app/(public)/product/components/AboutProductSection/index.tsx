import React, { useState } from 'react';
import HeadingAboutProduct from './HeadingAboutProduct';
import { Separator } from '@/components/ui/separator';
import InformationTabAboutProduct from './InformationTabAboutProduct';
import ReviewTabAboutProduct from './ReviewTabAboutProduct';
import DescriptionTabAboutProduct from './DescriptionTabAboutProduct';
import CommentTabAboutProduct from './CommentTabAboutProduct';
import { DetailProductContext } from '@/contexts/useProductDetailContext';

const DATA_HEADING = [
  {
    id: 1,
    name: 'Description',
    value: 'description',
  },
  {
    id: 2,
    name: 'Information',
    value: 'information',
  },
  {
    id: 3,
    name: 'Review',
    value: 'review',
  },
  {
    id: 4,
    name: 'Comment',
    value: 'comment',
  },
];

const AboutProduct = () => {
  const [valueLabel, setValueLabel] = useState<string>(DATA_HEADING[0].value);
  const context = React.useContext(DetailProductContext);
  
  const renderContent = () => {
    switch (valueLabel) {
      case 'description':
        return (
          <DescriptionTabAboutProduct
            description={context.dataDetailProducts?.description}
          />
        );

      case 'information':
        return <InformationTabAboutProduct />;
      case 'review':
        return <ReviewTabAboutProduct />;
      case 'comment':
        return <CommentTabAboutProduct />;

      default:
        return <div>Click one tab for view</div>;
    }
  };

  return (
    <div className="col-span-2 p-6 border rounded min-h-80">
      <HeadingAboutProduct
        data={DATA_HEADING}
        onSetValueLabel={setValueLabel}
      />
      <Separator />
      {renderContent()}
    </div>
  );
};

export default AboutProduct;
