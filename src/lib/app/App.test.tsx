import { render } from "@testing-library/react";
import App from "./App";

test("renders grid", () => {
  const result = render(<App />);
  const linkElement = result.container.querySelector("#grid");
  expect(linkElement).toBeInTheDocument();
});
