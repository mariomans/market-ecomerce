'use client';

import { Button, Card, Col, Grid, Menu, Row, Space, Typography } from 'antd';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from '@/app/i18n/client';
import { mockCategoriesProductMenu } from '@/models/mockData';
import AddSidebarMenuModal from '@/components/modal/addSidebarMenuModal';
import AddProductModal from '@/components/modal/addProductModal';

const { useBreakpoint } = Grid;

const CategoriesProduct = ({ lng }) => {
  const { t } = useTranslation(lng);
  const { md } = useBreakpoint();
  const [modal, setModal] = useState();

  // Click on side menu function
  const onClick = (e) => {
    console.log('click ', e);
  };

  // Submit Add menu function
  const onSubmit = (value) => {
    console.log(value);
  };

  // Add product list function
  const handleAdd = () => {
    console.log('work');
  };

  return (
    <Card>
      <Row>
        <Typography className="text-lg font-bold mb-4">
          {t('จัดการหมวดหมู่สินค้า')}
        </Typography>
      </Row>
      <div className="flex w-full">
        <Space direction="vertical">
          <span className="flex justify-end">
            <Button
              type="primary"
              className="bg-[#00D355] w-[88px]"
              onClick={() => setModal('add_menu')}
            >
              เพิ่ม
            </Button>
          </span>
          <Menu
            onClick={onClick}
            className="text-black"
            style={{
              width: md ? 304 : 200,
            }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="vertical"
            items={mockCategoriesProductMenu(t)}
          />
        </Space>
        <div className="w-full ml-4">
          <Row justify="space-between">
            <Space>
              <Button
                type="primary"
                className="bg-[#0D52F1] w-[88px]"
                onClick={() => setModal('add')}
              >
                เพิ่มสินค้า
              </Button>
              <Button type="primary" className="bg-[#00B247]">
                เปิดใช้งานแนะนำอัตโนมัติ
              </Button>
            </Space>
            <Button type="primary" className="bg-[red] w-[88px]">
              ลบ
            </Button>
          </Row>
          <Row gutter={10}>
            {new Array(3).fill({}).map((data, i) => (
              <Col className="mt-2" key={i} lg={8}>
                <Card bodyStyle={{ padding: 0 }}>
                  <Image
                    src={'/assets/images/example_product.png'}
                    alt="avatar"
                    height={284}
                    width={284}
                  />
                  <div className="p-2 pb-8">
                    <Typography.Text
                      style={{
                        width: 284,
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
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      {modal === 'add_menu' && (
        <AddSidebarMenuModal
          open={modal === 'add_menu'}
          setOpen={setModal}
          onSubmit={onSubmit}
        />
      )}
      {modal === 'add' && (
        <AddProductModal
          open={modal === 'add'}
          setOpen={setModal}
          onSubmit={() => console.log('add submit')}
          onAddColumn={handleAdd}
          t={t}
        />
      )}
    </Card>
  );
};

export default CategoriesProduct;

CategoriesProduct.propTypes = {
  lng: PropTypes.string,
};
