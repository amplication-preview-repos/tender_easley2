import { AuthorizationListRelationFilter } from "../authorization/AuthorizationListRelationFilter";
import { CreditCheckListRelationFilter } from "../creditCheck/CreditCheckListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerWhereInput = {
  authorizations?: AuthorizationListRelationFilter;
  creditChecks?: CreditCheckListRelationFilter;
  dateOfBirth?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
};
