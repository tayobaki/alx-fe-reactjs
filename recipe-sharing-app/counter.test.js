import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./src/components/Counter";

// Test to check if the counter renders correctly
test("renders Counter component", () => {
  render(<Counter />);
  // Verify component initial render
  expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  expect(screen.getByText("Increment")).toBeInTheDocument();
  expect(screen.getByText("Decrement")).toBeInTheDocument();
});

// Test to check if the increment button works
test("increments counter", () => {
  render(<Counter />);
  // Simulate click event
  fireEvent.click(screen.getByText("Increment"));
  // Verify if the count is incremented
  expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
});

// Test to check if the decrement button works
test("decrements counter", () => {
  render(<Counter />);
  fireEvent.click(screen.getByText("Increment")); // Increment to avoid negative counting scenario
  fireEvent.click(screen.getByText("Decrement"));
  // Verify if the count is decremented
  expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
});
