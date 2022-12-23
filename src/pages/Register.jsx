import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div id="registration" className="min-h-screen flex items-center justify-center">
            <div className="border bg-white rounded-md shadow-md flex items-center justify-center flex-col space-y-8 px-10 py-10">

                <h1 className="text-2xl">Register</h1>

                <div className="flex items-center justify-center space-x-4 space-y-4 flex-wrap max-w-xl">

                    <span></span>

                    <div>
                        <i className="fa-solid fa-user"></i>
                        <input type="text" className="transition delay-200 focus:border-b-pink-500 border-b-2 border-b-gray-200 text-sm pl-3 h-10 w-60 focus:!outline-none" placeholder="Type your name" />
                    </div>

                    <div>
                        <i className="fa-solid fa-phone"></i>
                        <input type="tel" className="transition delay-200 focus:border-b-pink-500 border-b-2 border-b-gray-200 text-sm pl-3 h-10 w-60 focus:!outline-none" placeholder="Type your phone number" />
                    </div>

                    <div>
                        <i className="fa-solid fa-envelope"></i>
                        <input type="email" className="transition delay-200 focus:border-b-pink-500 border-b-2 border-b-gray-200 text-sm pl-3 h-10 w-60 focus:!outline-none" placeholder="Type your email" />
                    </div>

                    <div>
                        <i className="fa-solid fa-location-dot"></i>
                        <input type="text" className="transition delay-200 focus:border-b-pink-500 border-b-2 border-b-gray-200 text-sm pl-3 h-10 w-60 focus:!outline-none" placeholder="Type your address" />
                    </div>

                    <div>
                        <i className="fa-solid fa-lock"></i>
                        <input type="password" className="transition delay-200 focus:border-b-pink-500 border-b-2 border-b-gray-200 text-sm pl-3 h-10 w-60 focus:!outline-none" placeholder="Type your password" />
                    </div>

                    <div>
                        <i className="fa-solid fa-lock"></i>
                        <input type="password" className="transition delay-200 focus:border-b-pink-500 border-b-2 border-b-gray-200 text-sm pl-3 h-10 w-60 focus:!outline-none" placeholder="Confirm your password" />
                    </div>

                </div>

                <div className="w-full">
                    <button className="my-5 bg-pink-600 hover:bg-pink-500 rounded-md p-2 text-white font-medium w-full">Register</button>
                </div>

                <p className="text-sm">
                    <span className="text-gray-500">Already have an account?</span>
                    <Link className="pl-4 underline text-blue-400 hover:text-blue-600" to="/">Login</Link>
                </p>

            </div>
        </div>
    )
}
