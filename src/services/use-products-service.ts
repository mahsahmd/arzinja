import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Apis } from "../constants/apis";

const ProductService = () => axios.get(Apis.products).then((res) => res.data);

export const useProductsService = () => {
  const { data, isLoading } = useQuery({
    queryKey: [Apis.products],
    queryFn: () => ProductService(),
  });
  return {
    isLoading,
    data,
  };
};
