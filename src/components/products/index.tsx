import React, { useState } from "react";
import Accordion from "../accordion";
import { Category } from "./products.types";
import {
  BuyButton,
  ProductItem,
  ProductName,
  ProductsWrapper,
  modalCustomStyles,
} from "./styles";
import Modal from "react-modal";
import MyMap from "@/components/map";

interface ProductsProps {
  data: Category[];
  onSubmitLocation: () => void;
}
const ProductsTab = ({ data, onSubmitLocation }: ProductsProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const onSubmit = () => {
    onSubmitLocation();
    setModalIsOpen(false);
  };
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
                    <BuyButton onClick={() => setModalIsOpen(true)}>
                      Buy
                    </BuyButton>
                  </ProductItem>
                );
              })}
            </ProductsWrapper>
          </Accordion>
        );
      })}
      <Modal
        style={modalCustomStyles}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Choose Location"
      >
        <MyMap onSubmit={onSubmit} />
      </Modal>
    </div>
  );
};

export default ProductsTab;
