import { Space } from 'antd';
import React from 'react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import PurchaseDetail from './detail';

const ViewPurchaseManagementPage = async ({ params: { lng } }) => {
  const session = await getServerSession();
  if (!session) {
    redirect(`/${lng}/login`);
  }

  return (
    <Space direction="vertical" size="large" className="w-full">
      <PurchaseDetail lng={lng} />
    </Space>
  );
};

export default ViewPurchaseManagementPage;
