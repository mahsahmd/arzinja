import Tabs from "@/components/tabs";
import React from "react";

const Home = () => {
  const tabItems = [{ name: "Categories" }, { name: "Active Orders" }];
  return (
    <div>
      <Tabs list={tabItems} defaultTab="Categories" />
    </div>
  );
};

export default Home;
