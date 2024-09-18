import { Space } from 'antd';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import MemberForm from './memberForm';

const MemberFormPage = async ({ params: { lng } }) => {
  const session = await getServerSession();
  if (!session) {
    redirect(`/${lng}/login`);
  }

  return (
    <>
      <Space direction="vertical" size="large" className="w-full">
        <MemberForm lng={lng} />
      </Space>
    </>
  );
};

export default MemberFormPage;
