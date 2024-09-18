'use client';

import { Button, Form, Input, Typography } from 'antd';
import PropTypes from 'prop-types';
import { useTranslation } from '@/app/i18n/client';

const LoginFormComponent = ({ lng, onFinish, setPage }) => {
  const { t } = useTranslation(lng);
  const [form] = Form.useForm();

  return (
    <>
      <Form
        form={form}
        name="normal_login"
        layout="vertical"
        className="login-form mt-8"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="username"
          rules={[{ required: true, message: t('placeholder_username') }]}
          className="text-left"
        >
          <Input placeholder={t('username')} autoComplete="username" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: t('placeholder_password') }]}
          className="text-left mb-0"
        >
          <Input.Password
            type="password"
            placeholder={t('password')}
            autoComplete="current-password"
          />
        </Form.Item>
        <Typography
          onClick={() => setPage('forgot-password')}
          className="text-primary flex justify-end pt-2 cursor-pointer mb-4"
        >
          {t('ลืมรหัสผ่าน?')}
        </Typography>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full mt-2">
            {t('เข้าสู่ระบบ')}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginFormComponent;

LoginFormComponent.propTypes = {
  lng: PropTypes.string,
  onFinish: PropTypes.func,
  setPage: PropTypes.func,
};
