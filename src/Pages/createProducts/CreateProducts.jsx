import { Box, Button, MenuItem, TextField } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Title from '~/components/title/Title';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { uploadFile } from '~/redux/uploadSlice/uploadSlice';
import { createProduct } from '~/redux/productSlice/productSlice';
import axios from 'axios';

const CreateProducts = () => {
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();
  console.log('hello');

  const handleFormSubmit = async () => {
    try {
      if (selectedFile) {
        const response = await dispatch(uploadFile(selectedFile));
        const productData = {
          name: '2',
          description: '2',
          price: 100,
          imageUrl: response.payload, // Đặt URL ảnh từ API upload file ở đây
          unit: '2',
          quantity: 100,
          categoryId: '3f8d98cb-a695-4334-bec2-09008670c39a',
          brandId: '71d6e1f9-8c22-43e8-ad37-1609dd7bc61e',
        };
        await dispatch(createProduct(productData));
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
  return (
    <Box m="20px">
      <Title title="CREATE PRODUCTS" subtitle="Create a New PRODUCTS " />

      <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={checkoutSchema}>
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Name}
                name="Name"
                error={!!touched.Name && !!errors.Name}
                helperText={touched.Name && errors.Name}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                multiline
                rows={4}
                fullWidth
                variant="filled"
                type="text"
                label="Description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Description}
                name="Description"
                error={!!touched.Description && !!errors.Description}
                helperText={touched.Description && errors.Description}
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Price"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Price}
                name="Price"
                error={!!touched.Price && !!errors.Price}
                helperText={touched.Price && errors.Price}
                sx={{ gridColumn: 'span 1' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Quantity"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.number}
                name="number"
                error={!!touched.number && !!errors.number}
                helperText={touched.number && errors.number}
                sx={{ gridColumn: 'span 1' }}
              />
              <TextField
                fullWidth
                variant="filled"
                select
                label="Category"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Category}
                name="Category"
                defaultValue="EUR"
                error={!!touched.Category && !!errors.Category}
                helperText={touched.Category && errors.Category}
                sx={{ gridColumn: 'span 1' }}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                variant="filled"
                select
                label="Brand"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Brand}
                name="Brand"
                defaultValue="EUR"
                error={!!touched.Brand && !!errors.Brand}
                helperText={touched.Brand && errors.Brand}
                sx={{ gridColumn: 'span 1' }}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>{' '}
              <input
                type="file"
                onChange={(event) => {
                  setSelectedFile(event.target.files[0]);
                }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create new product
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  Name: yup.string().required('Name is required'),
  Description: yup.string().required('Description is required'),
  Price: yup.number().required('Price is required'),
  number: yup.number().required('Quantity is required'),
  Category: yup.string().required('Category is required'),
  Brand: yup.string().required('Brand is required'),
});
const initialValues = {
  Name: '',
  Description: '',
  Price: '',
  number: '',
  Category: '',
  Brand: '',
};

export default CreateProducts;
