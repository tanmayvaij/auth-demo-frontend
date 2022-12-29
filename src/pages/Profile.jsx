import { useEffect, useState } from "react"
import { GlobalStates } from "../context"

export default function Profile() {

    const { SERVER_ADDRESS } = GlobalStates()

    const [ state, setState ] = useState({})


    useEffect(() => {

        const getUseData = async () => {

            const res = await fetch(`${SERVER_ADDRESS}/api/auth/getuser`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "authtoken": localStorage.getItem("authtoken")
                }
            })
    
            const { user } = await res.json()
            
            setState(user)

        }

        getUseData()

    }, [])


    const signOut = () => {
        localStorage.clear()
        location.reload()
    }


    return (
        <div id="profile" className="min-h-screen flex items-center justify-center">
            <div className="border bg-white rounded-md shadow-md flex items-center justify-center flex-col space-y-8 px-10 py-10">

                <i className="fa-solid fa-user-secret text-7xl  bg-slate-800 rounded-full p-5 text-blue-500"></i>

                <h1 className="text-2xl">Profile</h1>

                <div className="flex items-center justify-center space-x-4 space-y-4 flex-wrap max-w-xl">

                    <span></span>

                    <div>
                        <i className="fa-solid fa-user"></i>
                        <input 
                            value={state.name} 
                            disabled={true} 
                            type="text" 
                            className="text-sm pl-3 h-10 w-60 focus:!outline-none bg-white"
                        />
                    </div>

                    <div>
                        <i className="fa-solid fa-phone"></i>
                        <input 
                            value={state.number} 
                            disabled={true} 
                            type="tel" 
                            className="text-sm pl-3 h-10 w-60 focus:!outline-none bg-white" 
                        />
                    </div>

                    <div>
                        <i className="fa-solid fa-envelope"></i>
                        <input 
                            value={state.email} 
                            disabled={true}  
                            type="email" 
                            className="text-sm pl-3 h-10 w-60 focus:!outline-none bg-white"     
                        />
                    </div>

                    <div>
                        <i className="fa-solid fa-location-dot"></i>
                        <input 
                            value={state.address} 
                            disabled={true}  
                            type="text" 
                            className="text-sm pl-3 h-10 w-60 focus:!outline-none bg-white" 
                        />
                    </div>

                </div>

                <p className="text-sm">
                    <button 
                        className="mt-16 pl-4 underline text-blue-400 hover:text-blue-600"
                        onClick={signOut}
                    >
                        Sign out
                    </button>
                </p>

            </div>
        </div>
    )
}
