import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { fetchData } from "./data";

function App() {
  const [data, setData] = useState<any>();
  useEffect(() => {
    if (import.meta.env.DEV) {
      axios.get("http://localhost:3000/data").then((res) => {
        setData(res.data.backendData);
      });
    } else {
      fetchData()
        .then((res) => setData(res))
        .catch((error) => {
          console.error("there was an error fetching data", error);
          window.location.reload();
        });
    }
  }, []);

  return (
    data && (
      <div>
        Mike Keogh Marama labs test
        <Navigation navigationItems={data} />
      </div>
    )
  );
}

export default App;
