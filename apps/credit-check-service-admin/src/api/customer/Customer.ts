import { Authorization } from "../authorization/Authorization";
import { CreditCheck } from "../creditCheck/CreditCheck";

export type Customer = {
  authorizations?: Array<Authorization>;
  createdAt: Date;
  creditChecks?: Array<CreditCheck>;
  dateOfBirth: Date | null;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  updatedAt: Date;
};
