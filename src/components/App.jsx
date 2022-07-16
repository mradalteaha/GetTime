import React, { useState } from "react";

function App() {
  var now = new Date().toLocaleTimeString("en-US", { hour12: false });
  const [time, getTime] = useState(now);

  //2. Given that you can get code to be called every second
  //using the setInterval method.
  //Can you get the time in your <h1> to update every second?

  //e.g. uncomment the code below to see Hey printed every second.

  function getPressed() {
    var newTime = new Date().toLocaleTimeString("en-US", { hour12: false });
    getTime(newTime);
  }

  function sayHionClick() {
    setInterval(getPressed, 1000);
  }

  console.log(time);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getPressed}>Get Time</button>
      <button onClick={sayHionClick}>Say Hi</button>
    </div>
  );
}

export default App;
