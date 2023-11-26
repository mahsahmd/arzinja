import Accordion from "@/components/accordion";
import Tab from "@/components/tab";
// import { useProductsService } from "@/services/use-products-service";
import React, { useState } from "react";
import Modal from "react-modal";
import MyMap from "@/components/map";
import { Products } from "@/constants/mockData";
import ProductsTab from "@/components/products";

const customStyles = {
  content: {
    width: "400px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Home = () => {
  const tabItems = [{ name: "Categories" }, { name: "Active Orders" }];
  const [activeTab, setActiveTab] = useState("Categories");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOnTabClick = (value: string) => {
    setActiveTab(value);
  };
  const onSubmitLocation = () => {
    setModalIsOpen(false);
    setActiveTab(`Active Orders`);
  };
  // const { data, isLoading } = useProductsService();
  const data = Products;
  return (
    <div>
      {tabItems.map((item) => (
        <Tab
          key={item.name}
          label={item.name}
          active={item.name === activeTab ? "true" : "false"}
          onClick={() => handleOnTabClick(item.name)}
        />
      ))}
      {activeTab === "Categories" && (
        <ProductsTab
          data={data?.categories}
          onProductClick={() => setModalIsOpen(true)}
        />
      )}
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Example Modal"
      >
        <MyMap onSubmit={onSubmitLocation} />
      </Modal>
    </div>
  );
};

export default Home;
