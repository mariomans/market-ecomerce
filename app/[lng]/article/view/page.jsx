import { Space } from 'antd';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import ArticleForm from './articleForm';

const ArticleFormPage = async ({ params: { lng } }) => {
  const session = await getServerSession();
  if (!session) {
    redirect(`/${lng}/login`);
  }
  return (
    <>
      <Space direction="vertical" size="large" className="w-full">
        <ArticleForm lng={lng} />
      </Space>
    </>
  );
};

export default ArticleFormPage;
