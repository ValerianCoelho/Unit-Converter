import { useState, useEffect } from 'react';
import SelectMenu from '../Components/SelectMenu';
import {Link} from 'react-router-dom';
import '../style.css'

export default function Length() {
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

  const [LHSValue, setLHSValue] = useState(1);
  const [RHSValue, setRHSValue] = useState(100);
  const [LHSOption, setLHSOption] = useState("Meter");
  const [RHSOption, setRHSOption] = useState("Centimeter");
  const [shouldUpdate, setshouldUpdate] = useState(true);

  useEffect(() => {
    if(shouldUpdate == true){
      setshouldUpdate(false);
      console.log(shouldUpdate);
      setRHSValue(conversionFormula[LHSOption][RHSOption](LHSValue));
    }
  }, [LHSValue, LHSOption]);
  useEffect(() => {
    if(shouldUpdate == true){
      setshouldUpdate(false);
      setLHSValue(conversionFormula[RHSOption][LHSOption](RHSValue));
    }
  }, [RHSValue, RHSOption]);
  
  return (
    <div className="wrapper">
      <Link to='/' className="backBtn">
        <svg width="115" height="115" viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M56.5416 62.2917H71.8749C73.2326 62.2917 74.3714 61.8317 75.2914 60.9117C76.2114 59.9917 76.6698 58.8545 76.6666 57.5C76.6666 56.1424 76.2066 55.0035 75.2866 54.0835C74.3666 53.1635 73.2294 52.7051 71.8749 52.7083H56.5416L60.8541 48.3958C61.7326 47.5174 62.1718 46.3993 62.1718 45.0417C62.1718 43.684 61.7326 42.566 60.8541 41.6875C59.9756 40.809 58.8576 40.3698 57.4999 40.3698C56.1423 40.3698 55.0242 40.809 54.1458 41.6875L41.6874 54.1458C40.7291 55.1042 40.2499 56.2222 40.2499 57.5C40.2499 58.7778 40.7291 59.8958 41.6874 60.8542L54.1458 73.3125C55.0242 74.191 56.1423 74.6302 57.4999 74.6302C58.8576 74.6302 59.9756 74.191 60.8541 73.3125C61.7326 72.434 62.1718 71.316 62.1718 69.9583C62.1718 68.6007 61.7326 67.4826 60.8541 66.6042L56.5416 62.2917ZM57.4999 105.417C50.8714 105.417 44.6423 104.158 38.8124 101.641C32.9826 99.1236 27.9114 95.7104 23.5989 91.4011C19.2864 87.0886 15.8731 82.0174 13.3591 76.1875C10.8451 70.3576 9.58645 64.1285 9.58325 57.5C9.58325 50.8715 10.8419 44.6424 13.3591 38.8125C15.8763 32.9827 19.2896 27.9115 23.5989 23.599C27.9114 19.2865 32.9826 15.8732 38.8124 13.3592C44.6423 10.8451 50.8714 9.58654 57.4999 9.58334C64.1284 9.58334 70.3576 10.842 76.1874 13.3592C82.0173 15.8764 87.0885 19.2897 91.401 23.599C95.7135 27.9115 99.1283 32.9827 101.646 38.8125C104.163 44.6424 105.42 50.8715 105.417 57.5C105.417 64.1285 104.158 70.3576 101.641 76.1875C99.1235 82.0174 95.7103 87.0886 91.401 91.4011C87.0885 95.7136 82.0173 99.1284 76.1874 101.646C70.3576 104.163 64.1284 105.42 57.4999 105.417ZM57.4999 95.8333C68.2013 95.8333 77.2655 92.1198 84.6926 84.6927C92.1197 77.2656 95.8333 68.2014 95.8333 57.5C95.8333 46.7986 92.1197 37.7344 84.6926 30.3073C77.2655 22.8802 68.2013 19.1667 57.4999 19.1667C46.7985 19.1667 37.7343 22.8802 30.3072 30.3073C22.8801 37.7344 19.1666 46.7986 19.1666 57.5C19.1666 68.2014 22.8801 77.2656 30.3072 84.6927C37.7343 92.1198 46.7985 95.8333 57.4999 95.8333Z" fill="#F8F8F8"/>
        </svg>
      </Link>
      <div className="title">Length</div>
      <div className="conversion">
        <div className="LHSValue">
          <SelectMenu
            result={LHSValue || ""}
            options={['Meter', 'Centimeter', 'Millimeter', 'Kilometer', 'Feet']}
            defaultOption={LHSOption}
            handleInputChange={(e) => {setLHSValue(e.target.value); setshouldUpdate(true);}}
            handleOptionChange={(option) => {setLHSOption(option); setshouldUpdate(true);}}
          />
        </div>
        <svg className="equal" width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.4791 60.2083C18.0034 60.2083 16.7485 59.6912 15.7143 58.6571C14.6802 57.6229 14.1643 56.3692 14.1666 54.8958C14.1666 53.4201 14.6837 52.1652 15.7179 51.131C16.7521 50.0969 18.0058 49.581 19.4791 49.5833H65.5208C66.9965 49.5833 68.2514 50.1004 69.2856 51.1346C70.3198 52.1687 70.8357 53.4225 70.8333 54.8958C70.8333 56.3715 70.3162 57.6265 69.282 58.6606C68.2479 59.6948 66.9941 60.2107 65.5208 60.2083H19.4791ZM19.4791 35.4167C18.0034 35.4167 16.7485 34.8996 15.7143 33.8654C14.6802 32.8312 14.1643 31.5775 14.1666 30.1042C14.1666 28.6285 14.6837 27.3735 15.7179 26.3394C16.7521 25.3052 18.0058 24.7893 19.4791 24.7917H65.5208C66.9965 24.7917 68.2514 25.3087 69.2856 26.3429C70.3198 27.3771 70.8357 28.6308 70.8333 30.1042C70.8333 31.5799 70.3162 32.8348 69.282 33.869C68.2479 34.9031 66.9941 35.419 65.5208 35.4167H19.4791Z" fill="#F8F8F8"/>
        </svg>
        <div className="RHSValue">
          <SelectMenu
            result={RHSValue || ""}
            options={['Meter', 'Centimeter', 'Millimeter', 'Kilometer', 'Feet']}
            defaultOption={RHSOption}
            handleInputChange={(e) => {setRHSValue(e.target.value); setshouldUpdate(true);}}
            handleOptionChange={(option) => {setRHSOption(option); setshouldUpdate(true);}}
          />
        </div>
      </div>
      <pre className="formula"><span className="highlighted">Formula</span>    {conversionDescription[LHSOption][RHSOption]}</pre>
    </div>
  );
}