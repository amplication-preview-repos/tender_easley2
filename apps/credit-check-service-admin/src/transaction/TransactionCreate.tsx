import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { AuthorizationTitle } from "../authorization/AuthorizationTitle";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="authCode" source="authCode" />
        <ReferenceInput
          source="authorization.id"
          reference="Authorization"
          label="Authorization"
        >
          <SelectInput optionText={AuthorizationTitle} />
        </ReferenceInput>
        <NumberInput label="transactionAmount" source="transactionAmount" />
        <DateTimeInput label="transactionDate" source="transactionDate" />
      </SimpleForm>
    </Create>
  );
};
