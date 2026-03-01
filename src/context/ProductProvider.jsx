import { ProductContext } from "./ProductContext";
import useFetch from "../hooks/useFetch";

const ProductProvider = ({ children }) => {
  const { data, loading, error, isOnline } = useFetch(
    import.meta.env.VITE_API_URL,
  );

  return (
    <ProductContext.Provider value={{ data, loading, error, isOnline }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
