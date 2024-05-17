import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { AuthorizationTitle } from "../authorization/AuthorizationTitle";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
