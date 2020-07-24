import React, { useState, Fragment } from "react";

const ClickCounter = () => {
  const [clickCount, setClickCount] = useState(0);
  const [name, setName] = useState("");
  function handleClick() {
    console.log("I was clicked");
    setClickCount(clickCount + 1);
  }
  return (
    <Fragment>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <br />
      <button onClick={handleClick}>Click Me</button>
      <p>
        {name} clicked {clickCount} times
      </p>
    </Fragment>
  );
};

export default ClickCounter;
