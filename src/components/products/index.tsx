import React from "react";
import Accordion from "../accordion";
import { Category } from "./products.types";
import { BuyButton, ProductItem, ProductName, ProductsWrapper } from "./styles";

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
            <ProductsWrapper>
              {item.products.map((product) => {
                return (
                  <ProductItem key={item.name}>
                    <ProductName>{product.name}</ProductName>
                    <BuyButton onClick={onProductClick}>buy</BuyButton>
                  </ProductItem>
                );
              })}
            </ProductsWrapper>
          </Accordion>
        );
      })}
    </div>
  );
};

export default ProductsTab;
