import { useState } from 'react';
import SelectMenu from '../Components/SelectMenu';

export default function Length() {
  const [selectedCountry, setSelectedCountry] = useState('');

  function handleCountrySelect(country) {
    setSelectedCountry(country);
  }

  return (
    <div className="App">
      <SelectMenu
        options={['India', 'USA', 'Canada', 'Australia', 'UK']}
        defaultOption="Select your option"
        onOptionSelect={handleCountrySelect}
      />
    </div>
  );
}
