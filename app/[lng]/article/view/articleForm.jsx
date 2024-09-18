'use client';

import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Row,
  Space,
  Typography,
  Upload,
} from 'antd';
import PropTypes from 'prop-types';
import { useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from '@/app/i18n/client';
import EditorComponent from '@/components/EditorComponent';

const ArticleForm = ({ lng }) => {
  const { t } = useTranslation(lng);
  const [form] = Form.useForm();
  const params = useSearchParams();
  const id = params.get('id');
  const [data, setData] = useState();

  const rerenderTitle = useMemo(() => {
    return id ? 'จัดการบทความ' : 'เพิ่มบทความ';
  }, [id]);

  // Submit form function
  const onSubmit = (value) => {
    console.log(value);
  };

  return (
    <>
      <Form layout="vertical" id="add-product" form={form} onFinish={onSubmit}>
        <Card className="mb-2">
          <Typography className="text-lg font-bold">
            {t(rerenderTitle)}
          </Typography>
        </Card>
        <Row gutter={7}>
          <Col xs={24} lg={18}>
            <Card className="pb-[66px] mb-2">
              <Row>
                <Col xs={24}>
                  <Form.Item label="Title" name="title">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24}>
                  <EditorComponent value={data} setValue={setData} />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={24} lg={6}>
            <div className="flex-col">
              <Card className="mb-2">
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Typography className="text-lg font-bold mb-4">
                    Publish
                  </Typography>
                  <Button
                    type="primary"
                    style={{ width: '100%' }}
                    className="bg-[#3BC7F4]"
                  >
                    Save Draft
                  </Button>
                  <Button
                    style={{ width: '100%' }}
                    type="primary"
                    className="bg-[#00B247]"
                  >
                    Publish
                  </Button>
                </Space>
              </Card>
              <Card className="mb-2">
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Typography className="text-lg font-bold mb-4">
                    Focus Keyword
                  </Typography>
                  <Input className="w-full" />
                </Space>
              </Card>
              <Card>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Typography className="text-lg font-bold mb-4">
                    Image
                  </Typography>
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
                </Space>
              </Card>
            </div>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default ArticleForm;

ArticleForm.propTypes = {
  lng: PropTypes.string,
};
