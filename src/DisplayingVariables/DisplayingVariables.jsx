//"imr" + tab
import React from "react";

// "sfc" + tab
const DisplayingVariables = () => {
  const movieCharacter = {
    name: "Han Solo",
    job: "pilot",
    bestFriend: "Chewy",
  };
  const { name, job, bestFriend } = movieCharacter;

  return (
    <div>
      <p>
        This is a story about {name} who was a {job} for 12 years. One of his
        best friends in the story is {bestFriend}.
      </p>
    </div>
  );
};

export default DisplayingVariables;
