import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type CreditCheckWhereInput = {
  checkDate?: DateTimeNullableFilter;
  creditLimit?: FloatNullableFilter;
  creditScore?: IntNullableFilter;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
};
