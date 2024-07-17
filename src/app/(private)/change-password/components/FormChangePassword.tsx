'use client';
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import useChangePassoword from '@/app/(private)/change-password/hook/useChangePassoword';

const FormChangePassword = () => {
  const [currPassword, setCurrPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [confPassword, setConfPassword] = useState(false);
  const {
    onSubmitChangePassword,
    checkNewPassword,
    handleSubmit,
    register,
    errors,
  } = useChangePassoword();

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmitChangePassword)}>
      <div className="space-y-2">
        <Label className="font-sans text-lg ">Current password</Label>
        <div className="flex items-center gap-2">
          <div className="w-full space-y-3">
            <Input
              type={currPassword ? '' : 'password'}
              {...register('currentPassword')}
            />
            {errors.currentPassword && (
              <p className="font-sans text-base text-red-600">
                {errors.currentPassword.message}
              </p>
            )}
          </div>
          {currPassword ? (
            <EyeOff
              size={28}
              className="cursor-pointer"
              onClick={() => setCurrPassword(!currPassword)}
            />
          ) : (
            <Eye
              size={28}
              className="cursor-pointer"
              onClick={() => setCurrPassword(!currPassword)}
            />
          )}
        </div>
      </div>
      <div className="space-y-2">
        <Label className="font-sans text-lg ">New password</Label>
        <div className="flex items-center gap-2">
          <div className="w-full space-y-2">
            <Input
              type={newPassword ? '' : 'password'}
              {...register('newPassword')}
            />
            {errors.newPassword && (
              <p className="font-sans text-base text-red-600">
                {errors.newPassword.message}
              </p>
            )}
          </div>
          {newPassword ? (
            <EyeOff
              size={28}
              className="cursor-pointer"
              onClick={() => setNewPassword(!newPassword)}
            />
          ) : (
            <Eye
              size={28}
              className="cursor-pointer"
              onClick={() => setNewPassword(!newPassword)}
            />
          )}
        </div>
      </div>
      <div className="space-y-2">
        <Label className="font-sans text-lg text-nowrap">
          Confirm new password
        </Label>
        <div className="flex items-center gap-2">
          <div className="w-full space-y-2">
            <Input
              type={confPassword ? '' : 'password'}
              {...register('confirmPassword')}
            />
            {errors.confirmPassword && (
              <p className="font-sans text-base text-red-600">
                {errors.confirmPassword.message}
              </p>
            )}
            {checkNewPassword && (
              <p className="font-sans text-base text-red-500">
                {checkNewPassword}
              </p>
            )}
          </div>
          {confPassword ? (
            <EyeOff
              size={28}
              className="cursor-pointer"
              onClick={() => setConfPassword(!confPassword)}
            />
          ) : (
            <Eye
              size={28}
              className="cursor-pointer"
              onClick={() => setConfPassword(!confPassword)}
            />
          )}
        </div>
      </div>
      <div className=" flex justify-end">
        <Button type="submit" variant={'destructive'}>
          Reset password
        </Button>
      </div>
    </form>
  );
};

export default FormChangePassword;
