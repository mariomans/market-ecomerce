import { Space } from 'antd';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import ProductForm from './productForm';

const AddProductPage = async ({ params: { lng } }) => {
  const session = await getServerSession();
  if (!session) {
    redirect(`/${lng}/login`);
  }

  return (
    <>
      <Space direction="vertical" size="large" className="w-full">
        <ProductForm lng={lng} />
      </Space>
    </>
  );
};

export default AddProductPage;
