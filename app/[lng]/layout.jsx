/* eslint-disable react/prop-types */
import { ConfigProvider } from 'antd';
import { dir } from 'i18next';

import { Inter } from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';
import { getServerSession } from 'next-auth';
import { languages } from '../i18n/settings';

import TanstackProvider from '@/components/providers/TanstackProvider';
import StyledComponentsRegistry from '@/styles/antdRegistry';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;
import '@/styles/globals.css';
import MainLayout from '@/components/MainLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Union Stationery',
  description: 'Union Stationery Admin',
};

export const generateStaticParams = async () => {
  return languages.map((lng) => ({ lng }));
};

const RootLayout = async ({ children, params: { lng } }) => {
  const session = await getServerSession();

  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>
        <TanstackProvider>
          <ConfigProvider
            theme={{
              token: { fontFamily: 'Inter, sans-serif' },
            }}
          >
            <StyledComponentsRegistry>
              <MainLayout session={session} lng={lng}>
                <main>{children}</main>
              </MainLayout>
            </StyledComponentsRegistry>
          </ConfigProvider>
        </TanstackProvider>
      </body>
    </html>
  );
};

export default RootLayout;
