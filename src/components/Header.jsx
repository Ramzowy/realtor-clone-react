import React from 'react'
import { useLocation, useNavigate } from "react-router-dom"

export default function Header() {

    const location = useLocation();
    const navigate = useNavigate();

    function pathMatchRoute(route){
        if(route === location.pathname){
            return true;
        }  
    }

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
      <nav className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
            <img src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg" alt="logo" className="h-5 cursor-pointer" onClick={() => navigate("/")}/>
        </div>
        <div>
           <ul className="flex space-x-10">
            <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px]  ${pathMatchRoute("/") ? "text-black border-b-red-500" : "border-b-transparent"}`} onClick={() => navigate("/")}>Home</li>
                <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px]  ${pathMatchRoute("/offers") ? "text-black border-b-red-500" : "border-b-transparent"}`} onClick={() => navigate("/offers")}>Offers</li>
            <li  className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] ${pathMatchRoute("/sign-in") ? "text-black border-b-red-500" : "border-b-transparent"}`} onClick={() => navigate("/sign-in")}>Sign In</li>
           </ul>
        </div>
      </nav>
    </div>
  )
}
