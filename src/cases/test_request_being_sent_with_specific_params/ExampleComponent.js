import axios from "axios";
import { useEffect, useState } from "react";

export const ExampleComponent = () => {
  const [params, setParams] = useState();
  const [data, setData] = useState();

  const sendWithParams = () => {
    setParams({ filter: { name: "Te", operator: "starts_with" } });
  };

  useEffect(() => {
    axios.get("/api/resource", { params }).then(({ data }) => {
      setData(data);
    });
  }, [params]);

  return (
    <div>
      <button onClick={sendWithParams}>Send with params</button>

      {data ? (
        <ul>
          {data.map(({ id, name }) => (
            <li key={id} aria-label={name}>
              {name}
            </li>
          ))}
        </ul>
      ) : (
        "Loading"
      )}
    </div>
  );
};
