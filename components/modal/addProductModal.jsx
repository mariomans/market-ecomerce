'use client';

import {
  faBarcode,
  faList,
  faMagnifyingGlass,
  faPlus,
  faTableList,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Breadcrumb,
  Button,
  Col,
  Input,
  Menu,
  Modal,
  Pagination,
  Row,
  Select,
  Space,
  Typography,
} from 'antd';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Image from 'next/image';
import { productMenu } from '@/models/mockData';
import { itemRender } from '@/models/shared';

const AddProductModal = ({ open, setOpen, t, onAddColumn }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Modal
      open={open}
      onCancel={() => setOpen('')}
      footer={false}
      centered
      width={'80%'}
    >
      <div className="flex w-full">
        <div>
          <Space size="large" className="ml-4 mt-4">
            {collapsed ? (
              <FontAwesomeIcon
                className="ml-3"
                icon={faList}
                onClick={toggleCollapsed}
                fontSize={20}
                style={{ cursor: 'pointer' }}
              />
            ) : (
              <>
                <FontAwesomeIcon
                  icon={faList}
                  onClick={toggleCollapsed}
                  fontSize={20}
                  style={{ cursor: 'pointer' }}
                />
                <Typography className="font-bold text-lg">
                  เลือกสินค้าตามหมวดหมู่{' '}
                </Typography>
              </>
            )}
          </Space>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="vertical"
            inlineCollapsed={collapsed}
            items={productMenu(t)}
          />
          <div className="mt-6">
            <Typography className="font-bold text-lg mb-4">
              {t('ผู้ผลิต')}
            </Typography>
            <Select className="w-full" defaultValue="all">
              <Select.Option value="all">ทั้งหมด</Select.Option>
            </Select>
          </div>
        </div>
        <div className="w-full">
          <Row justify="space-between" align="bottom" className="mx-6">
            <Col xs={24} lg={12}>
              <Breadcrumb
                separator=">"
                items={[
                  {
                    title: 'หน้าแรก',
                  },
                  {
                    title: 'อุปกรณ์เครื่องเขียน',
                  },
                  {
                    title: 'ดินสอ',
                  },
                ]}
              />
            </Col>
            <Col xs={24} lg={12}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '1px solid #D9D9D9',
                  padding: '4px 16px 4px 16px',
                  borderRadius: '50px',
                }}
              >
                <FontAwesomeIcon icon={faBarcode} />
                <Input placeholder="ค้นหาสินค้า..." bordered={false} />
                <Select placeholder="สินค้าทุกประเภท" bordered={false} />
                <FontAwesomeIcon icon={faMagnifyingGlass} fontSize={20} />
              </div>
            </Col>
          </Row>
          <Row justify="space-between" align="bottom" className="mx-6">
            <Col>
              <Space size="middle">
                <FontAwesomeIcon
                  icon={faTableList}
                  fontSize={20}
                  style={{ cursor: 'pointer' }}
                />
                <FontAwesomeIcon
                  icon={faList}
                  fontSize={20}
                  style={{ cursor: 'pointer' }}
                />
                <Typography>{t('ทั้งหมด 13 รายการ')}</Typography>
              </Space>
            </Col>
            <Col className="mt-2">
              <Space>
                <Typography className="font-bold">{t('เรียงลำดับ')}</Typography>
                <Select className="w-[216px]" defaultValue="all">
                  <Select.Option value="all">เริ่มต้น</Select.Option>
                </Select>
              </Space>
            </Col>
          </Row>
          <Row gutter={4} className="mx-6">
            {new Array(8).fill({}).map((data, i) => (
              <Col className="mt-2" key={i} lg={6}>
                <div className="flex-col">
                  <div>
                    <Image
                      src={'/assets/images/example_product.png'}
                      alt="avatar"
                      height={223}
                      width={223}
                    />
                    <div className="p-2 pb-2">
                      <Typography.Text
                        style={{
                          width: 223,
                        }}
                        ellipsis
                      >
                        Faber-Castel ยางลบ DUST FREE สี Faber-Castel ยางลบ DUST
                        FREE สี
                      </Typography.Text>
                      <Typography className="font-bold text-red-700">
                        218 บาท
                      </Typography>
                    </div>
                  </div>
                  <Button
                    type="primary"
                    className="w-full bg-[blue]"
                    onClick={() => onAddColumn()}
                  >
                    <FontAwesomeIcon icon={faPlus} fontSize={20} />
                  </Button>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <Pagination
        className="flex justify-end mt-6"
        total={30}
        itemRender={itemRender}
      />
      <div className="flex items-center justify-center">
        <Button
          onClick={() => setOpen('')}
          type="primary"
          className="w-[300px] mt-6 bg-[black]"
        >
          ปิด
        </Button>
      </div>
    </Modal>
  );
};

export default AddProductModal;

AddProductModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  onSubmit: PropTypes.func,
  t: PropTypes.func,
  onAddColumn: PropTypes.func,
};
