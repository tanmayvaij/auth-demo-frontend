import { BrowserRouter, Routes, Route, Navigate, redirect } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import MainContext from "./context"
import Profile from "./pages/Profile"

export default function App() {

    const authtoken = localStorage.getItem("authtoken")
    if (!authtoken) redirect("/")

    return (
        <MainContext>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={ (authtoken)? <Profile/>: <Login/> } />
                    <Route exact path="/register" element={ <Register/> } />
                    <Route exact path="*" element={ <Navigate to={"/"} /> } />
                </Routes>
            </BrowserRouter>
        </MainContext>
    )
}
