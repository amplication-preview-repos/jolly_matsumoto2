import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TestResultList } from "./testResult/TestResultList";
import { TestResultCreate } from "./testResult/TestResultCreate";
import { TestResultEdit } from "./testResult/TestResultEdit";
import { TestResultShow } from "./testResult/TestResultShow";
import { LabTestList } from "./labTest/LabTestList";
import { LabTestCreate } from "./labTest/LabTestCreate";
import { LabTestEdit } from "./labTest/LabTestEdit";
import { LabTestShow } from "./labTest/LabTestShow";
import { PatientList } from "./patient/PatientList";
import { PatientCreate } from "./patient/PatientCreate";
import { PatientEdit } from "./patient/PatientEdit";
import { PatientShow } from "./patient/PatientShow";
import { BookingList } from "./booking/BookingList";
import { BookingCreate } from "./booking/BookingCreate";
import { BookingEdit } from "./booking/BookingEdit";
import { BookingShow } from "./booking/BookingShow";
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
        title={"Healthcare Lab Booking"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="TestResult"
          list={TestResultList}
          edit={TestResultEdit}
          create={TestResultCreate}
          show={TestResultShow}
        />
        <Resource
          name="LabTest"
          list={LabTestList}
          edit={LabTestEdit}
          create={LabTestCreate}
          show={LabTestShow}
        />
        <Resource
          name="Patient"
          list={PatientList}
          edit={PatientEdit}
          create={PatientCreate}
          show={PatientShow}
        />
        <Resource
          name="Booking"
          list={BookingList}
          edit={BookingEdit}
          create={BookingCreate}
          show={BookingShow}
        />
      </Admin>
    </div>
  );
};

export default App;
