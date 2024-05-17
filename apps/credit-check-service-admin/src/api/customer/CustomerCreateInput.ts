import { AuthorizationCreateNestedManyWithoutCustomersInput } from "./AuthorizationCreateNestedManyWithoutCustomersInput";
import { CreditCheckCreateNestedManyWithoutCustomersInput } from "./CreditCheckCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  authorizations?: AuthorizationCreateNestedManyWithoutCustomersInput;
  creditChecks?: CreditCheckCreateNestedManyWithoutCustomersInput;
  dateOfBirth?: Date | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
};
