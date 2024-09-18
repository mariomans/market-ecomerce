import { Space } from 'antd';
import React from 'react';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import ArticleTable from './articleTable';

const ArticleManagementPage = async ({ params: { lng } }) => {
  const session = await getServerSession();
  if (!session) {
    redirect(`/${lng}/login`);
  }
  return (
    <Space direction="vertical" size="large" className="w-full">
      <ArticleTable lng={lng} />
    </Space>
  );
};

export default ArticleManagementPage;
