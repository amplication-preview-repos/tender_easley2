import { CreditCheckWhereInput } from "./CreditCheckWhereInput";
import { CreditCheckOrderByInput } from "./CreditCheckOrderByInput";

export type CreditCheckFindManyArgs = {
  where?: CreditCheckWhereInput;
  orderBy?: Array<CreditCheckOrderByInput>;
  skip?: number;
  take?: number;
};
