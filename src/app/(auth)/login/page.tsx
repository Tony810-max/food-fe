import AuthLogo from '@/components/AuthLogo';

import React from 'react';
import FormLogin from './components/FormLogin';

const SignInPage: React.FC = () => {
  return (
    <div className="container flex justify-center items-center min-h-[calc(100vh-212px)]">
      <div className="border border-[#E9E9E9] rounded-lg flex flex-col justify-center items-center py-6 px-10">
        <AuthLogo />
        <FormLogin />
      </div>
    </div>
  );
};

export default SignInPage;
