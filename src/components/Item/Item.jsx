import { Typography, useTheme } from '@mui/material';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { tokens } from '~/theme/Theme';
import { MenuItem } from 'react-pro-sidebar';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <NavLink to={to}>
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography variant="h6">{title}</Typography>
      </MenuItem>
    </NavLink>
  );
};
export default Item;
