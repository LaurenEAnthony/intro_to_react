// 1. Create a Functional Component called TenLittleMonkeys
// 2. Use useState to set the initial Monkey Count to 10
// 3. Display how many monkeys are left in a sentece that says the following...
// 10 little monkeys jumping on the bed one fell off and hit his head. Mama called the doctor and the doctor said. No more monkeys jumping on the bed!
// 4. Once the count gets to zero display "All the Monkeys fell off"
// 5. Button clicking should take 1 away from the total monkey counter

import React, { useState } from "react"; //imrs + tab

const TenLittleMonkeys = () => {
  const [monkeys, setMonkeys] = useState(10);
  function buttonClick() {
    setMonkeys(monkeys - 1);
  }
  return monkeys > 0 ? (
    <div>
      <button onClick={buttonClick}>Click Me</button>
      <p>
        {monkeys} little monkeys jumping on the bed one fell off and hit his
        head. Mama called the doctor and the doctor said. No more monkeys
        jumping on the bed!
      </p>
    </div>
  ) : (
    <div>
      {/* <button onClick={() => setMonkeys(10)}>Reset</button> */}
      <p>All the monkeys fell off!</p>
    </div>
  );
};

export default TenLittleMonkeys;

// const TenLittleMonkeys = () => {
//     const [monkeyCount, setMonkeyCount] = useState(10);
//     const totalMonkeys =
//       monkeyCount > 0
//         ? `${monkeyCount} little monkeys jumping on the bed one fell off and hit his head. Mama called the doctor and the doctor said. No more monkeys jumping on the bed`
//         : `All the monkeys fell off`;
//     return (
//       <div>
//         <p>{totalMonkeys}</p>
//         <button onClick={() => setMonkeyCount(monkeyCount - 1)}>Click</button>
//         {monkeyCount <= 0 ? (
//           <button onClick={() => setMonkeyCount(10)}>Reset</button>
//         ) : null}
//       </div>
//     );
//   };
