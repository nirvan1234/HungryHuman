import {render , screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Contact from '../Contact'


describe("Contact us Page Test Case", () =>{
    test("should load contact us Component",() =>{
        render(<Contact/>);
   
        const heading = screen.getByRole("heading");
   
        expect(heading).toBeInTheDocument();
   })
   
   test("should load button inside my Contact Component",() =>{
       render(<Contact/>);
   
       // const button = screen.getByRole("button");
   
       const button = screen.getByText("Submit");
   
       expect(button).toBeInTheDocument();
   })
   
   test("should load all Input inside my Contact Component",() =>{
       render(<Contact/>);
   
       const inputBoxes = screen.getAllByRole("textbox");
   
       expect(inputBoxes.length).toBe(2);
   })

})
