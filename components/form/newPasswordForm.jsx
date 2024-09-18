'use client';

import { Button, Form, Input } from 'antd';
import PropTypes from 'prop-types';
import { useTranslation } from '@/app/i18n/client';

const NewPasswordFormComponent = ({ lng, setPage }) => {
  const { t } = useTranslation(lng);
  const [form] = Form.useForm();

  return (
    <>
      <Form
        form={form}
        name="new_password"
        layout="vertical"
        className="login-form mt-8"
        autoComplete="off"
      >
        <Form.Item
          label={t('รหัสผ่าน')}
          name="change_password"
          rules={[{ required: true, message: t('fill') + '' + t('password') }]}
        >
          <Input.Password autoComplete="new-password" />
        </Form.Item>
        <Form.Item
          label={t('ยืนยันรหัสผ่าน')}
          name="confirm_password"
          rules={[
            { required: true, message: t('fill') + '' + t('password') },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('The two passwords that you entered do not match!')
                );
              },
            }),
          ]}
        >
          <Input.Password autoComplete="new-password" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-primary w-full"
            onClick={() => setPage('login')}
          >
            {t('รีเซ็ตรหัสผ่าน')}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default NewPasswordFormComponent;

NewPasswordFormComponent.propTypes = {
  lng: PropTypes.string,
  onFinish: PropTypes.func,
  setPage: PropTypes.func,
};
