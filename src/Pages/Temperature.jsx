import React from 'react';
import UnitConversionPage from '../Components/UnitConversionPage';

export default function Temperature() {
    const title = "Temperature";
  const options = ['Celsius', 'Fahrenheit', 'Kelvin'];
  const conversionFormula = {
    Celsius: {
      Celsius: (value) => value * 1,
      Fahrenheit: (value) => (value * 9/5) + 32,
      Kelvin: (value) => value + 273.15
    },
    Fahrenheit: {
      Fahrenheit: (value) => value * 1,
      Celsius: (value) => (value - 32) * 5/9,
      Kelvin: (value) => (value + 459.67) * 5/9
    },
    Kelvin: {
      Kelvin: (value) => value * 1,
      Celsius: (value) => value - 273.15,
      Fahrenheit: (value) => (value * 9/5) - 459.67
    }
  };
  const conversionDescription = {
    Celsius: {
      Celsius: "The temperature value remains the same",
      Fahrenheit: "Multiply the temperature value by 9/5 and add 32",
      Kelvin: "Add 273.15 to the temperature value"
    },
    Fahrenheit: {
      Fahrenheit: "The temperature value remains the same",
      Celsius: "Subtract 32 from the temperature value and multiply by 5/9",
      Kelvin: "Add 459.67 to the temperature value and multiply by 5/9"
    },
    Kelvin: {
      Kelvin: "The temperature value remains the same",
      Celsius: "Subtract 273.15 from the temperature value",
      Fahrenheit: "Multiply the temperature value by 9/5 and subtract 459.67"
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
