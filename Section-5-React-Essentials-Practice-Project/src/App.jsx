import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInputs from "./components/UserInputs";

const INITIAL_VALUES = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function App() {
  const [values, setValues] = useState({ ...INITIAL_VALUES });

  function onValueChange(valueIndex, value) {
    setValues((prevValues) => {
      const updatedValues = { ...prevValues, [valueIndex]: value };
      return updatedValues;
    });
  }

  return (
    <>
      <Header />
      <UserInputs values={values} onChange={onValueChange} />
      <Result values={values} />
    </>
  );
}

export default App;
