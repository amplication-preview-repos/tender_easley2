import { Authorization as TAuthorization } from "../api/authorization/Authorization";

export const AUTHORIZATION_TITLE_FIELD = "authCode";

export const AuthorizationTitle = (record: TAuthorization): string => {
  return record.authCode?.toString() || String(record.id);
};
