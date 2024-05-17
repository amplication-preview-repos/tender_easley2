import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { TransactionCreateNestedManyWithoutAuthorizationsInput } from "./TransactionCreateNestedManyWithoutAuthorizationsInput";

export type AuthorizationCreateInput = {
  authCode?: string | null;
  authDate?: Date | null;
  customer?: CustomerWhereUniqueInput | null;
  transactions?: TransactionCreateNestedManyWithoutAuthorizationsInput;
};
