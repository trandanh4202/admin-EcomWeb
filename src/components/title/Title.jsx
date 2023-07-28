import React from 'react';
import styles from './title.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '~/theme/Theme';
const cx = classNames.bind(styles);
const Title = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ mb: '5px' }}>
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]} fontWeight="bold" sx={{ mb: '5px' }}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Title;
