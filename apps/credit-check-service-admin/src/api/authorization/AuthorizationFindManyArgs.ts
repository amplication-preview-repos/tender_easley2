import { AuthorizationWhereInput } from "./AuthorizationWhereInput";
import { AuthorizationOrderByInput } from "./AuthorizationOrderByInput";

export type AuthorizationFindManyArgs = {
  where?: AuthorizationWhereInput;
  orderBy?: Array<AuthorizationOrderByInput>;
  skip?: number;
  take?: number;
};
