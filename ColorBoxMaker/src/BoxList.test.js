import React from "react";
import { render, fireEvent } from '@testing-library/react';
import BoxList from "./BoxList";

it("renders without crashing", function(){
    render(<BoxList />)
})

it("matches snapshot", function(){
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
})

it("can add new boxes", function(){
    const {getByLabelText, queryByText, queryByTestId} = render(<BoxList />);

    const colorInput = getByLabelText("Pick a color:");
    const heightInput = getByLabelText("Heigth in px:");
    const widthInput = getByLabelText("Width in px:");
    const submitBtn = queryByText("Add box")

    fireEvent.change(colorInput, {target: {value: "blue"}});
    fireEvent.change(heightInput, {target: {value: "100px"}});
    fireEvent.change(widthInput, {target: {value: "100px"}});

    fireEvent.click(submitBtn);

    expect(queryByTestId("0")).toBeInTheDocument();
})

it("can remove boxes", function(){
    const {getByLabelText, queryByText, queryByTestId} = render(<BoxList />);

    const colorInput = getByLabelText("Pick a color:");
    const heightInput = getByLabelText("Heigth in px:");
    const widthInput = getByLabelText("Width in px:");
    const submitBtn = queryByText("Add box")

    fireEvent.change(colorInput, {target: {value: "blue"}});
    fireEvent.change(heightInput, {target: {value: "100px"}});
    fireEvent.change(widthInput, {target: {value: "100px"}});

    fireEvent.click(submitBtn);

    expect(queryByTestId("0")).toBeInTheDocument();

    const removeBtn = queryByText("X");
    fireEvent.click(removeBtn);

    expect(queryByTestId("0")).not.toBeInTheDocument();

})