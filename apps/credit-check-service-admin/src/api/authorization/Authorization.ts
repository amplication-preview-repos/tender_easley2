import { Customer } from "../customer/Customer";
import { Transaction } from "../transaction/Transaction";

export type Authorization = {
  authCode: string | null;
  authDate: Date | null;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
