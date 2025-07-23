import AddPeriod from "./AddPeriod";
import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

describe("Add Period", () => {
    render(<AddPeriod />)

  test("Add Period renders correctly", () => {
    const textElement = screen.getByText("Add Period");
    expect(textElement).toBeInTheDocument();
  });
    
    test("Add Period renders correctly with name and period", () => {
        render(<AddPeriod name="Alex" />);
        const textElement = screen.getByText("Hello Alex.");
        expect(textElement).toBeInTheDocument();
    });
    
});
