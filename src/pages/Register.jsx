import { Link } from "react-router-dom"
import { GlobalStates } from "../context"
import { useState } from "react"

export default function Register() {

    const { SERVER_ADDRESS } = GlobalStates()

    const [ state, setState ] = useState({
        name: "", number: "", email: "", address: "", password: "", cpassword: ""
    })

    const register = async () => {
        
        const res = await fetch(`${SERVER_ADDRESS}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(state)
        })

        const data = await res.json()

        if (data.success) {
            localStorage.setItem("authtoken", data.authtoken)
            location.reload()
        }

        else alert(data.message)

    }

    return (
        <div id="registration" className="min-h-screen flex items-center justify-center">
            <div className="border bg-white rounded-md shadow-md flex items-center justify-center flex-col space-y-8 px-10 py-10">

                <h1 className="text-2xl">Register</h1>

                <div className="flex items-center justify-center space-x-4 space-y-4 flex-wrap max-w-xl">

                    <span></span>

                    <div>
                        <i className="fa-solid fa-user"></i>
                        <input 
                            name="name"
                            type="text" 
                            className="transition delay-200 focus:border-b-pink-500 border-b-2 border-b-gray-200 text-sm pl-3 h-10 w-60 focus:!outline-none"
                            placeholder="Type your name" 
                            value={state.name}
                            onChange={(e) => setState({ ...state, [e.target.name]: e.target.value})}
                        />
                    </div>

                    <div>
                        <i className="fa-solid fa-phone"></i>
                        <input 
                            name="number"
                            type="tel" 
                            className="transition delay-200 focus:border-b-pink-500 border-b-2 border-b-gray-200 text-sm pl-3 h-10 w-60 focus:!outline-none" 
                            placeholder="Type your phone number" 
                            value={state.number}
                            onChange={(e) => setState({ ...state, [e.target.name]: e.target.value})}
                        />
                    </div>

                    <div>
                        <i className="fa-solid fa-envelope"></i>
                        <input 
                            name="email"
                            type="email" 
                            className="transition delay-200 focus:border-b-pink-500 border-b-2 border-b-gray-200 text-sm pl-3 h-10 w-60 focus:!outline-none" 
                            placeholder="Type your email" 
                            value={state.email}
                            onChange={(e) => setState({ ...state, [e.target.name]: e.target.value})}
                        />
                    </div>

                    <div>
                        <i className="fa-solid fa-location-dot"></i>
                        <input 
                            name="address"
                            type="text" 
                            className="transition delay-200 focus:border-b-pink-500 border-b-2 border-b-gray-200 text-sm pl-3 h-10 w-60 focus:!outline-none"
                            placeholder="Type your address"
                            value={state.address}
                            onChange={(e) => setState({ ...state, [e.target.name]: e.target.value})}
                        />
                    </div>

                    <div>
                        <i className="fa-solid fa-lock"></i>
                        <input 
                            name="password"
                            type="password" 
                            className="transition delay-200 focus:border-b-pink-500 border-b-2 border-b-gray-200 text-sm pl-3 h-10 w-60 focus:!outline-none" 
                            placeholder="Type your password" 
                            value={state.password}
                            onChange={(e) => setState({ ...state, [e.target.name]: e.target.value})}
                        />
                    </div>

                    <div>
                        <i className="fa-solid fa-lock"></i>
                        <input 
                            name="cpassword"
                            type="password" 
                            className="transition delay-200 focus:border-b-pink-500 border-b-2 border-b-gray-200 text-sm pl-3 h-10 w-60 focus:!outline-none" 
                            placeholder="Confirm your password" 
                            value={state.cpassword}
                            onChange={(e) => setState({ ...state, [e.target.name]: e.target.value})}
                        />
                    </div>

                </div>

                <div className="w-full">
                    <button 
                        className="my-5 bg-pink-600 hover:bg-pink-500 rounded-md p-2 text-white font-medium w-full"
                        onClick={register}
                    >
                        Register
                    </button>
                </div>

                <p className="text-sm">
                    <span className="text-gray-500">Already have an account?</span>
                    <Link className="pl-4 underline text-blue-400 hover:text-blue-600" to="/">Login</Link>
                </p>

            </div>
        </div>
    )
}
