import { Authorization } from "../authorization/Authorization";

export type Transaction = {
  authCode: string | null;
  authorization?: Authorization | null;
  createdAt: Date;
  id: string;
  transactionAmount: number | null;
  transactionDate: Date | null;
  updatedAt: Date;
};
