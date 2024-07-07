import React from 'react';
import { IDetailRecipients } from './DetailRecipient';
import FormValueInfo from './FormValueInfo';

const InfoUser: React.FC<IDetailRecipients> = ({ dataUser }) => {
  return (
    <div className="grid gap-4 py-4">
      <FormValueInfo title={'name'} value={dataUser?.name} />
      <FormValueInfo title={'phone number'} value={dataUser?.phoneNumber} />
      <FormValueInfo title={'address'} value={dataUser?.address} />
      <FormValueInfo title={'post code'} value={dataUser?.postCode} />
      <FormValueInfo title={'state'} value={dataUser?.state} />
      <FormValueInfo title={'city'} value={dataUser?.city} />
      <FormValueInfo title={'country'} value={dataUser?.country} />
    </div>
  );
};

export default InfoUser;
