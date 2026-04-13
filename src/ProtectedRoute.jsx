
import { Login } from "./Login"
import { Navigate } from "react-router-dom"

export function ProtectedRoute({children})
{ 

    const username=localStorage.getItem("username")


    return username?children:<Navigate to="/login"/>



}