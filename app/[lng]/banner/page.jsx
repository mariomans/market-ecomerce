import { Space, Typography } from 'antd';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import BannerTable from './bannerTable';
import SlideTable from './slideTable';
import ManageProduct from './manageProduct';
import CategoriesProduct from './categoriesProduct';
import { useTranslation } from '@/app/i18n';

const Banner = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng);
  const session = await getServerSession();
  if (!session) {
    redirect(`/${lng}/login`);
  }

  return (
    <>
      <Typography className="text-xl font-bold mb-4">
        {t('banner_management')}
      </Typography>
      <Space direction="vertical" size="large" className="w-full">
        <SlideTable lng={lng} />
        <BannerTable lng={lng} />
        <ManageProduct lng={lng} />
        <CategoriesProduct lng={lng} />
      </Space>
    </>
  );
};

export default Banner;
