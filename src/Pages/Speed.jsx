import React from 'react';
import UnitConversionPage from '../Components/UnitConversionPage';

export default function Speed() {
    const title = "Speed";
  const options = ['Meters/Second', 'Kilometers/Hour', 'Miles/Hour', 'Feet/Second'];
  const conversionFormula = {
    'Meters/Second': {
      'Meters/Second': (value) => value,
      'Kilometers/Hour': (value) => value * 3.6,
      'Miles/Hour': (value) => value * 2.237,
      'Feet/Second': (value) => value * 3.281
    },
    'Kilometers/Hour': {
      'Kilometers/Hour': (value) => value,
      'Meters/Second': (value) => value / 3.6,
      'Miles/Hour': (value) => value * 0.6214,
      'Feet/Second': (value) => value * 0.9113
    },
    'Miles/Hour': {
      'Miles/Hour': (value) => value,
      'Meters/Second': (value) => value / 2.237,
      'Kilometers/Hour': (value) => value / 0.6214,
      'Feet/Second': (value) => value * 1.466
    },
    'Feet/Second': {
      'Feet/Second': (value) => value,
      'Meters/Second': (value) => value / 3.281,
      'Kilometers/Hour': (value) => value / 0.9113,
      'Miles/Hour': (value) => value / 1.466
    }
  };
  const conversionDescription = {
    'Meters/Second': {
      'Meters/Second': "The speed value remains the same",
      'Kilometers/Hour': "Multiply the speed value by 3.6",
      'Miles/Hour': "Multiply the speed value by 2.237",
      'Feet/Second': "Multiply the speed value by 3.281"
    },
    'Kilometers/Hour': {
      'Kilometers/Hour': "The speed value remains the same",
      'Meters/Second': "Divide the speed value by 3.6",
      'Miles/Hour': "Multiply the speed value by 0.6214",
      'Feet/Second': "Multiply the speed value by 0.9113"
    },
    'Miles/Hour': {
      'Miles/Hour': "The speed value remains the same",
      'Meters/Second': "Divide the speed value by 2.237",
      'Kilometers/Hour': "Divide the speed value by 0.6214",
      'Feet/Second': "Multiply the speed value by 1.466"
    },
    'Feet/Second': {
      'Feet/Second': "The speed value remains the same",
      'Meters/Second': "Divide the speed value by 3.281",
      'Kilometers/Hour': "Divide the speed value by 0.9113",
      'Miles/Hour': "Divide the speed value by 1.466"
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
