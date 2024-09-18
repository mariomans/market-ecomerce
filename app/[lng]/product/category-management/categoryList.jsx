'use client';

import {
  Button,
  Card,
  Col,
  Divider,
  Menu,
  Row,
  Space,
  Table,
  Typography,
} from 'antd';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from '@/app/i18n/client';
import CategoryFormModal from '@/components/modal/categoryFormModal';

const data = [
  {
    key: '1',
    picture: '/assets/images/product.png',
    create_at: '15/04/2023',
    url: 'https://www.unionplusonline.com/index.php?route=checkout/checkout',
  },
];

const sub_data = [
  {
    key: '1',
    name: 'ปากกา',
  },
  {
    key: '2',
    name: 'ดินสอ',
  },
];

const CategoryList = ({ lng }) => {
  const { t } = useTranslation(lng);
  const [filter] = useState({ page: 1, limit: 20 });
  const [modal, setModal] = useState('');

  // Click on category menu function
  const onClickMainCategoryMenu = (e) => {
    console.log('click ', e);
  };

  const mainCategoryColumns = [
    {
      title: '#',
      dataIndex: 'id',
      align: 'center',
      width: '8%',
      render: (text, record, index) =>
        (filter.page - 1) * filter.limit + (index + 1),
    },
    {
      title: 'ชื่อหมวดหมู่',
      dataIndex: 'picture',
      key: 'age',
      render: () => (
        <Menu
          onClick={onClickMainCategoryMenu}
          mode="vertical"
          items={[
            {
              key: 'product',
              label: t('อุปกรณ์เครื่องเขียน'),
              children: [
                {
                  key: 'product_management',
                  label: t('product_management'),
                },
                {
                  key: 'category_management',
                  label: t('category_management'),
                },
              ],
            },
          ]}
        />
      ),
    },
  ];

  const subCategoryColumns = [
    {
      title: '#',
      dataIndex: 'id',
      align: 'center',
      width: '8%',
      render: (text, record, index) =>
        (filter.page - 1) * filter.limit + (index + 1),
    },
    {
      title: 'ชื่อหมวดหมู่ย่อย',
      dataIndex: 'name',
      key: 'name',
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

  return (
    <>
      <Card className="mb-2">
        <Col xs={24} lg={12}>
          <Typography className="text-lg font-bold">
            {t('จัดการ Category')}
          </Typography>
        </Col>
      </Card>
      <Row gutter={4}>
        <Col md={24} lg={10}>
          <Card
            style={{
              minHeight: '100vh',
            }}
          >
            <Row justify="space-between">
              <Col>
                <Typography className="text-lg font-bold">
                  {t('หมวดหมู่หลัก')}
                </Typography>
              </Col>
              <Col>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-[#00B247] mr-2"
                >
                  นำเข้า Excel
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-[#00B247]"
                  onClick={() => setModal('add')}
                >
                  เพิ่มหมวดหมู่
                </Button>
              </Col>
            </Row>
            <Divider dashed className="mt-2" />
            <Table
              size="small"
              columns={mainCategoryColumns}
              dataSource={data}
              pagination={false}
            />
          </Card>
        </Col>
        <Col md={24} lg={14}>
          <Card
            style={{
              minHeight: '100vh',
            }}
          >
            <Row justify="space-between">
              <Col>
                <Typography className="text-lg font-bold">
                  {t('หมวดหมู่หลัก')}
                </Typography>
              </Col>
              <Col>
                <Space>
                  <Button type="primary" className="bg-[#00B247]">
                    นำเข้า Excel
                  </Button>
                  <Button type="primary" className="bg-[red]">
                    ลบหมวดหมู่
                  </Button>
                  <Button
                    type="primary"
                    className="bg-[#00B247]"
                    onClick={() => setModal('add')}
                  >
                    เพิ่มหมวดหมู่ย่อย
                  </Button>
                </Space>
              </Col>
            </Row>
            <Divider dashed className="mt-2" />
            <Table
              size="small"
              columns={subCategoryColumns}
              dataSource={sub_data}
              pagination={false}
            />
          </Card>
        </Col>
      </Row>
      {modal === 'add' && (
        <CategoryFormModal open={modal === 'add'} setOpen={setModal} />
      )}
    </>
  );
};

export default CategoryList;

CategoryList.propTypes = {
  lng: PropTypes.string,
};
