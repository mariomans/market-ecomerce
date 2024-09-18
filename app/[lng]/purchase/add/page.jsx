import { Space } from 'antd';
import React from 'react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import AddPurchaseTable from './addPurchaseTable';

const AddPurchasePage = async ({ params: { lng } }) => {
  const session = await getServerSession();
  if (!session) {
    redirect(`/${lng}/login`);
  }

  return (
    <Space direction="vertical" size="large" className="w-full">
      <AddPurchaseTable lng={lng} />
    </Space>
  );
};

export default AddPurchasePage;
