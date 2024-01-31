import React from "react";
import { render, fireEvent } from '@testing-library/react';
import TodoList from "./TodoList";

it("renders without crashing", function(){
    render(<TodoList />)
})

it("matches snapshot", function(){
    const {asFragment} = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
})

it("can add new todos", function(){
    const {getByLabelText, queryByText} = render(<TodoList />);

    const todoInput = getByLabelText("Enter to-do:");
    const submitBtn = queryByText("Add to-do")

    fireEvent.change(todoInput, {target: {value: "Pickup"}});

    fireEvent.click(submitBtn);

    expect(queryByText("Pickup")).toBeInTheDocument();
})

it("can remove todos", function(){
    const {getByLabelText, queryByText} = render(<TodoList />);

    const todoInput = getByLabelText("Enter to-do:");
    const submitBtn = queryByText("Add to-do")

    fireEvent.change(todoInput, {target: {value: "Pickup"}});

    fireEvent.click(submitBtn);

    expect(queryByText("Pickup")).toBeInTheDocument();

    const removeBtn = queryByText("X");
    fireEvent.click(removeBtn);

    expect(queryByText("Pickup")).not.toBeInTheDocument();

})