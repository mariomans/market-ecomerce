'use client';

import { faPhotoFilm, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Select,
  Typography,
  Upload,
} from 'antd';
import { useCallback, useState } from 'react';

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const ProductListForm = () => {
  const [formList, setFormList] = useState([{ key: 1 }, { key: 2 }]);

  const onClickAddForm = useCallback(() => {
    if (formList.length < 5) {
      setFormList((formList) => [
        ...formList,
        { key: Math.floor(Math.random() * 100) },
      ]);
    }
  }, [formList.length]);

  const onDeleteSingleForm = useCallback(
    (key) => {
      // eslint-disable-next-line max-nested-callbacks
      setFormList((formList) => formList.filter((data) => data.key !== key));
    },
    [formList.length]
  );

  return (
    <>
      {formList.map((data, i) => (
        <Row key={i} gutter={6} wrap align="top">
          <Col md={24} lg={2}>
            <Form.Item
              label={<></>}
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Upload action="/upload.do">
                <div
                  style={{
                    border: '1px solid #00AFF0',
                    borderStyle: 'dashed',
                    width: 'calc(91px - 10px)',
                    height: 'calc(56px - 8px)',
                    borderRadius: '15px',
                  }}
                  className="flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faPhotoFilm} fontSize={20} />
                </div>
              </Upload>
            </Form.Item>
          </Col>
          <Col lg={3}>
            <Form.Item
              label={<Typography.Text ellipsis>รหัสบาร์โค้ด</Typography.Text>}
              name="code"
            >
              <Input />
            </Form.Item>
          </Col>
          <Col lg={2}>
            <Form.Item
              label={<Typography.Text ellipsis>ชื่อหน่วย</Typography.Text>}
              name="code"
            >
              <Input />
            </Form.Item>
          </Col>
          <Col lg={2}>
            <Form.Item
              label={<Typography.Text ellipsis>คำนวณหน่วย</Typography.Text>}
              name="code"
            >
              <Select />
            </Form.Item>
          </Col>
          <Col lg={2}>
            <Form.Item
              label={<Typography.Text ellipsis>ราคาทั่วไป</Typography.Text>}
              name="code"
            >
              <Input />
            </Form.Item>
          </Col>
          <Col lg={3}>
            <Form.Item
              label={<Typography.Text ellipsis>ราคาสมาชิก1</Typography.Text>}
              name="code"
            >
              <Input />
            </Form.Item>
          </Col>
          <Col lg={3}>
            <Form.Item
              label={<Typography.Text ellipsis>ราคาสมาชิก2</Typography.Text>}
              name="code"
            >
              <Input />
            </Form.Item>
          </Col>
          <Col lg={3}>
            <Form.Item
              label={<Typography.Text ellipsis>ราคาสมาชิก3</Typography.Text>}
              name="code"
            >
              <Input />
            </Form.Item>
          </Col>
          <Col lg={2}>
            <Form.Item
              label={<Typography.Text ellipsis>ราคาสมาชิก4</Typography.Text>}
              name="code"
            >
              <Input />
            </Form.Item>
          </Col>
          <Col lg={2}>
            <Form.Item
              label="Actions"
              className="flex items-center justify-center"
            >
              <div className="flex items-center justify-center">
                <FontAwesomeIcon
                  style={{ color: 'red', cursor: 'pointer' }}
                  icon={faTrashCan}
                  fontSize={20}
                  onClick={() => onDeleteSingleForm(data.key)}
                />
              </div>
            </Form.Item>
          </Col>
        </Row>
      ))}
      <div className="flex items-center justify-center">
        <Button
          type="primary"
          className="bg-[#00B247]"
          onClick={onClickAddForm}
        >
          เพิ่มรายการ
        </Button>
      </div>
    </>
  );
};

export default ProductListForm;
