import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type CreditCheckUpdateInput = {
  checkDate?: Date | null;
  creditLimit?: number | null;
  creditScore?: number | null;
  customer?: CustomerWhereUniqueInput | null;
};
