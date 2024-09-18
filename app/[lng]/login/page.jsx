import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import LoginForm from './form';

const LoginPage = async ({ params: { lng } }) => {
  const session = await getServerSession();
  if (session) {
    redirect(`/${lng}/dashboard`);
  }
  return (
    <>
      <LoginForm lng={lng} />
    </>
  );
};

export default LoginPage;
