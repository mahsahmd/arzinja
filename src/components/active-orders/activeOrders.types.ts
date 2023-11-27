export interface Order {
  id: number;
  product: string;
  amount: number;
  status: StatusType;
}

export interface Orders {
  orders: Order[];
}

export type StatusType = "pending" | "in-proccess" | "delivery" | "delivered";
