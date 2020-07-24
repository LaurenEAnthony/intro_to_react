import React from "react";
import DisplayingVariables from "./DisplayingVariables/DisplayingVariables";
import ParentComponent from "./PassingProps/ParentComponent";
import Presidents from "./PassingProps/GeneratingList/Presidents";
import ClickCounter from "./Events/ClickCounter";
import TenLittleMonkeys from "./Events/TenLittleMonkeysJumpingOnBed";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      {/* <div>
        <p>Testing the App.js file</p>
      </div>
      <div>
        <p>Hello World</p>
      </div>
      <DisplayingVariables /> */}
      {/* <ParentComponent /> */}
      {/* <Presidents /> */}
      {/* <ClickCounter /> */}
      <TenLittleMonkeys />
    </div>
  );
}

export default App;
