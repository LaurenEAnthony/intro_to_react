//PARENT
import React from "react";
import presidentsArray from "./PresidentsArray";
import President from "./President";

const Presidents = () => {
  return (
    <div>
      {presidentsArray.map((president) => (
        <President first={president.first} />
      ))}
    </div>
  );
};
export default Presidents;
