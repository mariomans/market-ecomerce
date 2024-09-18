'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Card,
  Col,
  Divider,
  Input,
  Row,
  Space,
  Table,
  Typography,
} from 'antd';
import PropTypes from 'prop-types';
import {
  faEye,
  faMagnifyingGlass,
  faPenToSquare,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from '@/app/i18n/client';
import { initialPagination } from '@/models/shared';

const mockData = [
  {
    key: '1',
    create_at: '14/05/2023 13:00:00',
    member_id: '50551813',
    name: 'นายเอ นามบี',
    level: 'ทั่วไป',
  },
  {
    key: '2',
    create_at: '14/05/2023 13:00:00',
    member_id: '50551813',
    name: 'นายเอ นามบี',
    level: 'สมาชิกระดับ 1',
  },
];

const MemberTable = ({ lng }) => {
  const { t } = useTranslation(lng);
  const [filter] = useState({ page: 1, limit: 20 });

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
      title: 'รหัสสมาชิก',
      dataIndex: 'member_id',
      key: 'member_id',
      align: 'center',
    },
    {
      title: 'ชื่อ-นามสกุล',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
    },
    {
      title: 'ระดับสมาชิก',
      dataIndex: 'level',
      key: 'level',
      align: 'center',
    },
    {
      title: 'สมัครเมื่อ',
      dataIndex: 'create_at',
      key: 'create_at',
      align: 'center',
    },
    {
      title: 'Actions',
      key: 'action',
      width: '10%',
      render: (value) => (
        <Space size="middle">
          <FontAwesomeIcon
            style={{ color: '#00AFF0' }}
            icon={faEye}
            fontSize={20}
          />
          <Link href={`/${lng}/member/management/view?id=${value.member_id}`}>
            <FontAwesomeIcon
              style={{ color: '#FF8A00', cursor: 'pointer' }}
              icon={faPenToSquare}
              fontSize={20}
            />
          </Link>
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
        <Row justify="space-between" align={'middle'}>
          <Col xs={24} lg={12}>
            <Typography className="text-lg font-bold">
              {t('จัดการสมาชิก')}
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
              <Input size="large" placeholder="ค้นหา..." bordered={false} />
              <FontAwesomeIcon icon={faMagnifyingGlass} fontSize={24} />
            </div>
          </Col>
        </Row>
      </Card>
      <Card
        style={{
          minHeight: '100vh',
        }}
      >
        <Row justify="space-between">
          <Col>
            <Typography className="text-lg font-bold">
              {t('รายชื่อสมาชิก')}
            </Typography>
          </Col>
          <Col>
            <Link href={`/${lng}/member/management/view`}>
              <Button type="primary" className="bg-[#00B247]">
                เพิ่มสมาชิก
              </Button>
            </Link>
          </Col>
          <Divider dashed className="mt-2" />
        </Row>
        <Table
          columns={columns}
          dataSource={mockData}
          pagination={initialPagination(mockData)}
          scroll={{ x: 900 }}
        />
      </Card>
    </>
  );
};

export default MemberTable;

MemberTable.propTypes = {
  lng: PropTypes.string,
};
