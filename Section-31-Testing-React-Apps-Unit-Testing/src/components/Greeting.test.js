import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders 'Hello World!' as text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ...nothing

    // Assert
    const outputElement = screen.getByText(/hello world/i);
    expect(outputElement).toBeInTheDocument();
  });

  test("renders 'good to see you' text when state has not changed", () => {
    render(<Greeting />);

    const outputElement = screen.getByText(/it's good to see you/i);
    expect(outputElement).toBeInTheDocument();
  });

  test("renders 'Changed!' if state has been changed", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText(/changed/i);
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render 'good to see you' text when button was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.queryByText(/it's good to see you/i);
    expect(outputElement).toBeNull();
  });
});
