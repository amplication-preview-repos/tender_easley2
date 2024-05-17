import { CreditCheck as TCreditCheck } from "../api/creditCheck/CreditCheck";

export const CREDITCHECK_TITLE_FIELD = "id";

export const CreditCheckTitle = (record: TCreditCheck): string => {
  return record.id?.toString() || String(record.id);
};
