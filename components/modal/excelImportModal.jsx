'use client';

import { Button, Form, Modal, Row, Space, Typography, Upload } from 'antd';
import Image from 'next/image';
import { LoadingOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { useState } from 'react';

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const ExcelImportModal = ({ open, onCancel, onSubmit }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div
      style={{
        border: '1px solid #00AFF0',
        borderStyle: 'dashed',
        width: 275,
        height: 169,
        borderRadius: '15px',
      }}
      className="flex items-center justify-center"
    >
      {loading ? (
        <LoadingOutlined />
      ) : (
        <FontAwesomeIcon icon={faPhotoFilm} fontSize={30} />
      )}
    </div>
  );

  return (
    <Modal open={open} onCancel={onCancel} footer={false} centered width={318}>
      <Form layout="vertical" id="addSlide" form={form} onFinish={onSubmit}>
        <Space direction="vertical" className="flex">
          <Typography className="text-xl font-bold flex justify-center">
            เลือกไฟล์ Excel
          </Typography>
          <Upload
            className="flex justify-center w-full"
            name="avatar"
            beforeUpload={beforeUpload}
            onChange={handleChange}
            showUploadList={false}
          >
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt="avatar"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              uploadButton
            )}
          </Upload>
        </Space>
        <Row justify="space-between" className="mt-6">
          <Button type="primary" className="bg-[#1E1E1E] w-[115px]">
            ปิด
          </Button>
          <Button type="primary" className="bg-[#00AFF0] w-[115px]">
            อัพเดท
          </Button>
        </Row>
      </Form>
    </Modal>
  );
};

export default ExcelImportModal;

ExcelImportModal.propTypes = {
  open: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
};
