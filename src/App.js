import React, { useState } from "react";
import "./App.css";
import { AwesomeButtonProgress } from "react-awesome-button";
// import AwesomeButtonProgress from 'react-awesome-button/src/components/AwesomeButtonProgress';
import "react-awesome-button/dist/styles.css";

function App() {
  const [pickupline, setPickupline] = useState(false);

  const newPickupline = (next) => {
    setTimeout(function () {
      fetch("/api/line")
        .then((res) => res.json())
        .then((data) => {
          setPickupline(data.output);
        });
      next();
    }, 40);
  };

  return (
    <div className="App-header">
      774M version of Open AI's GPT-2 Model trained on various pick-up lines.
      Use at your own risk.
      <div style={{ top: "43%", position: "absolute" }}>{pickupline}</div>
      <AwesomeButtonProgress
        type="primary"
        size="large"
        action={(element, next) => newPickupline(next)}
        style={{
          position: "absolute",
          top: "57%",
          left: "50%",
          marginTop: "-50px",
          marginLeft: "-100px",
        }}
      >
        Generate
      </AwesomeButtonProgress>
      <div style={{ bottom: 20, position: "absolute" }}>
        Special Thanks to Twitter Users: @bestpickuplin3s, @iquoteHOT,
        @pickuplinebot_, @pickuplineig, & @pickupIines for the data.
      </div>
    </div>
  );
}

export default App;
