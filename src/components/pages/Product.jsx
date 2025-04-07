import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";
import Navbar from "../navbar/Navbar";

const Product = () => {
  const [apidata, setApidata] = useState([]);
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);

  const addToCart = (id, image, title, category, price) => {
    const obj = {
      id,
      image,
      title,
      category,
      price,
    };

    setCart([...cart, obj]);

    console.log(cart);
    toast.success("product added on your cart..", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  useEffect(() => {
    const apifromdata = async () => {
      const api = await fetch("https://fakestoreapi.com/products");
      const data = await api.json();
      console.log("Fetched products:", data);
      setApidata(data);
    };

    apifromdata();
  }, []);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />{" "}
      <div className="flex gap-5 flex-wrap w-full justify-center mt-25 mb-10">
        {apidata.map((product) => (
          <div
            key={product.id}
            className="bg-slate-200 cursor-pointer flex flex-col text-center justify-center h-[450px] w-[300px] rounded-md shadow-md hover:shadow-xl transition-shadow duration-300 hover:bg-red-200"
          >
            <div className="flex justify-center p-4">
              <img
                src={product.image}
                alt={product.title}
                className="object-contain h-[190px] w-[200px]"
                onClick={() =>
                  navigate(`/product/${encodeURIComponent(product.id)}`)
                }
              />
            </div>
            <div className="font-bold text-sm px-2 mt-2 line-clamp-2">
              {product.title}
            </div>
            <div className="text-gray-500 text-sm mt-1">{product.category}</div>
            <div className="font-semibold text-lg mt-1">{product.price} ₹</div>
            <div className="text-sm text-gray-600">
              Rating: {product.rating.count}
            </div>
            <div className="flex justify-center gap-4 mt-4 font-bold">
              <button
                className="bg-gray-400 px-6 py-2 rounded-full  transition-colors cursor-pointer hover:border-2"
                onClick={() =>
                  addToCart(
                    product.id,
                    product.image,
                    product.title,
                    product.category,
                    product.price
                  )
                }
              >
                Add
              </button>
              <button className="bg-yellow-400 px-6 py-2 rounded-full hover:border-2 transition-colors cursor-pointer">
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
      <Navbar cart={cart} />
    </>
  );
};

export default Product;

Product.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};
