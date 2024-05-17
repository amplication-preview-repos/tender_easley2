import { AuthorizationWhereUniqueInput } from "../authorization/AuthorizationWhereUniqueInput";

export type TransactionCreateInput = {
  authCode?: string | null;
  authorization?: AuthorizationWhereUniqueInput | null;
  transactionAmount?: number | null;
  transactionDate?: Date | null;
};
