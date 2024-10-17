import { render , screen } from "@testing-library/react";
import About from "../About";
import "@testing-library/jest-dom"

test("Should Load Component",()=>{

    render(<About/>);

    const container = screen.getByText("about");

    expect(container).toBeInTheDocument();


})