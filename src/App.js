import { RouterProvider } from 'react-router-dom';
import router from './Router/router';
import '~/styles/globalStyles.scss';
import '~/index.scss';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, ColorModelContext, themeSettings, useMode } from './theme/Theme';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import { useState } from 'react';
function App() {
  // const [theme, colorMode] = useMode();
  // const [isSidebar, setIsSidebar] = useState(true);

  const colorMode = useSelector((state) => state.colorMode);
  const theme = createTheme(themeSettings(colorMode));
  return (
    <>
      {/* <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </ColorModeContext.Provider> */}

      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
