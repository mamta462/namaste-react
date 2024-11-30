import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases", () => {
  it("should render contact us page", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("should load button inside contact component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should load all the input boxes inside contact component", () => {
    render(<Contact />);
    // Querying
    // getAllByRole : used whenever we want multiple items
    const inputBoxes = screen.getAllByRole("textbox");
    // Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
