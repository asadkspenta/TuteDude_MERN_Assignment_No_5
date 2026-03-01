import { ProductContext } from "./ProductContext";
import useFetch from "../hooks/useFetch";

const ProductProvider = ({ children }) => {
  const { data, loading, error, isOnline } = useFetch(
    "https://api.escuelajs.co/api/v1/products",
  );

  return (
    <ProductContext.Provider value={{ data, loading, error, isOnline }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
