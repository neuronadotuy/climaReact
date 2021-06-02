/** @format */

import { Fragment, useEffect, useState } from "react";
import Clima from "./components/Clima";
import Formulario from "./components/Formulario";
import Header from "./components/Header";

function App() {
  const [search, setSearch] = useState({
    city: "",
    country: "",
  });

  const [consult, setConsult] = useState(false);

  const [result, setResult] = useState({});

  const [error, setError] = useState(false);

  const { city, country } = search;

  useEffect(() => {
    const checkAPI = async () => {
      if (consult === true) {
        const apiKey = "e31d1227a1f37047328ea61c09ee522c";
        const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;

        const req = await fetch(apiUrl);
        const res = await req.json();

        setResult(res);
        setConsult(false);

        if (res.cod === "404") {
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 3000);
          return;
        } else {
          setError(false);
        }
      }
    };
    checkAPI();
  }, [consult]);

  return (
    <Fragment>
      <Header title="Weather React App" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            {error ? (
              <p className="red darken-4 error">
                Ciudad no encontrada, corrobore el nombre y vuelva a intentar
              </p>
            ) : null}
            <div className="col m6 s12">
              <Formulario
                search={search}
                setSearch={setSearch}
                setConsult={setConsult}
              />
            </div>
            <div className="col m6 s12">
              <Clima result={result} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
