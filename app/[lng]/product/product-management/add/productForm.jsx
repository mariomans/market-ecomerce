'use client';

import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Select,
  Typography,
  Upload,
} from 'antd';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from '@/app/i18n/client';
import ProductListForm from '@/components/form/productListForm';

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const ProductForm = ({ lng }) => {
  const { t } = useTranslation(lng);
  const [form] = Form.useForm();

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
                {t('เพิ่มสินค้า')}
              </Typography>
            </Col>
            <Col>
              <Button type="primary" htmlType="submit" className="bg-[#00B247]">
                บันทึก
              </Button>
            </Col>
          </Row>
        </Card>
        <Row gutter={4}>
          <Col md={24} lg={16}>
            <Card className="pb-[66px] mb-2">
              <Typography className="text-lg font-bold">
                {t('รายละเอียด')}
              </Typography>
              <Divider />
              <Form.Item label="ชื่อสินค้า" name="name">
                <Input />
              </Form.Item>
              <Form.Item label="รายละเอียด" name="detail">
                <Input.TextArea rows={4} />
              </Form.Item>
              <Form.Item
                label="รหัสสินค้า"
                name="code"
                style={{
                  display: 'inline-block',
                  width: '50%',
                }}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="แบรนด์"
                name="brand"
                style={{
                  display: 'inline-block',
                  width: '50%',
                  paddingLeft: 8,
                }}
              >
                <Select />
              </Form.Item>
              <Form.Item
                label="หมวดหมู่สินค้า"
                name="type"
                style={{
                  display: 'inline-block',
                  width: '40%',
                }}
              >
                <Select />
              </Form.Item>
              <Form.Item
                label="หมวดหมู่สินค้าย่อย"
                name="sub_type"
                style={{
                  display: 'inline-block',
                  width: '40%',
                  paddingLeft: 8,
                }}
              >
                <Select />
              </Form.Item>
              <Form.Item
                label="จำนวน"
                name="amount"
                style={{
                  display: 'inline-block',
                  width: '20%',
                  paddingLeft: 8,
                }}
              >
                <Input />
              </Form.Item>
            </Card>
          </Col>
          <Col md={24} lg={8}>
            <Card>
              <Typography className="text-lg font-bold">
                {t('ภาพสินค้า')}
              </Typography>
              <Divider />
              <Form.Item
                label="ภาพปกสินค้า"
                valuePropName="fileList"
                getValueFromEvent={normFile}
              >
                <div
                  style={{
                    border: '1px solid #00AFF0',
                    borderStyle: 'dashed',
                    width: '100%',
                    height: 'calc(158px - 10px)',
                    borderRadius: '15px',
                  }}
                  className="flex items-center justify-center"
                >
                  <Upload action="/upload.do">
                    <FontAwesomeIcon icon={faPhotoFilm} fontSize={30} />
                  </Upload>
                </div>
              </Form.Item>
              <Form.Item
                label="Gallery"
                valuePropName="fileList"
                getValueFromEvent={normFile}
              >
                <Row wrap>
                  <Col xs={12}>
                    <Upload action="/upload.do" listType="picture-card">
                      <div>
                        <FontAwesomeIcon icon={faPhotoFilm} fontSize={30} />
                      </div>
                    </Upload>
                  </Col>
                  <Col xs={12}>
                    <Upload action="/upload.do" listType="picture-card">
                      <div>
                        <FontAwesomeIcon icon={faPhotoFilm} fontSize={30} />
                      </div>
                    </Upload>
                  </Col>
                  <Col xs={12}>
                    <Upload action="/upload.do" listType="picture-card">
                      <div>
                        <FontAwesomeIcon icon={faPhotoFilm} fontSize={30} />
                      </div>
                    </Upload>
                  </Col>
                  <Col xs={12}>
                    <Upload action="/upload.do" listType="picture-card">
                      <div>
                        <FontAwesomeIcon icon={faPhotoFilm} fontSize={30} />
                      </div>
                    </Upload>
                  </Col>
                </Row>
              </Form.Item>
            </Card>
          </Col>
        </Row>
        <Card>
          <Typography className="text-lg font-bold">
            {t('รายการสินค้า')}
          </Typography>
          <Divider />
          <ProductListForm />
        </Card>
      </Form>
    </>
  );
};

export default ProductForm;

ProductForm.propTypes = {
  lng: PropTypes.string,
};
