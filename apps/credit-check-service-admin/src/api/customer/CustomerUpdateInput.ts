import { AuthorizationUpdateManyWithoutCustomersInput } from "./AuthorizationUpdateManyWithoutCustomersInput";
import { CreditCheckUpdateManyWithoutCustomersInput } from "./CreditCheckUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  authorizations?: AuthorizationUpdateManyWithoutCustomersInput;
  creditChecks?: CreditCheckUpdateManyWithoutCustomersInput;
  dateOfBirth?: Date | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
};
