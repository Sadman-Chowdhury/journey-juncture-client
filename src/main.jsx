import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AddTouristSpot from './components/AddTouristSpot/AddTouristSpot';
import TouristSpotDetail from './components/TouristSpotDetail/TouristSpotDetail';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './components/routes/PrivateRoute';
import Mylist from './components/MyList/Mylist';
import UpdateTouristSpot from './components/UpdateTouristSpot/UpdateTouristSpot';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('http://localhost:3000/touristSpot')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/addTouristSpot",
        element: <PrivateRoute><AddTouristSpot></AddTouristSpot></PrivateRoute>
      },
      {
        path: "/touristSpotDetail/:id",
        element: <PrivateRoute><TouristSpotDetail></TouristSpotDetail></PrivateRoute>,
        loader: ({params})=>fetch(`http://localhost:3000/touristSpot/${params.id}`)
      },
      {
        path: "/myList",
        element: <PrivateRoute><Mylist></Mylist></PrivateRoute>,
        loader: ()=>fetch('http://localhost:3000/touristSpot')
      },
      {
        path: "/myList/updateTouristSpot/:id",
        element: <PrivateRoute><UpdateTouristSpot></UpdateTouristSpot></PrivateRoute>,
        loader: ({params})=>fetch(`http://localhost:3000/touristSpot/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
