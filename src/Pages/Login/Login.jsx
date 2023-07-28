import React, { useState } from 'react';
import { Box, TextField, Button, Typography, useTheme, InputAdornment } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { tokens } from '~/theme/Theme';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [showPassword, setShowPassword] = useState(false);

  const handleFormSubmit = (values) => {
    console.log('Login data:', values);
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
      width="100%"
      p="20px"
      position="absolute"
    >
      <Box bgcolor={colors.grey[100]} p="20px" borderRadius="5px">
        <Typography color={colors.primary[600]} variant="h2">
          Login
        </Typography>

        <Formik initialValues={{ email: '', password: '' }} validationSchema={LoginSchema} onSubmit={handleFormSubmit}>
          {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit} fullWidth>
              <Box mb={2}>
                <TextField
                  name="email"
                  label="Email"
                  fullWidth
                  variant="filled"
                  margin="dense"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.Email && !!errors.Email}
                  helperText={touched.Email && errors.Email}
                />
              </Box>

              <Box mb={2} position="relative">
                <TextField
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  label="Password"
                  fullWidth
                  variant="filled"
                  margin="dense"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.Password && !!errors.Password}
                  helperText={touched.Password && errors.Password}
                />
                <Box
                  position="absolute"
                  right="10px"
                  top="50%"
                  transform="translateY(-50%)"
                  onClick={handleTogglePasswordVisibility}
                  sx={{
                    cursor: 'pointer',
                  }}
                >
                  {showPassword ? <Visibility fontSize="small" /> : <VisibilityOff fontSize="small" />}
                </Box>
              </Box>

              <Box mt={2}>
                <Button type="submit" variant="contained" color="primary">
                  <Typography>Login</Typography>
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default Login;
