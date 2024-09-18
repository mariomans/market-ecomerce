'use client';

import { Button, Grid, Layout, Menu } from 'antd';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Head from 'next/head';
import { Suspense } from 'react';
import { signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { siteConfig } from '@/models/siteConfig';
import { useTranslation } from '@/app/i18n/client';
import Loading from '@/app/[lng]/loading';

const { Header, Sider, Content, Footer } = Layout;
const { useBreakpoint } = Grid;

const Nav = ({ children, lng }) => {
  const { t } = useTranslation(lng);
  const { md = true } = useBreakpoint();
  return (
    <Layout>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Header
        className="p-10 bg-white"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Image
          src="/assets/images/union.png"
          priority
          width={163}
          height={64}
          alt="icon"
        />
        <Button
          onClick={() => {
            signOut();
            redirect(`/${lng}/login`);
          }}
        >
          {' '}
          ออกจากระบบ{' '}
        </Button>
      </Header>
      <Layout>
        <Sider
          width={md ? 280 : 220}
          style={{ border: 'none' }}
          className="bg-primary p-5"
          trigger={null}
          collapsible
        >
          <Menu
            className="bg-primary border-0 font-bold text-white"
            mode="inline"
            openKeys={['product', 'member']}
            // defaultSelectedKeys={['1']}
            items={siteConfig(t, lng)}
          />
        </Sider>
        <Layout>
          <Content
            style={{
              margin: '22px 20px',
              minHeight: 280,
            }}
          >
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
              padding: 16,
              color: 'white',
              backgroundColor: '#1E1E1E',
            }}
          >
            Copyright © 2023 Union Plus Stationery. All Rights Reserved.
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Nav;

Nav.propTypes = {
  children: PropTypes.any,
  lng: PropTypes.string,
};
