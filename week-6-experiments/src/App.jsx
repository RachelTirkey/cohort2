import { Fragment } from "react";
import { useState } from "react";

function App() {
  return (
    <div>
      <HeaderWithButton></HeaderWithButton>
      <Header title="rachel2"></Header>
      <Header title="rachel2"></Header>
      <Header title="rachel2"></Header>
    </div>
  );
}

function HeaderWithButton() {
  const [title, setTitle] = useState("my name is rachel");
  function updateTitle() {
    setTitle("my name is " + Math.random());
  }

  return (
    <div>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
    </div>
  );
}

function Header({ title }) {
  return <div>{title}</div>;
}

export default App;
