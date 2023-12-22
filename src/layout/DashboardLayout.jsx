import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';

import logo from '../../src/assets/images/logo/logo.png'
import Swal from 'sweetalert2';

const Dashboard = () => {
    const { userLogout } = useAuth();

    const navigate = useNavigate()

    const handleSignOut = () => {

        Swal.fire({
            title: "Are you sure?",
            text: "Want to logout?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#0087EB",
            cancelButtonColor: "#000000",
            confirmButtonText: "Yes, logout"
          }).then((result) => {
            if (result.isConfirmed) {
                userLogout()
                .then(() => {
                    toast.success('Successfully logout')
                    navigate('/')
                })
                .catch(error => {
                    toast.error(error.message);
                })
            }
          });
    }
 

    const menu = (
        <ul className='list-disc px-6 flex flex-col'>
            <li className='hover:text-white hover:bg-zinc-900 hover:rounded-md'>
                <NavLink to='/dashboard/userProfile'>
                    Profile
                </NavLink>
            </li>

            <li className='hover:text-white hover:bg-zinc-900 hover:rounded-md'>
                <NavLink to='/dashboard/addNewTask' >
                    New Task
                </NavLink>
            </li>

            <li className='hover:text-white hover:bg-zinc-900 hover:rounded-md'>
                <NavLink to='/dashboard/taskManagement' >
                    Manage Task
                </NavLink>
            </li>

            <div className="divider font-bold"></div>

            <li className='hover:text-white hover:bg-zinc-900 hover:rounded-md'>
                <button onClick={handleSignOut}>Logout</button>
            </li>

            <li className='hover:text-white hover:bg-zinc-900 hover:rounded-md'>
                <NavLink to='/'>Home</NavLink>
            </li>

        </ul>
    );

    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col h-screen lg:overflow-y-scroll pt-4 px-6">
              
                <Outlet></Outlet>

                <label  htmlFor="my-drawer-2" className="btn absolute top-7 right-7 btn-primary drawer-button lg:hidden "><i className="fa-solid fa-bars"></i></label>

            </div>
            <div className="drawer-side ">

                <div className='flex justify-evenly items-center bg-base-200'>
                    <div>
                        <img className='w-[100px]' src={logo} alt="logo" />
                    </div>

                    <div>
                    <p className="text-[#0087EB] cursor-pointer font-bold">
                SCC Technovision Inc.
              </p>
                    </div>
                </div> 
                 
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu w-80 min-h-full bg-base-200 text-base-content px-8 font-bold">
                    
                   {
                    menu
                   }
                </ul>

            </div>
           
        </div>
    );
};

export default Dashboard;
