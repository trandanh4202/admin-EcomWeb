import { createBrowserRouter } from 'react-router-dom';
import Layout from '~/layout/Layout';
import AuthenAccount from '~/Pages/authenAccount/AuthenAccount';
import Calendar from '~/Pages/calendar/Calendar';
import CreateProducts from '~/Pages/createProducts/CreateProducts';
import Dashboard from '~/Pages/Dashboard/Dashboard';
import Home from '~/Pages/Dashboard/Dashboard';
import Login from '~/Pages/Login/Login';
import ManageOrders from '~/Pages/manageOrders/ManageOrders';
import ManageProducts from '~/Pages/manageProducts/ManageProducts';
import Products from '~/Pages/Products/Products';
import Users from '~/Pages/Users/Users';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: 'Users',
        element: <Users />,
      },
      // {
      //   path: 'Products',
      //   element: <Products />,
      // },
      {
        path: 'team',
        element: <AuthenAccount />,
      },
      {
        path: 'orders',
        element: <ManageOrders />,
      },
      {
        path: 'products',
        element: <ManageProducts />,
      },
      {
        path: 'create-product',
        element: <CreateProducts />,
      },
      {
        path: 'calendar',
        element: <Calendar />,
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
]);

const publicRoutes = [];

const privateRoutes = [];
export default router;
