import { useState } from "react";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <Form setData={setData} />
      <List data={data} />
    </div>
  );
}

export default App;
