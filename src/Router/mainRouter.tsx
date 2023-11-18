import { createBrowserRouter} from "react-router-dom"
import Layout from "../components/common/Layout"
import Homescreen from "../pages/screen/Homescreen"
import {SignUp} from "../pages/auth/SignUp"
import { LogIn } from "../pages/auth/LogIn"
import BookingAppointment from "../pages/home/BookingAppointment"
import ForgotPassword from "../pages/auth/ForgotPassword"
import WelcomePage from "../pages/auth/WelcomePage"

export const mainRouter = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element: <Homescreen/>
            }
        ]
    },
    {
        path:"/sign-up",
        element:<SignUp/>
    },
    {
        path:"/log-in",
        element:<LogIn/>
    },
    {
        path:"/booking",
        element:<BookingAppointment/>
    },
    {
        path:"/Forgot-password",
        element:<ForgotPassword/>
    },
    {
        path:"/welcome-page",
        element:<WelcomePage/>
    }
])