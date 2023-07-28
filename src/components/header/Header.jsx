import {
  DarkModeOutlined,
  LightModeOutlined,
  NotificationsOutlined,
  PersonOutline,
  Search,
  Settings,
} from '@mui/icons-material';
import { Box, IconButton, InputBase, useTheme } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleColorMode } from '~/redux/colorModel/colorModeSlice';
import { ColorModeContext, tokens } from '~/theme/Theme';
const Header = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const mode = useSelector((state) => state.colorMode);

  const colorMode = useSelector((state) => state.colorMode);
  const dispatch = useDispatch();

  const handleToggleColorMode = () => {
    dispatch(toggleColorMode());
  };
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
        <InputBase
          sx={{
            ml: 2,
            flex: 1,
          }}
          placeholder="Search"
        />
        <IconButton type="button" sx={{ p: 1 }}>
          <Search />
        </IconButton>
      </Box>
      {/* ICON      */}
      <Box display="flex">
        <IconButton
          onClick={handleToggleColorMode}

          // onClick={colorMode.toggleColorMode}
        >
          {colorMode === 'dark' ? <DarkModeOutlined /> : <LightModeOutlined />}

          {/* {theme.palette.mode === 'dark' ? <DarkModeOutlined /> : <LightModeOutlined />} */}
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <Settings />
        </IconButton>
        <IconButton>
          <PersonOutline />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
