import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  authCode?: SortOrder;
  authorizationId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  transactionAmount?: SortOrder;
  transactionDate?: SortOrder;
  updatedAt?: SortOrder;
};
