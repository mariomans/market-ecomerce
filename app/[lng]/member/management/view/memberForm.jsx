'use client';

import { Button, Card, Col, Form, Input, Row, Select, Typography } from 'antd';
import PropTypes from 'prop-types';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { useTranslation } from '@/app/i18n/client';

const MemberForm = ({ lng }) => {
  const { t } = useTranslation(lng);
  const [form] = Form.useForm();
  const params = useSearchParams();
  const id = params.get('id');

  const rerenderTitle = useMemo(() => {
    return id ? 'แก้ไขสมาชิก' : 'เพิ่มสมาชิก';
  }, [id]);

  // Submit form function
  const onSubmit = (value) => {
    console.log(value);
  };

  return (
    <>
      <Form layout="vertical" id="add-product" form={form} onFinish={onSubmit}>
        <Card className="mb-2">
          <Row justify="space-between" align="middle">
            <Col>
              <Typography className="text-lg font-bold">
                {t(rerenderTitle)}
              </Typography>
            </Col>
            <Col>
              <Button type="primary" htmlType="submit" className="bg-[#00B247]">
                บันทึก
              </Button>
            </Col>
          </Row>
        </Card>
        <Card className="pb-[66px] mb-2">
          <Typography className="text-lg font-bold mb-6">
            {t('ข้อมูลสมาชิก')}
          </Typography>
          <Row gutter={10}>
            <Col xs={8}>
              <Form.Item label="ประเภท" name="type">
                <Select />
              </Form.Item>
            </Col>
            <Col xs={16}>
              <Form.Item label="ชื่อร้านค้า" name="merch_name">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item label="ชื่อ" name="name">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item label="นามสกุล" name="surname">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item label="ที่อยู่" name="address">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item label="รหัสไปรษณีย์" name="zip_code">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item label="โทรศัพท์" name="tel">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item label="Email" name="email">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item label="เลขผู้เสียภาษี" name="tex_id">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item label="รหัสสมาชิก" name="member_id">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item label="ระดับสมาชิก" name="member_level">
                <Select />
              </Form.Item>
            </Col>
          </Row>
        </Card>
      </Form>
    </>
  );
};

export default MemberForm;

MemberForm.propTypes = {
  lng: PropTypes.string,
};
