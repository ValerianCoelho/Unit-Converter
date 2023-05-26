import React from 'react';
import UnitConversionPage from '../Components/UnitConversionPage';

export default function Angle() {
    const title = "Angle";
  const options = ['Degree', 'Radian', 'Gradian'];
  const conversionFormula = {
    Degree: {
      Degree: (value) => value,
      Radian: (value) => value * (Math.PI / 180),
      Gradian: (value) => value * (Math.PI / 200)
    },
    Radian: {
      Radian: (value) => value,
      Degree: (value) => value * (180 / Math.PI),
      Gradian: (value) => value * (200 / Math.PI)
    },
    Gradian: {
      Gradian: (value) => value,
      Degree: (value) => value * (9 / 10),
      Radian: (value) => value * (Math.PI / 200)
    }
  };
  const conversionDescription = {
    Degree: {
      Degree: "The angle value remains the same",
      Radian: "Multiply the angle value by π/180",
      Gradian: "Multiply the angle value by π/200"
    },
    Radian: {
      Radian: "The angle value remains the same",
      Degree: "Multiply the angle value by 180/π",
      Gradian: "Multiply the angle value by 200/π"
    },
    Gradian: {
      Gradian: "The angle value remains the same",
      Degree: "Multiply the angle value by 9/10",
      Radian: "Multiply the angle value by π/200"
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
