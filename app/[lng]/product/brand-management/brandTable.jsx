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
import { useTranslation } from '@/app/i18n/client';
import CategoryFormModal from '@/components/modal/categoryFormModal';

const mockData = [
  {
    key: '1',
    name: 'Standard',
  },
  {
    key: '2',
    name: 'OLFA',
  },
];

const BrandTable = ({ lng }) => {
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
      title: 'ชื่อแบรนด์',
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
      <Card>
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
        <Typography className="font-bold mb-4">
          {t('brand')}
        </Typography>
        <Table
          size="small"
          columns={columns}
          dataSource={mockData}
          pagination={false}
        />
      </Card>
      {modal === 'add' && (
        <CategoryFormModal open={modal === 'add'} setOpen={setModal} />
      )}
    </>
  );
};

export default BrandTable;

BrandTable.propTypes = {
  lng: PropTypes.string,
};
