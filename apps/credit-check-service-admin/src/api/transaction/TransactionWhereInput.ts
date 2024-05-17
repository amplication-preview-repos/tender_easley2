import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AuthorizationWhereUniqueInput } from "../authorization/AuthorizationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TransactionWhereInput = {
  authCode?: StringNullableFilter;
  authorization?: AuthorizationWhereUniqueInput;
  id?: StringFilter;
  transactionAmount?: FloatNullableFilter;
  transactionDate?: DateTimeNullableFilter;
};
