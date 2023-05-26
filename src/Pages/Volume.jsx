import React from 'react';
import UnitConversionPage from '../Components/UnitConversionPage';

export default function Volume() {
  const title = "Volume";
  const options = ['Cubic Meter', 'Cubic Centimeter', 'Milliliter', 'US Gallon', 'US Quart'];
  const conversionFormula = {
    'Cubic Meter': {
      'Cubic Meter': (value) => value * 1,
      'Cubic Centimeter': (value) => value * 1e6,
      'Milliliter': (value) => value * 1e6,
      'US Gallon': (value) => value * 264.172,
      'US Quart': (value) => value * 1056.69
    },
    'Cubic Centimeter': {
      'Cubic Centimeter': (value) => value * 1,
      'Cubic Meter': (value) => value / 1e6,
      'Milliliter': (value) => value * 1,
      'US Gallon': (value) => value * 0.000264172,
      'US Quart': (value) => value * 0.00105669
    },
    'Milliliter': {
      'Milliliter': (value) => value * 1,
      'Cubic Meter': (value) => value / 1e6,
      'Cubic Centimeter': (value) => value * 1,
      'US Gallon': (value) => value * 0.000264172,
      'US Quart': (value) => value * 0.00105669
    },
    'US Gallon': {
      'US Gallon': (value) => value * 1,
      'Cubic Meter': (value) => value * 0.00378541,
      'Cubic Centimeter': (value) => value * 3785.41,
      'Milliliter': (value) => value * 3785.41,
      'US Quart': (value) => value * 4
    },
    'US Quart': {
      'US Quart': (value) => value * 1,
      'Cubic Meter': (value) => value * 0.000946353,
      'Cubic Centimeter': (value) => value * 946.353,
      'Milliliter': (value) => value * 946.353,
      'US Gallon': (value) => value * 0.25
    }
  };
  const conversionDescription = {
    'Cubic Meter': {
      'Cubic Meter': 'The volume value remains the same.',
      'Cubic Centimeter': 'Multiply the volume value by 1,000,000.',
      'Milliliter': 'Multiply the volume value by 1,000,000.',
      'US Gallon': 'Multiply the volume value by 264.172.',
      'US Quart': 'Multiply the volume value by 1,056.69.'
    },
    'Cubic Centimeter': {
      'Cubic Centimeter': 'The volume value remains the same.',
      'Cubic Meter': 'Divide the volume value by 1,000,000.',
      'Milliliter': 'The volume value remains the same.',
      'US Gallon': 'Multiply the volume value by 0.000264172.',
      'US Quart': 'Multiply the volume value by 0.00105669.'
    },
    'Milliliter': {
      'Milliliter': 'The volume value remains the same.',
      'Cubic Meter': 'Divide the volume value by 1,000,000.',
      'Cubic Centimeter': 'The volume value remains the same.',
      'US Gallon': 'Multiply the volume value by 0.000264172.',
      'US Quart': 'Multiply the volume value by 0.00105669.'
    },
    'US Gallon': {
      'US Gallon': 'The volume value remains the same.',
      'Cubic Meter': 'Multiply the volume value by 0.00378541.',
      'Cubic Centimeter': 'Multiply the volume value by 3785.41.',
      'Milliliter': 'Multiply the volume value by 3785.41.',
      'US Quart': 'Multiply the volume value by 4.'
    },
    'US Quart': {
      'US Quart': 'The volume value remains the same.',
      'Cubic Meter': 'Multiply the volume value by 0.000946353.',
      'Cubic Centimeter': 'Multiply the volume value by 946.353.',
      'Milliliter': 'Multiply the volume value by 946.353.',
      'US Gallon': 'Multiply the volume value by 0.25.'
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
