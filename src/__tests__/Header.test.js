import { fireEvent, render , screen } from "@testing-library/react"
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom'

test("Should render Header Component with Login Button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // if i have multiple button so we can find the specific button by passing name obj
    // const LoginButton = screen.getByRole("button", {name: "Login"})
    const LoginButton = screen.getByRole("button")

    expect(LoginButton).toBeInTheDocument();

})

test("Should render Header Component with Cart Button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    
    // can also pass regex
    const CartButton = screen.getByText(/Cart/)
    

    expect(CartButton).toBeInTheDocument();


})

test("Should change Login button to Logout button on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    
    const LogoutButton = screen.getByRole("button", {name: "Logout"});

    fireEvent.click(LogoutButton);


     const LoginButton = screen.getByRole("button", {name: "Login"});

    expect(LoginButton).toBeInTheDocument();


})