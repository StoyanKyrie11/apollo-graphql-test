import React from "react";
import DelayedQuery from "./components/DelayedQuery";
import DisplayLocations from "./components/DisplayLocations";

export default function App() {
  return (
    <>
      <h2>My first Apollo app 🚀</h2>
      <br />
      <DisplayLocations />
      <DelayedQuery />
    </>
  );
}
