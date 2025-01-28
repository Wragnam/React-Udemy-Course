import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("Renders Hello World! as text", () => {
  // Arrange
  render(<Greeting />);

  // Act
  // ...nothing

  // Assert
  const helloWorldElement = screen.getByText(/hello world/i);

  expect(helloWorldElement).toBeInTheDocument();
});
