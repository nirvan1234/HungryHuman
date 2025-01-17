import {fireEvent, render , screen } from '@testing-library/react'
import Body from '../Body'
import data from '../MockData/RestrauntData.json';
import {act} from 'react-dom/test-utils';
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>{
    return Promise.resolve({
        json : () =>{
            return Promise.resolve(data);
        }
    })
})

test("testing search Functionality in App", async () =>{

    await act( async () => render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
    ) ) ;
    
    // const searchButton = screen.getByRole("button",{name: "Search"});

    // const seatchInout = screen.getByTestId("searchInput");

    // fireEvent.change(seatchInout, { target: { value: "pizza"}})

    // fireEvent.click(searchButton);

    // const cards = screen.findAllByTestId("resCard")

    // console.log(cards);

    // expect(cards.length).toBe(5)

    const cardBeforeTesting = screen.getAllByTestId("resCard")

    console.log(cardBeforeTesting);

    expect(cardBeforeTesting.length).toBe(20)
})