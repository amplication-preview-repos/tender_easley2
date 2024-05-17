import { Customer } from "../customer/Customer";

export type CreditCheck = {
  checkDate: Date | null;
  createdAt: Date;
  creditLimit: number | null;
  creditScore: number | null;
  customer?: Customer | null;
  id: string;
  updatedAt: Date;
};
