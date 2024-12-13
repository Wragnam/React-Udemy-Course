import UserInput from "./UserInput";

export default function UserInputs({ userInput, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <UserInput
          type="number"
          values={userInput}
          onValueChange={onChange}
          changeType="initialInvestment"
        >
          Initial Investment
        </UserInput>
        <UserInput
          type="number"
          values={userInput}
          onValueChange={onChange}
          changeType="annualInvestment"
        >
          Annual Investment
        </UserInput>
      </div>
      <div className="input-group">
        <UserInput
          type="number"
          values={userInput}
          onValueChange={onChange}
          changeType="expectedReturn"
        >
          Expected Return
        </UserInput>
        <UserInput
          type="number"
          values={userInput}
          onValueChange={onChange}
          changeType="duration"
        >
          Duration
        </UserInput>
      </div>
    </section>
  );
}
