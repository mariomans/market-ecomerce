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
import { faEye, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslation } from '@/app/i18n/client';
import { initialPagination } from '@/models/shared';

const mockData = [
  {
    key: '1',
    create_at: '14/05/2023 13:00:00',
    order_id: '12345789',
    member_id: '12333',
    amount: 170.0,
    purchase_by: 'นาย เอ นาม บี',
    responsible_name: 'Admin 1',
    status: 'product_pending',
  },
];

const PurchaseTable = ({ lng }) => {
  const { t } = useTranslation(lng);
  const router = useRouter();

  // Prepare state for pagination function in table
  // const [filter] = useState({ page: 1, limit: 20 });

  const columns = [
    {
      title: 'วันที่',
      dataIndex: 'create_at',
      key: 'create_at',
    },
    {
      title: 'หมายเลชคำสั่งซื้อ',
      dataIndex: 'order_id',
      key: 'order_id',
    },
    {
      title: 'ผู้ซื้อ',
      dataIndex: 'purchase_by',
      key: 'purchase_by',
    },
    {
      title: 'หมายเลขสมาชิก',
      dataIndex: 'member_id',
      key: 'member_id',
      align: 'center',
    },
    {
      title: 'จำนวนเงิน',
      dataIndex: 'amount',
      key: 'amount',
      align: 'center',
    },
    {
      title: 'ผู้รับผิดชอบ',
      dataIndex: 'responsible_name',
      key: 'responsible_name',
      align: 'center',
    },
    {
      title: 'สถานะ',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      render: (value) => (
        <Typography style={{ color: '#FF8A00' }}>{t(value)}</Typography>
      ),
    },
    {
      title: 'Actions',
      key: 'action',
      width: '10%',
      align: 'center',
      render: (value) => (
        <Space size="middle">
          <FontAwesomeIcon
            style={{ color: '#00AFF0', cursor: 'pointer' }}
            icon={faEye}
            onClick={() =>
              router.push(`/${lng}/purchase/view?id=${value.order_id}`)
            }
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
              {t('จัดการคำสั่งซื้อ')}
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
              {t('รายการสินค้า')}
            </Typography>
          </Col>
          <Col>
            <Link href={`/${lng}/purchase/add`}>
              <Button type="primary" className="bg-[#00B247]">
                สร้างคำสั่งซื้อ
              </Button>
            </Link>
          </Col>
          <Divider dashed className="mt-2" />
        </Row>
        <Table
          columns={columns}
          dataSource={mockData}
          pagination={initialPagination(mockData)}
          scroll={{ x: 1200 }}
        />
      </Card>
    </>
  );
};

export default PurchaseTable;

PurchaseTable.propTypes = {
  lng: PropTypes.string,
};
