import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const Home = async ({ params: { lng } }) => {
  const session = await getServerSession();
  if (!session) {
    redirect(`/${lng}/login`);
  }

  return <section></section>;
};

export default Home;
