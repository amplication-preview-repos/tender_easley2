import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type CreditCheckCreateInput = {
  checkDate?: Date | null;
  creditLimit?: number | null;
  creditScore?: number | null;
  customer?: CustomerWhereUniqueInput | null;
};
