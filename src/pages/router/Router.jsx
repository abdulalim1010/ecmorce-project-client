import {
  createBrowserRouter,
 
} from "react-router";
import MainLayout from "../mainlayout/MainLayout";
import Home from "../../components/Home";
import ProductDetails from "../../components/product/ProductDetails";
import Products from "../../components/product/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [{
      path: "/",
     Component:Home

    },
      {
        path: '/products',
        Component:Products
      
    },
      {
      path: "/product/:id",
      Component:ProductDetails
    }
    ]
  },
]);