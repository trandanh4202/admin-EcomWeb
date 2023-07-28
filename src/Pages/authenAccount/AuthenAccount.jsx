import React from 'react';
import styles from './authenaccount.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Box, Typography, useTheme } from '@mui/material';
import Title from '~/components/title/Title';
import { tokens } from '~/theme/Theme';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { mockDataTeam } from '~/data/mockData';
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  ManageSearchOutlined,
  SecurityOutlined,
} from '@mui/icons-material';

const cx = classNames.bind(styles);

const AuthenAccount = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'access',
      headerName: 'Access Level',
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={access === 'admin' ? colors.greenAccent[600] : colors.greenAccent[700]}
            borderRadius="4px"
          >
            {access === 'admin' && <AdminPanelSettingsOutlined />}
            {access === 'manger' && <SecurityOutlined />}
            {access === 'user' && <LockOpenOutlined />}
            <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box m="20px">
      <Title title="Manager Account" subtitle="Manager Authen of Account" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-columnHeaders': {
            border: 'none',
          },
          '& .MuiDataGrid-columnHeaderTitle': {
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-columnHeadersInner': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
          },
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default AuthenAccount;
