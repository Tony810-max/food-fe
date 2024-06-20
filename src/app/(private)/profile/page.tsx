'use client';
import React from 'react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useUser } from '@/hooks/useUser';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InforProfile from './components/InforProfile';
import { schemaProfile } from './types/common';
import { useAddress } from '@/hooks/useAddress';

const ProfilePage: React.FC = () => {
  const {
    createDate,
    dataProfile,
    updateDate,
    handleGetCode,
    handleUpdateProfile,
    editProfile,
    setEditProfile,
  } = useUser();

  const { register, handleSubmit, watch, setValue } = useForm({
    resolver: yupResolver(schemaProfile),
  });

  const addressInput = watch('address');

  const { addressSearch, isChooseAddress, setIsChooseAddress } =
    useAddress(addressInput);

  return (
    <form
      className="container py-[6.25rem] space-y-3"
      onSubmit={handleSubmit(handleUpdateProfile)}
    >
      <div className="sm:grid grid-cols-2 gap-x-2 gap-y-3 space-y-4 sm:space-y-0">
        <span className="col-span-2 font-sans text-xl font-bold leading-normal uppercase">
          my profile
        </span>
        <InforProfile
          variable="firstName"
          title="first name"
          register={register}
          value={dataProfile?.firstName}
          status={editProfile}
        />
        <InforProfile
          variable="lastName"
          title="last name"
          register={register}
          value={dataProfile?.lastName}
          status={editProfile}
        />
        <div className="relative">
          <div className={`space-y-3 `}>
            <label className="font-sans text-lg font-bold leading-normal capitalize">
              address
            </label>
            <Input
              {...register('address')}
              className="font-sans text-base font-semibold leading-normal"
            />
          </div>
          <div className="absolute z-10">
            {addressSearch?.length > 0 &&
              addressSearch?.map((address: any, index) => (
                <Button key={address?.description} onClick={() => {}}>
                  {address?.description}
                </Button>
              ))}
          </div>
        </div>
        <InforProfile
          title="email"
          variable="email"
          register={register}
          value={dataProfile?.email}
          status={editProfile}
        />
        <InforProfile
          variable="phone"
          title="phone"
          register={register}
          value={dataProfile?.phoneNumber}
          status={editProfile}
        />
        <InforProfile variable="" title="Create Date" value={createDate} />
        <div className="space-y-4">
          <div className="space-y-3">
            <label className="font-sans text-lg font-bold leading-normal capitalize">
              status
            </label>
            <Input
              value={
                dataProfile?.isActice
                  ? 'Account is actived'
                  : ' Account is not actived'
              }
              disabled
              className="font-sans text-white text-lg font-bold leading-normal bg-[#fd3f3f] uppercase"
            />
          </div>
          {dataProfile?.isActice === false && (
            <Button
              type="button"
              variant={'destructive'}
              className="font-sans text-lg font-medium capitalize"
              onClick={handleGetCode}
            >
              Active now !
            </Button>
          )}
        </div>
        <InforProfile variable="" title="Update date" value={updateDate} />
      </div>
      <div className="flex justify-end">
        {editProfile && (
          <Button
            type="submit"
            variant={'destructive'}
            className="font-sans text-lg font-bold capitalize"
          >
            Save
          </Button>
        )}
        {!editProfile && (
          <Button
            type="button"
            variant={'destructive'}
            className="font-sans text-lg font-bold capitalize"
            onClick={() => setEditProfile(true)}
          >
            Edit profile
          </Button>
        )}
      </div>
    </form>
  );
};

export default ProfilePage;
