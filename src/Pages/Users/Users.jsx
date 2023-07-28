import React from 'react';
import styles from './users.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

const Users = () => {
  return <div className={cx('Users')}>Users</div>;
};

export default Users;
