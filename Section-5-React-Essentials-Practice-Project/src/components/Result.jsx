import { calculateInvestmentResults, formatter } from "../util/investment";

const TABLE_HEADER = [
  "Year",
  "Investment Value",
  "Interest (Year)",
  "Total Interest",
  "Invested Capital",
];

export default function Result({ userInput }) {
  let annualData = calculateInvestmentResults(userInput);
  if (annualData.length > 0) {
    let runner = userInput.initialInvestment + userInput.annualInvestment;
    let interestRunner = 0;
    annualData.forEach((line) => {
      line.totalInterest = interestRunner + line.interest;
      line.investedCapital = runner;
      runner += userInput.annualInvestment;
      interestRunner += line.interest;
    });
  }

  return (
    <table id="result"> 
      <thead>
        <tr>
          {TABLE_HEADER.map((value) => {
            return (
              <th className="center" key={value}>
                {value}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {annualData.map((line) => {
          return (
            <tr key={line.year}>
              <td>{line.year}</td>
              <td>{formatter.format(line.valueEndOfYear)}</td>
              <td>{formatter.format(line.interest)}</td>
              <td>{formatter.format(line.totalInterest)}</td>
              <td>{formatter.format(line.investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
