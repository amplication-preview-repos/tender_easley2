import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CreditCheckList } from "./creditCheck/CreditCheckList";
import { CreditCheckCreate } from "./creditCheck/CreditCheckCreate";
import { CreditCheckEdit } from "./creditCheck/CreditCheckEdit";
import { CreditCheckShow } from "./creditCheck/CreditCheckShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { TransactionList } from "./transaction/TransactionList";
import { TransactionCreate } from "./transaction/TransactionCreate";
import { TransactionEdit } from "./transaction/TransactionEdit";
import { TransactionShow } from "./transaction/TransactionShow";
import { AuthorizationList } from "./authorization/AuthorizationList";
import { AuthorizationCreate } from "./authorization/AuthorizationCreate";
import { AuthorizationEdit } from "./authorization/AuthorizationEdit";
import { AuthorizationShow } from "./authorization/AuthorizationShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CreditCheckService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="CreditCheck"
          list={CreditCheckList}
          edit={CreditCheckEdit}
          create={CreditCheckCreate}
          show={CreditCheckShow}
        />
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="Transaction"
          list={TransactionList}
          edit={TransactionEdit}
          create={TransactionCreate}
          show={TransactionShow}
        />
        <Resource
          name="Authorization"
          list={AuthorizationList}
          edit={AuthorizationEdit}
          create={AuthorizationCreate}
          show={AuthorizationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
