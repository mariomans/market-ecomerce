'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Col, Divider, Row, Space, Typography } from 'antd';
import PropTypes from 'prop-types';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { useSearchParams } from 'next/navigation';
import ProductTable from './productTable';
import { useTranslation } from '@/app/i18n/client';

const PurchaseDetail = ({ lng }) => {
  const { t } = useTranslation(lng);
  const params = useSearchParams();
  const id = params.get('id');
  // Prepare state for pagination function in table
  // const [filter] = useState({ page: 1, limit: 20 });

  return (
    <>
      <Card className="mb-2">
        <Row justify="space-between" align={'middle'}>
          <Col>
            <Typography className="text-lg font-bold">
              {t('หมายเลขการสั่งซื้อ')} #{id}
            </Typography>
          </Col>
          <Col>
            <Space>
              <Button type="primary" className="bg-[#00AFF0]">
                รับ order
              </Button>
              <Button type="primary" className="bg-[#00B247]">
                อัพเดทสถานะ
              </Button>
            </Space>
          </Col>
        </Row>
      </Card>
      <Card className="mb-2">
        <Row>
          <Space>
            <Typography className="text-lg font-bold">
              {t('ที่อยู่จัดส่ง')}
            </Typography>
            <FontAwesomeIcon icon={faPrint} />
          </Space>
          <Divider dashed className="mt-2" />
        </Row>
        <Row className="font-bold">
          <Col md={24} lg={18}>
            <Row>
              <Col md={6} lg={3}>
                <Typography>ชื่อ - สกุล: </Typography>
              </Col>
              <Col md={18} lg={21}>
                <Typography>นายเอ นามบี</Typography>
              </Col>
            </Row>
            <Row>
              <Col md={6} lg={3}>
                <Typography>ที่อยู่จัดส่ง:</Typography>
              </Col>
              <Col md={18} lg={21}>
                <Typography>
                  455 ถนนเพชรเกษม แขวงบางหว้า เขตภาษีเจริญ กรุงเทพ 10160
                </Typography>
              </Col>
            </Row>
            <Row>
              <Col md={6} lg={3}>
                <Typography>เบอร์โทร: </Typography>
              </Col>
              <Col md={18} lg={21}>
                <Typography>08x-xxx-xxxx</Typography>
              </Col>
            </Row>
          </Col>
          <Col md={24} lg={6}>
            <Typography>หมายเลขสมาชิก: #12350</Typography>
          </Col>
        </Row>
      </Card>
      <Card
        style={{
          minHeight: '100vh',
        }}
      >
        <ProductTable t={t} />
      </Card>
    </>
  );
};

export default PurchaseDetail;

PurchaseDetail.propTypes = {
  lng: PropTypes.string,
};
