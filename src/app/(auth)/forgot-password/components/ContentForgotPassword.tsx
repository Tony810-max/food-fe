import React from 'react';
import FormForgotPassword from './FormForgotPassword';

const ContentForgotPassword = () => {
  return (
    <div className="px-20 py-8 space-y-10 min-w-[25rem]">
      <p className="font-sans text-2xl font-bold text-center ">
        Forgot Password
      </p>
      <FormForgotPassword />
    </div>
  );
};

export default ContentForgotPassword;
