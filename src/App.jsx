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

      <Component1 />
      <Component2 />
    </div>
  );
};

export default App;
