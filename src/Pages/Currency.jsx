import React from 'react';
import UnitConversionPage from '../Components/UnitConversionPage';

export default function Currency() {
    const title = "Currency";
  const options = ['USD', 'EUR', 'GBP', 'JPY'];
  const conversionFormula = {
    USD: {
      USD: (value) => value,
      EUR: (value) => value * 0.84,
      GBP: (value) => value * 0.72,
      JPY: (value) => value * 110.25
    },
    EUR: {
      EUR: (value) => value,
      USD: (value) => value * 1.19,
      GBP: (value) => value * 0.86,
      JPY: (value) => value * 130.87
    },
    GBP: {
      GBP: (value) => value,
      USD: (value) => value * 1.39,
      EUR: (value) => value * 1.16,
      JPY: (value) => value * 152.58
    },
    JPY: {
      JPY: (value) => value,
      USD: (value) => value * 0.0091,
      EUR: (value) => value * 0.0076,
      GBP: (value) => value * 0.0066
    }
  };
  const conversionDescription = {
    USD: {
      USD: "The currency value remains the same",
      EUR: "Multiply the currency value by 0.84",
      GBP: "Multiply the currency value by 0.72",
      JPY: "Multiply the currency value by 110.25"
    },
    EUR: {
      EUR: "The currency value remains the same",
      USD: "Multiply the currency value by 1.19",
      GBP: "Multiply the currency value by 0.86",
      JPY: "Multiply the currency value by 130.87"
    },
    GBP: {
      GBP: "The currency value remains the same",
      USD: "Multiply the currency value by 1.39",
      EUR: "Multiply the currency value by 1.16",
      JPY: "Multiply the currency value by 152.58"
    },
    JPY: {
      JPY: "The currency value remains the same",
      USD: "Multiply the currency value by 0.0091",
      EUR: "Multiply the currency value by 0.0076",
      GBP: "Multiply the currency value by 0.0066"
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
