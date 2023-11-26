import React from "react";
import Accordion from "../accordion";
import { Category } from "./products.types";

interface ProductsProps {
  data: Category[];
  onProductClick: () => void;
}
const ProductsTab = ({ data, onProductClick }: ProductsProps) => {
  return (
    <div>
      {data?.map((item) => {
        return (
          <Accordion key={item.name} title={item.name}>
            {item.products.map((product) => {
              return (
                <>
                  <p key={item.name}>{product.name}</p>
                  <button onClick={onProductClick}>buy</button>
                </>
              );
            })}
          </Accordion>
        );
      })}
    </div>
  );
};

export default ProductsTab;
