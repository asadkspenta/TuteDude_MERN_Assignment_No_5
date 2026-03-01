import noImage from "../assets/nope-not-here.png";
import { ProductContext } from "../context/ProductContext";
import { useContext } from "react";

const ProductList = () => {
  const { data, loading, error, isOnline } =
    useContext(ProductContext);
console.log(data);
  return (
    <div className="min-h-screen bg-black text-white">

      {loading && (
        <div className="flex items-center justify-center h-[80vh] text-2xl">
          Loading...
        </div>
      )}

      {!isOnline && !loading && (
        <div className="flex items-center justify-center h-[80vh] text-2xl">
          No Internet Connection
        </div>
      )}

      {error && !loading && (
        <div className="flex items-center justify-center h-[80vh] text-2xl">
          {error}
        </div>
      )}

      {!loading && !error && isOnline && (
        <>
        <div className="sticky top-0 bg-black text-white text-3xl font-bold p-4 z-10">
          Photos
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 p-4">
          {data?.map((product) => (
            <div
              key={product.id}
              className="border-2 border-white p-4 aspect-square flex flex-col items-center justify-between hover:scale-105 transition-transform duration-300"
            >
              <div className="w-full h-3/4 flex items-center justify-center">
                <img
                  src={product.images?.[0] || noImage}
                  alt={product.title}
                  className="max-h-full object-contain"
                  onError={(e) => (e.target.src = noImage)}
                />
              </div>

              <p className="text-sm text-center mt-4 truncate w-full">
                {product.title}
              </p>
            </div>
          ))}
        </div>
      </>
      )}

    </div>
  );
};

export default ProductList;