import React from 'react';
import UnitConversionPage from '../Components/UnitConversionPage';

export default function Weight() {
    const title = "Weight";
  const options = ['Kilogram', 'Gram', 'Pound', 'Ounce'];
  const conversionFormula = {
    Kilogram: {
      Kilogram: (value) => value,
      Gram: (value) => value * 1000,
      Pound: (value) => value * 2.20462,
      Ounce: (value) => value * 35.27396
    },
    Gram: {
      Gram: (value) => value,
      Kilogram: (value) => value / 1000,
      Pound: (value) => value * 0.00220462,
      Ounce: (value) => value * 0.03527396
    },
    Pound: {
      Pound: (value) => value,
      Kilogram: (value) => value * 0.453592,
      Gram: (value) => value * 453.592,
      Ounce: (value) => value * 16
    },
    Ounce: {
      Ounce: (value) => value,
      Kilogram: (value) => value * 0.0283495,
      Gram: (value) => value * 28.3495,
      Pound: (value) => value * 0.0625
    }
  };
  const conversionDescription = {
    Kilogram: {
      Kilogram: "The weight value remains the same",
      Gram: "Multiply the weight value by 1000",
      Pound: "Multiply the weight value by 2.20462",
      Ounce: "Multiply the weight value by 35.27396"
    },
    Gram: {
      Gram: "The weight value remains the same",
      Kilogram: "Divide the weight value by 1000",
      Pound: "Multiply the weight value by 0.00220462",
      Ounce: "Multiply the weight value by 0.03527396"
    },
    Pound: {
      Pound: "The weight value remains the same",
      Kilogram: "Multiply the weight value by 0.453592",
      Gram: "Multiply the weight value by 453.592",
      Ounce: "Multiply the weight value by 16"
    },
    Ounce: {
      Ounce: "The weight value remains the same",
      Kilogram: "Multiply the weight value by 0.0283495",
      Gram: "Multiply the weight value by 28.3495",
      Pound: "Multiply the weight value by 0.0625"
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
