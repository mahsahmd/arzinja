import { Orders } from "@/components/active-orders/activeOrders.types";
import { Categories } from "@/components/products/products.types";

export const Products: Categories = {
  categories: [
    {
      id: 1,
      name: "Electronics",
      products: [
        {
          id: 101,
          name: "Smartphone",
          price: 499.99,
        },
        {
          id: 102,
          name: "Laptop",
          price: 899.99,
        },
      ],
    },
    {
      id: 2,
      name: "Clothing",
      products: [
        {
          id: 201,
          name: "T-Shirt",
          price: 19.99,
        },
        {
          id: 202,
          name: "Jeans",
          price: 39.99,
        },
      ],
    },
  ],
};

export const OrdersData: Orders = {
  orders: [
    {
      id: 1,
      product: "item 1",
      amount: 1,
      status: "in-proccess",
    },
    {
      id: 2,
      product: "item 2",
      amount: 1,
      status: "pending",
    },
  ],
};
