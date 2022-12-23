import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={ <Login/> } />
                <Route exact path="/register" element={ <Register/> } />
            </Routes>
        </BrowserRouter>
    )
}
