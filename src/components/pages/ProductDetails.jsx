import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch individual product by id
    const fetchProduct = async () => {
      const api = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await api.json();
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (!product)
    return <div className="text-center mt-10 text-red-400">Loading...</div>;

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">{product.title}</h2>
      <div className=" flex items-center align-middle gap-3 flex-col text-center border-2 rounded-md p-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-64 h-64 object-contain"
        />

        <div>
          <p className="mb-2 text-gray-600 font-bold text-2xl">
            {product.category}
          </p>
          <p className="mb-4">{product.description}</p>
          <p className="text-xl font-semibold">{product.price} ₹</p>
          <p className="text-sm mt-2">Rating: {product.rating.rate}</p>
        </div>
        <div className=" flex gap-3">
          <Link to={"/"}>
            {" "}
            <button className=" bg-blue-500 p-3 rounded-lg cursor-pointer hover:border-2 hover:border-red-400 font-bold">
              Back
            </button>
          </Link>

          <button className=" bg-yellow-500 p-3 rounded-lg  cursor-pointer hover:border-2 font-bold hover:border-red-400">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
