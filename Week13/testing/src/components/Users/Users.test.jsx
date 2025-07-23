import Users from "./Users";
import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

describe("Users", () => {
    const users = ["Alan Smith", "Bob Smith", "Christina", "Doug Ford"]
    test("User renders correctly", async () => {
        render(<Users users={users} />);
        const listElement = screen.getByRole("list");
        expect(listElement);

        const listItemElements = screen.getAllByRole("listitem");
        expect(listItemElements).toHaveLength(4);

        const loginButton = screen.getByRole("button", { name: "Login" })
        expect(loginButton).toBeInTheDocument();

        const startLearningButton = screen.queryByRole("button", { name: "Start Learning" });
        expect(startLearningButton).not.toBeInTheDocument();

        const startLearningButton2 = await screen.findByRole("button", {
        name: "Start Learning",
        });
        expect(startLearningButton2).toBeInTheDocument();
    })
})