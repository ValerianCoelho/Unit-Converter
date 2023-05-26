import React from 'react';
import UnitConversionPage from '../Components/UnitConversionPage';

export default function Area() {
    const title = "Area";
    const options = ['SQ Meter', 'SQ Centimeter', 'SQ Kilometer', 'SQ Mile', 'SQ Yard'];
    const conversionFormula = {
      'SQ Meter': {
        'SQ Meter': (value) => value * 1,
        'SQ Centimeter': (value) => value * 10000,
        'SQ Kilometer': (value) => value / 1000000,
        'SQ Mile': (value) => value / 4047,
        'SQ Yard': (value) => value * 1.196
      },
      'SQ Centimeter': {
        'SQ Centimeter': (value) => value * 1,
        'SQ Meter': (value) => value / 10000,
        'SQ Kilometer': (value) => value / 10000000000,
        'SQ Mile': (value) => value / 2.59e+10,
        'SQ Yard': (value) => value / 8361
      },
      'SQ Kilometer': {
        'SQ Kilometer': (value) => value * 1,
        'SQ Meter': (value) => value * 1000000,
        'SQ Centimeter': (value) => value * 10000000000,
        'SQ Mile': (value) => value / 2.59,
        'SQ Yard': (value) => value * 1196000
      },
      'SQ Mile': {
        'SQ Mile': (value) => value * 1,
        'SQ Meter': (value) => value * 4047,
        'SQ Centimeter': (value) => value * 2.59e+10,
        'SQ Kilometer': (value) => value * 2.59,
        'SQ Yard': (value) => value * 3097600
      },
      'SQ Yard': {
        'SQ Yard': (value) => value * 1,
        'SQ Meter': (value) => value / 1.196,
        'SQ Centimeter': (value) => value * 8361,
        'SQ Kilometer': (value) => value / 1196000,
        'SQ Mile': (value) => value / 3097600
      }
    };
    const conversionDescription = {
        'SQ Meter': {
          'SQ Meter': 'The area value remains the same',
          'SQ Centimeter': 'Multiply the area value by 10,000',
          'SQ Kilometer': 'Divide the area value by 1,000,000',
          'SQ Mile': 'Divide the area value by 4,047',
          'SQ Yard': 'Multiply the area value by 1.196',
        },
        'SQ Centimeter': {
          'SQ Centimeter': 'The area value remains the same',
          'SQ Meter': 'Divide the area value by 10,000',
          'SQ Kilometer': 'Divide the area value by 10,000,000,000',
          'SQ Mile': 'Divide the area value by 25,900,000,000',
          'SQ Yard': 'Divide the area value by 8,361',
        },
        'SQ Kilometer': {
          'SQ Kilometer': 'The area value remains the same',
          'SQ Meter': 'Multiply the area value by 1,000,000',
          'SQ Centimeter': 'Multiply the area value by 10,000,000,000',
          'SQ Mile': 'Multiply the area value by 2.59',
          'SQ Yard': 'Multiply the area value by 1,196,000',
        },
        'SQ Mile': {
          'SQ Mile': 'The area value remains the same',
          'SQ Meter': 'Multiply the area value by 4,047',
          'SQ Centimeter': 'Multiply the area value by 25,900,000,000',
          'SQ Kilometer': 'Multiply the area value by 2.59',
          'SQ Yard': 'Multiply the area value by 3,097,600',
        },
        'SQ Yard': {
          'SQ Yard': 'The area value remains the same',
          'SQ Meter': 'Divide the area value by 1.196',
          'SQ Centimeter': 'Multiply the area value by 8,361',
          'SQ Kilometer': 'Divide the area value by 1,196,000',
          'SQ Mile': 'Divide the area value by 3,097,600',
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
