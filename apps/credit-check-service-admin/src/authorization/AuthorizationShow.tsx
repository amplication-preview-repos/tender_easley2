import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { AUTHORIZATION_TITLE_FIELD } from "./AuthorizationTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const AuthorizationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="authCode" source="authCode" />
        <TextField label="authDate" source="authDate" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Customer"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Transaction"
          target="authorizationId"
          label="Transactions"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
