import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Searchterm = () => {
  const { term } = useParams();
  const [searchproduct, setSearchproduct] = useState({});

  useEffect(() => {
    const apifromdata = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      const decodedTerm = decodeURIComponent(term).toLowerCase();

      // Find product where title includes the term
      const found = data.find((product) =>
        product.title.toLowerCase().includes(decodedTerm)
      );

      setSearchproduct(found);
    };

    apifromdata();
  }, [term]);

  if (!searchproduct) {
    return (
      <div className="text-center mt-20 text-red-600">No product found</div>
    );
  }

  return (
    <div className="p-10 max-w-3xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">
        {searchproduct.title}
      </h2>
      <div className="flex items-center gap-4 flex-col text-center border-2 rounded-md p-4">
        <img
          src={searchproduct.image}
          alt={searchproduct.title}
          className="w-64 h-64 object-contain"
        />

        <div>
          <p className="mb-2 text-gray-600 font-bold text-2xl">
            {searchproduct.category}
          </p>
          <p className="mb-4">{searchproduct.description}</p>
          <p className="text-xl font-semibold">{searchproduct.price} ₹</p>
        </div>
        <div className="flex gap-3">
          <Link to="/">
            <button className="bg-blue-500 p-3 rounded-lg font-bold hover:border-2 hover:border-red-400">
              Back
            </button>
          </Link>

          <button className="bg-yellow-500 p-3 rounded-lg font-bold hover:border-2 hover:border-red-400">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchterm;
