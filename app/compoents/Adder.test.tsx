import { render } from "@testing-library/react";

import Adder from "./Adder";

test("renders Adder component", () => {
  const { getByText } = render(<Adder />);
  const num1 = getByText(/Number 1:/i);
  const num2 = getByText(/Number 2:/i);
  const sum = getByText(/Sum:/i);

  expect(num1).toBeInTheDocument();
  expect(num2).toBeInTheDocument();
  expect(sum).toBeInTheDocument();
});
