

const Calculator = () => {
  const [salary, setSalary] = useState<number>(0);
  const [loanTerm, setLoanTerm] = useState<number>(3);
  const [loanAmount, setLoanAmount] = useState<number>(0);

  const calculateLoan = () => {
    // Simple example: max 30% of salary per month
    const monthlyPayment = salary * 0.3;
    setLoanAmount(monthlyPayment * loanTerm);
  };

  return (
    <section style={{ padding: "50px", textAlign: "center" }}>
      <h2>Loan Calculator</h2>
      <input
        type="number"
        placeholder="Monthly Net Salary"
        value={salary}
        onChange={(e) => setSalary(parseFloat(e.target.value))}
      />
      <select value={loanTerm} onChange={(e) => setLoanTerm(parseInt(e.target.value))}>
        <option value={3}>3 months</option>
        <option value={6}>6 months</option>
      </select>
      <button onClick={calculateLoan}>Calculate</button>
      {loanAmount > 0 && <p>Max Loan Amount: ₦{loanAmount.toLocaleString()}</p>}
    </section>
  );
};

export default Calculator;
