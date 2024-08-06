import React, { useState } from "react";

import { addTwo } from "~/addTwo";

const Adder: React.FC = () => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [sum, setSum] = useState<number>(0);

  const handleNum1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setNum1(value);
    setSum(addTwo(value, num2));
  };

  const handleNum2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setNum2(value);
    setSum(addTwo(num1, value));
  };

  return (
    <div>
      <label>
        Number 1:
        <input type="number" value={num1} onChange={handleNum1Change} />
      </label>
      <label>
        Number 2:
        <input type="number" value={num2} onChange={handleNum2Change} />
      </label>
      <div>Sum: {sum}</div>
    </div>
  );
};

export default Adder;
