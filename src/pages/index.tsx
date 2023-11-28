import Tab from "@/components/tab";
// import { useProductsService } from "@/services/use-products-service";
import React, { useState } from "react";
import { Products } from "@/constants/mockData";
import ProductsTab from "@/components/products";
import ActiveOrders from "@/components/active-orders";
import { HomePage, TabsWrapper } from "@/styles/homepage.styled";

const Home = () => {
  const tabItems = [{ name: "Categories" }, { name: "Active Orders" }];
  const [activeTab, setActiveTab] = useState("Categories");

  const handleOnTabClick = (value: string) => {
    setActiveTab(value);
  };
  const onSubmitLocation = () => {
    setActiveTab(`Active Orders`);
  };
  // const { data, isLoading } = useProductsService();
  const data = Products;
  return (
    <HomePage>
      <TabsWrapper>
        {tabItems.map((item) => (
          <Tab
            key={item.name}
            label={item.name}
            active={item.name === activeTab ? "true" : "false"}
            onClick={() => handleOnTabClick(item.name)}
          />
        ))}
      </TabsWrapper>

      {activeTab === "Categories" && (
        <ProductsTab
          data={data?.categories}
          onSubmitLocation={onSubmitLocation}
        />
      )}
      {activeTab === "Active Orders" && <ActiveOrders />}
    </HomePage>
  );
};

export default Home;
