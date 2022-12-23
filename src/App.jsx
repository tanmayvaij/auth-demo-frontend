import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={ <Signin/> } />
                <Route exact path="/reg" element={ <Signup/> } />
            </Routes>
        </BrowserRouter>
    )
}
