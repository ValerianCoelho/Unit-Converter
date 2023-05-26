import React from 'react';
import UnitConversionPage from '../Components/UnitConversionPage';

export default function Time() {
    const title = "Time";
  const options = ['Seconds', 'Minutes', 'Hours', 'Days', 'Weeks'];
  const conversionFormula = {
    Seconds: {
      Seconds: (value) => value * 1,
      Minutes: (value) => value / 60,
      Hours: (value) => value / 3600,
      Days: (value) => value / 86400,
      Weeks: (value) => value / 604800
    },
    Minutes: {
      Minutes: (value) => value * 1,
      Seconds: (value) => value * 60,
      Hours: (value) => value / 60,
      Days: (value) => value / 1440,
      Weeks: (value) => value / 10080
    },
    Hours: {
      Hours: (value) => value * 1,
      Seconds: (value) => value * 3600,
      Minutes: (value) => value * 60,
      Days: (value) => value / 24,
      Weeks: (value) => value / 168
    },
    Days: {
      Days: (value) => value * 1,
      Seconds: (value) => value * 86400,
      Minutes: (value) => value * 1440,
      Hours: (value) => value * 24,
      Weeks: (value) => value / 7
    },
    Weeks: {
      Weeks: (value) => value * 1,
      Seconds: (value) => value * 604800,
      Minutes: (value) => value * 10080,
      Hours: (value) => value * 168,
      Days: (value) => value * 7
    }
  };
  const conversionDescription = {
    Seconds: {
      Seconds: "The time value remains the same",
      Minutes: "Divide the time value by 60",
      Hours: "Divide the time value by 3600",
      Days: "Divide the time value by 86400",
      Weeks: "Divide the time value by 604800",
    },
    Minutes: {
      Minutes: "The time value remains the same",
      Seconds: "Multiply the time value by 60",
      Hours: "Divide the time value by 60",
      Days: "Divide the time value by 1440",
      Weeks: "Divide the time value by 10080",
    },
    Hours: {
      Hours: "The time value remains the same",
      Seconds: "Multiply the time value by 3600",
      Minutes: "Multiply the time value by 60",
      Days: "Divide the time value by 24",
      Weeks: "Divide the time value by 168",
    },
    Days: {
      Days: "The time value remains the same",
      Seconds: "Multiply the time value by 86400",
      Minutes: "Multiply the time value by 1440",
      Hours: "Multiply the time value by 24",
      Weeks: "Divide the time value by 7",
    },
    Weeks: {
      Weeks: "The time value remains the same",
      Seconds: "Multiply the time value by 604800",
      Minutes: "Multiply the time value by 10080",
      Hours: "Multiply the time value by 168",
      Days: "Multiply the time value by 7",
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
