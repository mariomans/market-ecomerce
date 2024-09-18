'use client';

import {
  Button,
  Card,
  Form,
  Input,
  Modal,
  Row,
  Space,
  Table,
  Typography,
  Upload,
} from 'antd';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPenToSquare,
  faPhotoFilm,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Image from 'next/image';
import { LoadingOutlined } from '@ant-design/icons';
import { initialPagination } from '@/models/shared';
import { useTranslation } from '@/app/i18n/client';

const data = [
  {
    key: '1',
    picture: '/assets/images/product.png',
    create_at: '15/04/2023',
    url: 'https://www.unionplusonline.com/index.php?route=checkout/checkout',
  },
  {
    key: '2',
    picture: '/assets/images/product.png',
    create_at: '15/04/2023',
    url: 'https://www.unionplusonline.com/index.php?route=checkout/checkout',
  },
  {
    key: '3',
    picture: '/assets/images/product.png',
    create_at: '15/04/2023',
    url: 'https://www.unionplusonline.com/index.php?route=checkout/checkout',
  },
];

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

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

const SlideTable = ({ lng }) => {
  const { t } = useTranslation(lng);
  const [filter] = useState({ page: 1, limit: 20 });
  const [modal, setModal] = useState('');
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      align: 'center',
      width: '8%',
      render: (text, record, index) =>
        (filter.page - 1) * filter.limit + (index + 1),
    },
    {
      title: 'Picture',
      dataIndex: 'picture',
      key: 'age',
      width: '12%',
      render: (value) => (
        <Image src={value} width={120} height={40} alt="image" />
      ),
    },
    {
      title: 'URL',
      dataIndex: 'url',
      key: 'url',
      width: '60%',
    },
    {
      title: 'Create At',
      key: 'created',
      dataIndex: 'create_at',
      width: '10%',
    },
    {
      title: 'Action',
      key: 'action',
      width: '10%',
      render: () => (
        <Space size="middle">
          <FontAwesomeIcon
            style={{ color: '#FF8A00', cursor: 'pointer' }}
            icon={faPenToSquare}
            onClick={() => setModal('add')}
          />
          <FontAwesomeIcon style={{ color: 'red' }} icon={faTrashCan} />
        </Space>
      ),
    },
  ];

  // Upload image function
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

  // Submit Add slide function
  const onSubmit = (value) => {
    console.log(value);
  };

  const uploadButton = (
    <div>
      {loading ? (
        <LoadingOutlined />
      ) : (
        <div
          style={{
            border: '1px solid #00AFF0',
            borderStyle: 'dashed',
            width: '268px',
            height: 'calc(158px - 10px)',
            borderRadius: '15px',
          }}
          className="flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faPhotoFilm} fontSize={30} />
        </div>
      )}
    </div>
  );

  return (
    <Card>
      <Row justify="space-between">
        <Typography className="text-lg font-bold mb-4">
          {t('จัดการ Slide')}
        </Typography>
        <Button
          type="primary"
          className="bg-[#00B247]"
          onClick={() => setModal('add')}
        >
          เพิ่ม Slide
        </Button>
      </Row>
      <Table
        columns={columns}
        dataSource={data}
        pagination={initialPagination(data)}
        scroll={{ x: 800 }}
      />
      {modal === 'add' && (
        <Modal
          open={modal === 'add'}
          onCancel={() => setModal('')}
          footer={false}
          centered
          width={318}
        >
          <Form layout="vertical" id="addSlide" form={form} onFinish={onSubmit}>
            <Space direction="vertical" className="flex">
              <Typography className="text-xl font-bold flex justify-center">
                เพิ่ม / แก้ไข
              </Typography>
              <Upload
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
              <Form.Item label="URL" name="url">
                <Input />
              </Form.Item>
            </Space>
            <Row justify="space-between">
              <Button
                type="primary"
                className="bg-[#1E1E1E] w-[115px]"
                onClick={() => setModal('')}
              >
                ปิด
              </Button>
              <Button type="primary" className="bg-[#00B247] w-[115px]">
                บันทึก
              </Button>
            </Row>
          </Form>
        </Modal>
      )}
    </Card>
  );
};

export default SlideTable;

SlideTable.propTypes = {
  lng: PropTypes.string,
};
