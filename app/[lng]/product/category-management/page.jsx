import { Space } from 'antd';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import CategoryList from './categoryList';

const CategoryManagementPage = async ({ params: { lng } }) => {
  const session = await getServerSession();
  if (!session) {
    redirect(`/${lng}/login`);
  }

  return (
    <>
      <Space direction="vertical" size="large" className="w-full">
        <CategoryList lng={lng} />
      </Space>
    </>
  );
};

export default CategoryManagementPage;
