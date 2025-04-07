import Navbar from "./components/navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Contact from "./components/pages/Contact";
import Team from "./components/pages/Team";
import Profile from "./components/pages/Profile";

import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import Searchterm from "./components/pages/Searchterm";
import Cartitem from "./components/pages/Cartitem";
import ProductDetails from "./components/pages/ProductDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <Contact />
        </>
      ),
    },
    {
      path: "/team",
      element: (
        <>
          <Navbar />
          <Team />
        </>
      ),
    },
    {
      path: "/profile",
      element: (
        <>
          <Navbar />
          <Profile />
        </>
      ),
    },
    {
      path: "/product",
      element: <Product />,
    },
    {
      path: "/product/:id",
      element: (
        <>
          <Navbar />
          <ProductDetails />
        </>
      ),
    },

    {
      path: "/search/:term",
      element: (
        <>
          <Navbar />
          <Searchterm />
        </>
      ),
    },
    {
      path: "/cartitem",
      element: <Cartitem />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
