import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { Test8List } from "./test8/Test8List";
import { Test8Create } from "./test8/Test8Create";
import { Test8Edit } from "./test8/Test8Edit";
import { Test8Show } from "./test8/Test8Show";
import { MorList } from "./mor/MorList";
import { MorCreate } from "./mor/MorCreate";
import { MorEdit } from "./mor/MorEdit";
import { MorShow } from "./mor/MorShow";
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
        title={"authentication"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Test8"
          list={Test8List}
          edit={Test8Edit}
          create={Test8Create}
          show={Test8Show}
        />
        <Resource
          name="Mor"
          list={MorList}
          edit={MorEdit}
          create={MorCreate}
          show={MorShow}
        />
      </Admin>
    </div>
  );
};

export default App;
