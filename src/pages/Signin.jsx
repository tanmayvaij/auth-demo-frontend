import { Link } from "react-router-dom";

export default function Signin() {
    return (
        <div id="login" className="min-h-screen flex items-center justify-center">
            <div className="border bg-white rounded-md shadow-md flex items-center justify-center flex-col space-y-8 px-10 py-10">

                <h1 className="text-2xl">Login</h1>

                <div>
                    <i className="fa-solid fa-envelope"></i>
                    <input type="email" className="transition delay-200 focus:border-b-pink-500 border-b-2 border-b-gray-200 text-sm pl-3 h-10 w-60 focus:!outline-none" placeholder="Type your email" />
                </div>

                <div>
                    <i className="fa-solid fa-lock"></i>
                    <input type="password" className="transition delay-200 focus:border-b-pink-500 border-b-2 border-b-gray-200 text-sm pl-3 h-10 w-60 focus:!outline-none" placeholder="Type your password"  />
                </div>

                <Link className="text-xs text-blue-400 underline hover:text-blue-700" to="/forgotpassword">Forgot password ?</Link>

                <div className="w-full">
                    <button className="bg-pink-600 hover:bg-pink-500 rounded-md p-2 text-white font-medium w-full">Login</button>
                </div>

                <span className="text-gray-500 text-sm">Or Sign in using</span>

                <div className="flex text-2xl items-center space-x-3">
                    <i className="text-blue-900 fa-brands fa-facebook"></i>
                    <i className="text-blue-400 fa-brands fa-twitter"></i>
                    <i className="text-red-600 fa-brands fa-google"></i>
                </div>

                <p className="text-sm">
                    <span className="text-gray-500">Don't have an account?</span>
                    <Link className="pl-4 underline text-blue-400 hover:text-blue-600" to="/signup">Sign up</Link> 
                </p>

            </div>
        </div>
    )
}
