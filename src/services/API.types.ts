export interface ProductPayload {
  id: number;
  name: string;
  price: number;
}

export interface DataReq {
  status: string;
  data: ProductPayload[];
}

/* export type CreateTodoPayload = Omit<Product, "id">;
export type UpdateTodoPayload = Partial<CreateTodoPayload>; */
