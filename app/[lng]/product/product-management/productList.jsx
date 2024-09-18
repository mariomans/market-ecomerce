'use client';

import {
  Button,
  Card,
  Col,
  Divider,
  Input,
  Popover,
  Row,
  Select,
  Space,
  Table,
  Typography,
} from 'antd';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faMagnifyingGlass,
  faPenToSquare,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/app/i18n/client';
import { initialPagination } from '@/models/shared';
import ExcelImportModal from '@/components/modal/excelImportModal';

const data = {
  key: '1',
  picture: '/assets/images/product.png',
  create_at: '15/04/2023',
  name: 'ปากกา Standard',
  count: 10,
  price: 17.0,
  update_at: '15/04/2023',
  url: 'https://www.unionplusonline.com/index.php?route=checkout/checkout',
};

const ProductList = ({ lng }) => {
  const { t } = useTranslation(lng);
  const [filter] = useState({ page: 1, limit: 20 });
  const [modal, setModal] = useState('');

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
      title: 'ชื่อสินค้า',
      key: 'name',
      dataIndex: 'name',
      width: '25%',
    },
    {
      title: 'จำนวนคงเหลือ',
      key: 'count',
      dataIndex: 'count',
      width: '15%',
    },
    {
      title: 'ราคา',
      key: 'price',
      dataIndex: 'price',
      width: '10%',
      render: (value) => (
        <>
          <span>{value}</span>{' '}
          <Popover
            content={
              <div className="w-[200px] flex flex-wrap justify-between">
                {new Array(3)
                  .fill({
                    name: 'ราคาปกติ',
                    price: Math.floor(Math.random() * 20),
                  })
                  .map((data) => (
                    <>
                      <Typography>{data.name}</Typography>
                      <Typography>{data.price}</Typography>
                      <Divider className="m-1" />
                    </>
                  ))}
              </div>
            }
          >
            <FontAwesomeIcon icon={faCircleQuestion} />
          </Popover>
        </>
      ),
    },
    {
      title: 'updated_at',
      key: 'update_at',
      dataIndex: 'update_at',
      width: '10%',
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
          <FontAwesomeIcon style={{ color: '#FF8A00' }} icon={faPenToSquare} />
          <FontAwesomeIcon style={{ color: 'red' }} icon={faTrashCan} />
        </Space>
      ),
    },
  ];

  // handle click export function
  const handleClickExports = () => {
    console.log('exports');
  };

  // handle click update function
  const handleClickUpdateStock = () => {
    console.log('update');
  };

  return (
    <>
      <Card className="mb-2">
        <Row justify="space-between" align={'middle'}>
          <Col xs={24} lg={12}>
            <Typography className="text-lg font-bold">
              {t('จัดการสินค้า')}
            </Typography>
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
              <Input
                size="large"
                placeholder="ค้นหาสินค้า..."
                bordered={false}
              />
              <Select
                size="large"
                placeholder="สินค้าทุกประเภท"
                bordered={false}
              />
              <FontAwesomeIcon icon={faMagnifyingGlass} fontSize={24} />
            </div>
          </Col>
        </Row>
      </Card>
      <Card>
        <Row justify="space-between">
          <Typography className="text-lg font-bold mb-4">
            {t('รายการสินค้า')}
          </Typography>
          <Space>
            <Button
              type="primary"
              className="bg-[#00B247]"
              onClick={handleClickExports}
            >
              นำเข้า Excel
            </Button>
            <Button
              type="primary"
              className="bg-[#00AFF0]"
              onClick={() => setModal('add')}
            >
              อัพเดท Stock
            </Button>
            <Link href={`/${lng}/product/product-management/add`}>
              <Button type="primary" className="bg-[#00B247]">
                เพิ่มสินค้า
              </Button>
            </Link>
          </Space>
        </Row>
        <Table
          columns={columns}
          dataSource={new Array(4).fill(data)}
          pagination={initialPagination(data)}
          scroll={{ x: 800 }}
        />
        {modal === 'add' && (
          <ExcelImportModal
            open={modal === 'add'}
            onCancel={() => setModal('')}
            onSubmit={handleClickUpdateStock}
          />
        )}
      </Card>
    </>
  );
};

export default ProductList;

ProductList.propTypes = {
  lng: PropTypes.string,
};
