import { SortOrder } from "../../util/SortOrder";

export type AuthorizationOrderByInput = {
  authCode?: SortOrder;
  authDate?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
