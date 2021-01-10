import React from "react";

// props = {fav}

function Food({fav}){
  console.log(fav);
  return <h1>I like {fav}!</h1>
}

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Food fav="kimch"/>
      <Food fav="ramyon"/>
      <Food fav="samgyupsal"/>
      <Food fav="gyul"/>

    </div>
  );
}

export default App;
