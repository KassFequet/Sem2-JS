import Greet from "./Greet";
import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

describe("Greet", () => {
    test("Greet renders correctly", () => {
        render(<Greet />);
        const heading = screen.getByText((content)=>content.startsWith("Hello"));
        expect(heading).toBeInTheDocument();
    });
});