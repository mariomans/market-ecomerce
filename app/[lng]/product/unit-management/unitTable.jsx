'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Card,
  Col,
  Divider,
  Row,
  Space,
  Table,
  Typography,
} from 'antd';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import AddFormModal from './addFormModal';
import { useTranslation } from '@/app/i18n/client';

const mockData = [
  {
    key: '1',
    name: 'ชิ้น',
    amount: '1',
  },
  {
    key: '2',
    name: '10/กล่อง',
    amount: '10',
  },
];

const UnitTable = ({ lng }) => {
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
      title: 'ชื่อหน่วย',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'จำนวน (ชิ้น)',
      dataIndex: 'amount',
      key: 'amount',
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
            fontSize={20}
          />
          <FontAwesomeIcon
            style={{ color: 'red' }}
            icon={faTrashCan}
            fontSize={20}
          />
        </Space>
      ),
    },
  ];
  return (
    <>
      <Card className="mb-2">
        <Col xs={24} lg={12}>
          <Typography className="text-lg font-bold">
            {t('จัดการหน่วยนับ')}
          </Typography>
        </Col>
      </Card>
      <Card
        style={{
          minHeight: '100vh',
        }}
      >
        <Row justify="end">
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
              เพิ่มแบรนด์
            </Button>
          </Col>
          <Divider dashed className="mt-2" />
        </Row>
        <Typography className="font-bold mb-4">{t('unit')}</Typography>
        <Table
          size="small"
          columns={columns}
          dataSource={mockData}
          pagination={false}
        />
      </Card>
      {modal === 'add' && (
        <AddFormModal open={modal === 'add'} setOpen={setModal} />
      )}
    </>
  );
};

export default UnitTable;

UnitTable.propTypes = {
  lng: PropTypes.string,
};
