import { useEffect, useState } from "react";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { fetchData } from "./data";

function App() {
  const [data, setData] = useState<any>();
  useEffect(() => {
    fetchData().then((res) => setData(res));
  }, []);

  return (
    <div>
      Mike Keogh Marama labs test
      <Navigation navigationItems={data} />
    </div>
  );
}

export default App;
