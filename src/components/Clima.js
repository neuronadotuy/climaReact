/** @format */

import React from "react";

const Clima = ({ result }) => {
  const { name, main, sys } = result;
  if (!name) {
    return null;
  }

  // Kelvin a Centigrados
  const kelvin = 273.15;
  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2 className="cityname">
          {name},{sys.country}
        </h2>
        <p className="temperatura">
          {parseFloat(main.temp - kelvin, 10).toFixed(2)} &#x2103;
        </p>
        <div className="minmax">
          <p className="tempmax">
            <i class="fas fa-temperature-high"></i>{" "}
            {parseFloat(main.temp_max - kelvin, 10).toFixed(2)} &#x2103;
          </p>
          <p className="tempmin">
            <i class="fas fa-temperature-low"></i>{" "}
            {parseFloat(main.temp_min - kelvin, 10).toFixed(2)} &#x2103;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clima;
