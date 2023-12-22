import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import About from "../pages/About/About";
import NewTask from "../pages/NewTask/NewTask";
import Contact from "../pages/Contact/Contact";
import LearnMore from "../pages/LearnMore/LearnMore";
import DashboardLayout from "../layout/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../pages/Dashboard/UserProfile";
import AddNewTask from "../pages/Dashboard/AddNewTask";
import TaskManagement from "../pages/Dashboard/TaskManagement";

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
            },

            {
                path : 'learnMore',
                element : <LearnMore></LearnMore>
            }
        ]
    },

    {path : '/login', element : <Login/>},

    {path : '/register', element : <Register/>},

    {
        path : 'dashboard',
        element : <PrivateRoute><DashboardLayout/></PrivateRoute>,
        children : [
            {
                path : 'userProfile',
                element : <UserProfile></UserProfile>
            },

            {
                path : 'addNewTask',
                element : <AddNewTask></AddNewTask>
            },

            {
                path : 'taskManagement',
                element : <TaskManagement></TaskManagement>
            }
        ]
    } 
])

export default Route;