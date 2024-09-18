import { Card, Col, Row, Space, Typography } from 'antd';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { dashboardData } from '@/models/mockData';

const Dashboard = async ({ params: { lng } }) => {
  const session = await getServerSession();
  if (!session) {
    redirect(`/${lng}/login`);
  }

  return (
    <Space direction="vertical" className="w-full">
      <Row gutter={10}>
        {dashboardData.map((data, i) => (
          <Col key={i} xs={8} lg={6}>
            <Card
              className="h-150px font-bold"
              bodyStyle={{ padding: 15, height: 150 }}
            >
              <Typography className="flex justify-end">{data.name}</Typography>
              <Typography className="flex text-3xl justify-center pt-6">
                {data.value}
              </Typography>
            </Card>
          </Col>
        ))}
      </Row>
      <Card className="bg-[#D9D9D9] flex items-center justify-center h-[500px]">
        <span className="text-bold text-3xl">กราฟแสดงรายรับ</span>
      </Card>
      <Card className="bg-[#D9D9D9] flex items-center justify-center h-[500px]">
        <span className="text-bold text-3xl">กราฟแสดงยอดคำสั่งซื้อ</span>
      </Card>
    </Space>
  );
};

export default Dashboard;
