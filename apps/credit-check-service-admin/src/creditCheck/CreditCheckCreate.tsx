import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";

export const CreditCheckCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="checkDate" source="checkDate" />
        <NumberInput label="creditLimit" source="creditLimit" />
        <NumberInput step={1} label="creditScore" source="creditScore" />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
