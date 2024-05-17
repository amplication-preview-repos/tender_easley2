import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { TransactionUpdateManyWithoutAuthorizationsInput } from "./TransactionUpdateManyWithoutAuthorizationsInput";

export type AuthorizationUpdateInput = {
  authCode?: string | null;
  authDate?: Date | null;
  customer?: CustomerWhereUniqueInput | null;
  transactions?: TransactionUpdateManyWithoutAuthorizationsInput;
};
