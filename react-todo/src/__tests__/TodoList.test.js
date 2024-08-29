// src/__tests__/TodoList.test.js
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList", () => {
  test("renders TodoList component", () => {
    render(<TodoList />);
    expect(screen.getByText("Todo List")).toBeInTheDocument();
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const button = screen.getByText("Add Todo");

    fireEvent.change(input, { target: { value: "New Todo Item" } });
    fireEvent.click(button);

    expect(screen.getByText("New Todo Item")).toBeInTheDocument();
  });

  test("toggles a todo", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText("Delete")[0];
    const todoItem = screen.getByText("Learn React");

    fireEvent.click(deleteButton);
    expect(todoItem).not.toBeInTheDocument();
  });
});
