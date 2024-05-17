import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { AUTHORIZATION_TITLE_FIELD } from "../authorization/AuthorizationTitle";

export const TransactionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="authCode" source="authCode" />
        <ReferenceField
          label="Authorization"
          source="authorization.id"
          reference="Authorization"
        >
          <TextField source={AUTHORIZATION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="transactionAmount" source="transactionAmount" />
        <TextField label="transactionDate" source="transactionDate" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
