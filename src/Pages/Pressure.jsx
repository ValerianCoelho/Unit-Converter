import React from 'react';
import UnitConversionPage from '../Components/UnitConversionPage';

export default function Pressure() {
    const title = "Pressure";
  const options = ['Pascal', 'Bar', 'Atmosphere', 'Psi'];
  const conversionFormula = {
    Pascal: {
      Pascal: (value) => value * 1,
      Bar: (value) => value * 0.00001,
      Atmosphere: (value) => value * 9.8692e-6,
      Psi: (value) => value * 0.000145038
    },
    Bar: {
      Bar: (value) => value * 1,
      Pascal: (value) => value * 100000,
      Atmosphere: (value) => value * 0.98692,
      Psi: (value) => value * 14.5038
    },
    Atmosphere: {
      Atmosphere: (value) => value * 1,
      Pascal: (value) => value * 101325,
      Bar: (value) => value * 1.01325,
      Psi: (value) => value * 14.6959
    },
    Psi: {
      Psi: (value) => value * 1,
      Pascal: (value) => value * 6894.76,
      Bar: (value) => value * 0.0689476,
      Atmosphere: (value) => value * 0.068046
    }
  };
  const conversionDescription = {
    Pascal: {
      Pascal: "The pressure value remains the same",
      Bar: "Multiply the pressure value by 0.00001",
      Atmosphere: "Multiply the pressure value by 9.8692e-6",
      Psi: "Multiply the pressure value by 0.000145038"
    },
    Bar: {
      Bar: "The pressure value remains the same",
      Pascal: "Multiply the pressure value by 100000",
      Atmosphere: "Multiply the pressure value by 0.98692",
      Psi: "Multiply the pressure value by 14.5038"
    },
    Atmosphere: {
      Atmosphere: "The pressure value remains the same",
      Pascal: "Multiply the pressure value by 101325",
      Bar: "Multiply the pressure value by 1.01325",
      Psi: "Multiply the pressure value by 14.6959"
    },
    Psi: {
      Psi: "The pressure value remains the same",
      Pascal: "Multiply the pressure value by 6894.76",
      Bar: "Multiply the pressure value by 0.0689476",
      Atmosphere: "Multiply the pressure value by 0.068046"
    }
  };
      
  return (
    <div>
      <UnitConversionPage
        title={title}
        options={options}
        conversionFormula={conversionFormula}
        conversionDescription={conversionDescription}
      />
    </div>
  );
}
