'use client';

import { Button, Form, Input, Row, Typography } from 'antd';
import PropTypes from 'prop-types';
import { useTranslation } from '@/app/i18n/client';

const ForgotPasswordFormComponent = ({ lng, setPage }) => {
  const { t } = useTranslation(lng);
  const [form] = Form.useForm();

  return (
    <>
      <Form
        form={form}
        name="forgot_password"
        layout="vertical"
        className="login-form mt-8"
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: t('placeholder_username') }]}
          className="text-left"
        >
          <Input placeholder={t('username')} autoComplete="username" />
        </Form.Item>
        <Form.Item>
          <Row justify="space-between" align="middle">
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => setPage('change-password')}
              className="bg-primary w-[150px] h-[40px]"
            >
              {t('รีเซ็ตรหัสผ่าน')}
            </Button>
            <Typography.Text
              underline
              onClick={() => setPage('login')}
              className="text-primary cursor-pointer"
            >
              {t('กลับเข้าสู่ระบบ')}
            </Typography.Text>
          </Row>
        </Form.Item>
      </Form>
    </>
  );
};

export default ForgotPasswordFormComponent;

ForgotPasswordFormComponent.propTypes = {
  lng: PropTypes.string,
  onFinish: PropTypes.func,
  setPage: PropTypes.func,
};
