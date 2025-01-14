import {render , screen} from '@testing-library/react'
import RestrauntCard from '../RestrauntCard'
import MockData from "../MockData/RestrauntCardData.json"
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

test("should render Restaurant Card Component with props Data" ,() =>{
    render(
        <BrowserRouter>
          <RestrauntCard restaurantNew={MockData} />
        </BrowserRouter>
    )

    const name = screen.getByText("Burger");

    expect(name).toBeInTheDocument();

})