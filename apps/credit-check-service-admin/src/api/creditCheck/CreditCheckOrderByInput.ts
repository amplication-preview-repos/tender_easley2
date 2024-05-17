import { SortOrder } from "../../util/SortOrder";

export type CreditCheckOrderByInput = {
  checkDate?: SortOrder;
  createdAt?: SortOrder;
  creditLimit?: SortOrder;
  creditScore?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
