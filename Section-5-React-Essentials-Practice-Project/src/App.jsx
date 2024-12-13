import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInputs from "./components/UserInputs";

const INITIAL_VALUES = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState({ ...INITIAL_VALUES });

  function onValueChange(valueIndex, newValue) {
    setUserInput((prevValues) => {
      return { ...prevValues, [valueIndex]: +newValue };
    });
  }

  const inputIsValid = userInput.duration >= 0;

  return (
    <>
      <Header />
      <UserInputs userInput={userInput} onChange={onValueChange} />
      {!inputIsValid ? <p className="center">Cannot have negative duration</p> : <Result userInput={userInput} />}
    </>
  );
}

export default App;
