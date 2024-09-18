'use client';

import { Button, Card, Col, Row, Typography } from 'antd';
import PropTypes from 'prop-types';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import AddMemberModal from './addMemberModal';
import OrderTable from './orderTable';
import { useTranslation } from '@/app/i18n/client';

const AddPurchaseTable = ({ lng }) => {
  const { t } = useTranslation(lng);
  const router = useRouter();
  const [modal, setModal] = useState('');
  console.log(modal);
  const onSubmit = (value) => {
    console.log(value);
  };

  // Prepare state for pagination function in table
  // const [filter] = useState({ page: 1, limit: 20 });

  return (
    <>
      <Card className="mb-2">
        <Typography className="text-lg font-bold">
          {t('สร้างคำสั่งซื้อ')}
        </Typography>
      </Card>
      <Card className="mb-2">
        <Typography className="text-lg font-bold mb-2">
          {t('สมาชิก')}
        </Typography>
        <Button
          style={{ color: '#00AFF0' }}
          className="w-full"
          onClick={() => setModal('add')}
        >
          เลือกสมาชิก
        </Button>
      </Card>
      <Card
        style={{
          minHeight: '70vh',
        }}
      >
        <OrderTable t={t} />
      </Card>
      <Row justify="space-between">
        <Col>
          <Button
            onClick={() => router.back()}
            type="primary"
            className="w-[300px] h-[50px] mt-6 bg-[black]"
          >
            ยกเลิก
          </Button>
        </Col>
        <Col>
          <Button
            type="primary"
            className="w-[300px] h-[50px] mt-6 bg-[#00AFF0]"
          >
            ยืนยันสั่งซื้อ
          </Button>
        </Col>
      </Row>
      {modal === 'add' && (
        <AddMemberModal
          open={modal === 'add'}
          setOpen={setModal}
          onSubmit={onSubmit}
        />
      )}
    </>
  );
};

export default AddPurchaseTable;

AddPurchaseTable.propTypes = {
  lng: PropTypes.string,
};
