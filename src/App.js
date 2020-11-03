import React from "react";

function Food({fav}) {
return <h4>I like {fav}</h4>;
}

function App() {
  return (
    <div>
      <h1>fuck</h1>
      <Food fav="girl" />
      <Food fav="pussy" />
    </div>
  );
}

export default App;
