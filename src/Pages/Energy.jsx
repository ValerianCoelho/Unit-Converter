import React from 'react';
import UnitConversionPage from '../Components/UnitConversionPage';

export default function Energy() {
    const title = "Energy";
  const options = ['Joule', 'Calorie', 'Kilocalorie', 'Electronvolt'];
  const conversionFormula = {
    Joule: {
      Joule: (value) => value,
      Calorie: (value) => value * 0.239006,
      Kilocalorie: (value) => value * 0.000239006,
      Electronvolt: (value) => value * 6.242e+18
    },
    Calorie: {
      Calorie: (value) => value,
      Joule: (value) => value * 4.184,
      Kilocalorie: (value) => value * 0.001,
      Electronvolt: (value) => value * 2.613e+19
    },
    Kilocalorie: {
      Kilocalorie: (value) => value,
      Joule: (value) => value * 4184,
      Calorie: (value) => value * 1000,
      Electronvolt: (value) => value * 2.613e+22
    },
    Electronvolt: {
      Electronvolt: (value) => value,
      Joule: (value) => value * 1.602e-19,
      Calorie: (value) => value * 3.829e-20,
      Kilocalorie: (value) => value * 3.829e-23
    }
  };
  const conversionDescription = {
    Joule: {
      Joule: "The energy value remains the same",
      Calorie: "Multiply the energy value by 0.239006",
      Kilocalorie: "Multiply the energy value by 0.000239006",
      Electronvolt: "Multiply the energy value by 6.242e+18"
    },
    Calorie: {
      Calorie: "The energy value remains the same",
      Joule: "Multiply the energy value by 4.184",
      Kilocalorie: "Multiply the energy value by 0.001",
      Electronvolt: "Multiply the energy value by 2.613e+19"
    },
    Kilocalorie: {
      Kilocalorie: "The energy value remains the same",
      Joule: "Multiply the energy value by 4184",
      Calorie: "Multiply the energy value by 1000",
      Electronvolt: "Multiply the energy value by 2.613e+22"
    },
    Electronvolt: {
      Electronvolt: "The energy value remains the same",
      Joule: "Multiply the energy value by 1.602e-19",
      Calorie: "Multiply the energy value by 3.829e-20",
      Kilocalorie: "Multiply the energy value by 3.829e-23"
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
