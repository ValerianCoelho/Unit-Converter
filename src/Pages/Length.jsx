import React from 'react';
import UnitConversionPage from '../Components/UnitConversionPage';

export default function Length() {
  const title = "Length";
  const options = ['Meter', 'Centimeter', 'Millimeter', 'Kilometer', 'Feet'];
  const conversionFormula = {
    Meter: {
      Meter: (value) => value,
      Centimeter: (value) => value * 100,
      Millimeter: (value) => value * 1000,
      Kilometer: (value) => value / 1000,
      Feet: (value) => value * 3.281
    },
    Centimeter: {
      Centimeter: (value) => value,
      Meter: (value) => value / 100,
      Millimeter: (value) => value * 10,
      Kilometer: (value) => value / 100000,
      Feet: (value) => value * 0.03281
    },
    Millimeter: {
      Millimeter: (value) => value,
      Meter: (value) => value / 1000,
      Centimeter: (value) => value / 10,
      Kilometer: (value) => value / 1000000,
      Feet: (value) => value * 0.003281
    },
    Kilometer: {
      Kilometer: (value) => value,
      Meter: (value) => value * 1000,
      Centimeter: (value) => value * 100000,
      Millimeter: (value) => value * 1000000,
      Feet: (value) => value * 3281
    },
    Feet: {
      Feet: (value) => value,
      Meter: (value) => value * 0.3048,
      Centimeter: (value) => value * 30.48,
      Millimeter: (value) => value * 304.8,
      Kilometer: (value) => value / 3281
    }
  };
  const conversionDescription = {
    Meter: {
      Meter: "The Length Value remains the same",
      Centimeter: "Multiply the Length Value by One Hundred",
      Millimeter: "Multiply the Length Value by One Thousand",
      Kilometer: "Divide the Length Value by One Thousand",
      Feet: "Multiply the Length Value by 3.281",
    },
    Centimeter: {
      Centimeter: "The Length Value remains the same",
      Meter: "Divide the Length Value by One Hundred",
      Millimeter: "Multiply the Length Value by Ten",
      Kilometer: "Divide the Length Value by One Hundred Thousand",
      Feet: "Multiply the Length Value by 0.03281",
    },
    Millimeter: {
      Millimeter: "The Length Value remains the same",
      Meter: "Divide the Length Value by One Thousand",
      Centimeter: "Divide the Length Value by Ten",
      Kilometer: "Divide the Length Value by One Million",
      Feet: "Multiply the Length Value by 0.003281",
    },
    Kilometer: {
      Kilometer: "The Length Value remains the same",
      Meter: "Multiply the Length Value by One Thousand",
      Centimeter: "Multiply the Length Value by One Hundred Thousand",
      Millimeter: "Multiply the Length Value by One Million",
      Feet: "Multiply the Length Value by 3281",
    },
    Feet: {
      Feet: "The Length Value remains the same",
      Meter: "Multiply the Length Value by 0.3048",
      Centimeter: "Multiply the Length Value by 30.48",
      Millimeter: "Multiply the Length Value by 304.8",
      Kilometer: "Divide the Length Value by 3281",
    },
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