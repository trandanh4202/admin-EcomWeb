import React from 'react';
import styles from './layout.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Navbar from '~/components/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '~/components/footer/Footer';
import Header from '~/components/header/Header';
import SidebarLeft from '~/components/sidebar/Sidebar';
const cx = classNames.bind(styles);

const Layout = () => {
  return (
    <>
      <div className={cx('main')}>
        <SidebarLeft />
        <div className={cx('content')}>
          <Header />
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
