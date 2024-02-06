import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { LoginForm } from "./LoginForm";

test("Login Form test", () => {
  render(<LoginForm />);
  expect(screen.getByRole("heading", { level: 2, name: "Sign in" })).toBeDefined();
  expect(screen.getByRole("button", { name: "Sign in" })).toBeDefined();
});
