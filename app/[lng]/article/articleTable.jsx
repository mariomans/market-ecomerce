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
import { useTranslation } from '@/app/i18n/client';
import { initialPagination } from '@/models/shared';

const mockData = [
  {
    key: '1',
    create_at: '14/05/2023 13:00:00',
    article: 'เปิดร้านเครื่องเขียน กิ๊ฟช็อป คำแนะนำในการเปิดร้านใหม่',
    status: 'Publish',
  },
  {
    key: '2',
    create_at: '14/05/2023 13:00:00',
    article: 'เปิดร้านเครื่องเขียน กิ๊ฟช็อป คำแนะนำในการเปิดร้านใหม่',
    status: 'Draft',
  },
];

const ArticleTable = ({ lng }) => {
  const { t } = useTranslation(lng);

  // Prepare state for using pagination
  // const [filter] = useState({ page: 1, limit: 20 });

  const columns = [
    {
      title: 'วันที่',
      dataIndex: 'create_at',
      key: 'create_at',
      align: 'center',
    },
    {
      title: 'ชื่อบทความ',
      dataIndex: 'article',
      key: 'article',
      align: 'center',
    },
    {
      title: 'status',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      render: (value) => {
        let color = '#00AFF0';
        if (value === 'Publish') {
          color = '#00B247';
        }
        return <Typography style={{ color: color }}>{value}</Typography>;
      },
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
          <Link href={`/${lng}/article/view?id=${value.member_id}`}>
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
              {t('จัดการบทความ')}
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
              {t('รายการบทความ')}
            </Typography>
          </Col>
          <Col>
            <Link href={`/${lng}/article/view`}>
              <Button type="primary" className="bg-[#00B247]">
                เพิ่มบทความ
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

export default ArticleTable;

ArticleTable.propTypes = {
  lng: PropTypes.string,
};
