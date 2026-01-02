import React from "react";
import Form from "./components/useState/Form";
import UseState from "./components/useState/UseState";
import UseState2 from "./components/useState/UseState2";
import UseEffect from "./components/useEffect/UseEffect";
import UseEffect1 from "./components/useEffect/UseEffect1";
import UseCallback from "./components/useCallback/UseCallback";
// import MyComponent from "./components/customHooks/MyComponent";
import Component1 from "./components/customHooks/example2/Component1";
import Component2 from "./components/customHooks/example2/Component2";
import Posts from "./components/customHooks/example3/Posts";
import Users from "./components/customHooks/example3/Users";
import UsersList from "./components/customHooks/example4/UsersList";
import UsersCount from "./components/customHooks/example4/UsersCount";
import UsersRefetch from "./components/customHooks/example4/UsersRefetch";

import NameContext from "./components/useContext/example1/NameContext";
import GrandChild from "./components/useContext/example1/GrandChild";
import Dashboard from "./components/useContext/example2/Dashboard";
import UseMemo from "./components/useMemo/UseMemo";
import UseDefferedValue from "./components/useDefferedvalue/UseDefferedValue";
import PassingProps from "./components/Props/PassingProps";

const App = () => {
  return (
    <div>
      {/* <Form />
      <UseState />
      <UseState2 /> */}

      {/* <UseEffect /> */}

      {/* <UseEffect1 /> */}
      {/* <UseCallback /> */}

      {/* <MyComponent /> */}
      {/* 
      <Component1 />
      <Component2 /> */}

      {/* <Users />
      <Posts /> */}

      {/* <UsersList />
      <UsersCount />
      <UsersRefetch /> */}

      {/* <NameContext.Provider value="Alish">
        <GrandChild />
      </NameContext.Provider> */}

      {/* <Dashboard />

      <UseMemo /> */}

      {/* <UseDefferedValue /> */}
      <PassingProps />
    </div>
  );
};

export default App;
