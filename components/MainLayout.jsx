'use client';

import { Layout } from 'antd';
import PropTypes from 'prop-types';
import Nav from './Nav';

const { Content } = Layout;

const MainLayout = ({ children, session, lng }) => {
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      {session && (
        <Nav lng={lng}>
          <main>{children}</main>
        </Nav>
      )}
      {!session && (
        <Layout>
          <Content
            className="flex items-center justify-center bg-primary"
          >
            <main>{children}</main>
          </Content>
        </Layout>
      )}
    </Layout>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.any,
  session: PropTypes.object,
  lng: PropTypes.string,
};
