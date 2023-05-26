import React from 'react';
import UnitConversionPage from '../Components/UnitConversionPage';

export default function Frequency() {
    const title = "Frequency";
  const options = ['Hertz', 'Kilohertz', 'Megahertz', 'Gigahertz'];
  const conversionFormula = {
    Hertz: {
      Hertz: (value) => value * 1,
      Kilohertz: (value) => value * 0.001,
      Megahertz: (value) => value * 1e-6,
      Gigahertz: (value) => value * 1e-9
    },
    Kilohertz: {
      Kilohertz: (value) => value * 1,
      Hertz: (value) => value * 1000,
      Megahertz: (value) => value * 0.001,
      Gigahertz: (value) => value * 1e-6
    },
    Megahertz: {
      Megahertz: (value) => value * 1,
      Hertz: (value) => value * 1e6,
      Kilohertz: (value) => value * 1000,
      Gigahertz: (value) => value * 0.001
    },
    Gigahertz: {
      Gigahertz: (value) => value * 1,
      Hertz: (value) => value * 1e9,
      Kilohertz: (value) => value * 1e6,
      Megahertz: (value) => value * 1000
    }
  };
  const conversionDescription = {
    Hertz: {
      Hertz: "The frequency value remains the same",
      Kilohertz: "Multiply the frequency value by 0.001",
      Megahertz: "Multiply the frequency value by 1e-6",
      Gigahertz: "Multiply the frequency value by 1e-9"
    },
    Kilohertz: {
      Kilohertz: "The frequency value remains the same",
      Hertz: "Multiply the frequency value by 1000",
      Megahertz: "Multiply the frequency value by 0.001",
      Gigahertz: "Multiply the frequency value by 1e-6"
    },
    Megahertz: {
      Megahertz: "The frequency value remains the same",
      Hertz: "Multiply the frequency value by 1e6",
      Kilohertz: "Multiply the frequency value by 1000",
      Gigahertz: "Multiply the frequency value by 0.001"
    },
    Gigahertz: {
      Gigahertz: "The frequency value remains the same",
      Hertz: "Multiply the frequency value by 1e9",
      Kilohertz: "Multiply the frequency value by 1e6",
      Megahertz: "Multiply the frequency value by 1000"
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
