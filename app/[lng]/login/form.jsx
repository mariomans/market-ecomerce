'use client';

import { Card, Typography } from 'antd';
import PropTypes from 'prop-types';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from '@/app/i18n/client';
import LoginFormComponent from '@/components/form/loginForm';
import ForgotPasswordFormComponent from '@/components/form/forgotPasswordForm';
import NewPasswordFormComponent from '@/components/form/newPasswordForm';

const LoginForm = ({ lng }) => {
  const { t } = useTranslation(lng);
  const [page, setPage] = useState('login');
  const router = useRouter();

  const onFinish = async ({ username, password }) => {
    try {
      const response = await signIn('credentials', {
        email: username,
        password: password,
        redirect: false,
      });

      if (!response?.error) {
        router.push(`/${lng}/dashboard`);
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="w-[500px]">
      <div className="w-full px-5 pt-5 minmdp:py-10 mb-5">
        <div className="flex flex-col items-center">
          <Image
            src="/assets/images/union.png"
            priority
            width={163}
            height={64}
            alt="icon"
          />
          <Typography className="text-lg font-bold pt-6 mb-0">
            {page === 'login' ? t('login') : t('forgot-password')}
          </Typography>
        </div>
        {page === 'login' && (
          <LoginFormComponent lng={lng} onFinish={onFinish} setPage={setPage} />
        )}
        {page === 'forgot-password' && (
          <ForgotPasswordFormComponent lng={lng} setPage={setPage} />
        )}
        {page === 'change-password' && (
          <NewPasswordFormComponent lng={lng} setPage={setPage} />
        )}
      </div>
    </Card>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  lng: PropTypes.string,
};
