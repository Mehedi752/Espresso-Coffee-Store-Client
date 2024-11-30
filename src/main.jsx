import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './AddCoffee.jsx';
import UpdateCoffee from './UpdateCoffee.jsx';
import Root from './Root.jsx';
import Error from './Error.jsx';
import Details from './Details.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import AuthProvider from './AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Users from './Users.jsx';
import UpdateProfile from './UpdateProfile.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import ForgotPassword from './ForgotPassword.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () => fetch("https://espresso-coffee-server-jade.vercel.app/coffees"),
      },
      {
        path: "/add-coffee",
        element: <AddCoffee></AddCoffee>
      },
      {
        path: "/update-coffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`https://espresso-coffee-server-jade.vercel.app/coffees/${params.id}`)
      },
      {
        path: "/coffee-details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({ params }) => fetch(`https://espresso-coffee-server-jade.vercel.app/coffees/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/users',
        element: <Users></Users>,
        loader: () => fetch("https://espresso-coffee-server-jade.vercel.app/users")
      },
      {
        path: '/users/update-profile/:id',
        element: <UpdateProfile></UpdateProfile>,
        loader: ({ params }) => fetch(`https://espresso-coffee-server-jade.vercel.app/users/${params.id}`)
      },
      {
        path: '/forgot-password',
        element: <ForgotPassword></ForgotPassword>
      }
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>,
)
