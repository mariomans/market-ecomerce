import { Space } from 'antd';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import ProductList from './productList';

const ProductManagementPage = async ({ params: { lng } }) => {
  const session = await getServerSession();
  if (!session) {
    redirect(`/${lng}/login`);
  }

  return (
    <>
      <Space direction="vertical" size="large" className="w-full">
        <ProductList lng={lng} />
      </Space>
    </>
  );
};

export default ProductManagementPage;
