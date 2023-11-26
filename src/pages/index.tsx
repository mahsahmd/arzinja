import Accordion from "@/components/accordion";
import Tab from "@/components/tab";
import { useProductsService } from "@/services/use-products-service";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import MyMap from "@/components/map";

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
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const handleOnTabClick = (value: string) => {
    setActiveTab(value);
  };
  const onSubmitLocation = () => {
    setModalIsOpen(false);
    setActiveTab(`Active Orders`);
  };
  const { data, isLoading } = useProductsService();
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
        <>
          {data?.categories.map((item) => {
            return (
              <Accordion key={item.name} title={item.name}>
                {item.products.map((product) => {
                  return (
                    <>
                      <p key={item.name}>{product.name}</p>
                      <button onClick={() => setModalIsOpen(true)}>buy</button>
                    </>
                  );
                })}
              </Accordion>
            );
          })}
        </>
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
