'use client';

import { Button, Form, Input, Modal, Row, Space, Typography } from 'antd';
import PropTypes from 'prop-types';
import { Trans } from 'react-i18next';

const AddSidebarMenuModal = ({ open, setOpen, onSubmit }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      open={open}
      onCancel={() => setOpen('')}
      footer={false}
      centered
      width={700}
    >
      <Form className="px-4" layout="vertical" id="addSlide" form={form} onFinish={onSubmit}>
        <Space direction="vertical" className="flex">
          <Typography className="text-xl font-bold mb-4">
            เพิ่มรายการ
          </Typography>
          <Form.Item
            label={
              <Typography className="font-bold">
                <Trans>ชื่อรายการ</Trans>
              </Typography>
            }
            name="name"
          >
            <Input size="large" />
          </Form.Item>
        </Space>
        <Row justify="space-between">
          <Button
            type="primary"
            onClick={() => setOpen('')}
            className="bg-[#1E1E1E] w-[300px] h-[50px]"
          >
            ยกเลิก
          </Button>
          <Button
            type="primary"
            className="bg-[#0D52F1] w-[300px] h-[50px]"
          >
            บันทึก
          </Button>
        </Row>
      </Form>
    </Modal>
  );
};

export default AddSidebarMenuModal;

AddSidebarMenuModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  onSubmit: PropTypes.func,
};
