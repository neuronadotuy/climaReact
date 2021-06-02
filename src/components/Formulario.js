/** @format */

import React, { useState } from "react";

const Formulario = ({ search, setSearch, setConsult }) => {
  const [error, setError] = useState(false);

  const { city, country } = search;

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "" || country.trim() === "") {
      setError(true);
      return;
    }

    setError(false);
    setConsult(true);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      {error ? (
        <p className="red darken-4 error">Seleccione Ciudad y País</p>
      ) : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
        />
        <label htmlFor="city">Ciudad</label>
      </div>
      <div className="input-field col s12">
        <select
          name="country"
          id="country"
          value={country}
          onChange={handleChange}>
          <option value=""> Seleccione un País</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
          <option value="UY">Uruguay</option>
        </select>
        <label htmlFor="country">País</label>
      </div>
      <div className="input-field col s12">
        <input
          type="submit"
          value="Buscar Clima"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
        />
      </div>
    </form>
  );
};

export default Formulario;
