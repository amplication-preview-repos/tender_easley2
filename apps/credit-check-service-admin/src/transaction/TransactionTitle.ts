import { Transaction as TTransaction } from "../api/transaction/Transaction";

export const TRANSACTION_TITLE_FIELD = "authCode";

export const TransactionTitle = (record: TTransaction): string => {
  return record.authCode?.toString() || String(record.id);
};
