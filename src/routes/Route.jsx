import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import About from "../pages/About/About";
import NewTask from "../pages/NewTask/NewTask";
import Contact from "../pages/Contact/Contact";

const Route = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout/>,
        errorElement : <ErrorPage/>,
        children : [
            {
                path : '/',
                element : <Home/>  
            },

            {
                path : 'about',
                element : <About></About>
            },

            {
                path : 'newTask',
                element : <NewTask></NewTask>
            },

            {
                path : 'contact',
                element : <Contact></Contact>
            }
        ]
    },

    {path : '/login', element : <Login/>},

    {path : '/register', element : <Register/>}
])

export default Route;