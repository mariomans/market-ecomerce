import { Space } from 'antd';
import React from 'react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import PurchaseTable from './purchaseTable';

const PurchaseManagementPage = async ({ params: { lng } }) => {
  const session = await getServerSession();
  if (!session) {
    redirect(`/${lng}/login`);
  }
  return (
    <Space direction="vertical" size="large" className="w-full">
      <PurchaseTable lng={lng} />
    </Space>
  );
};

export default PurchaseManagementPage;
