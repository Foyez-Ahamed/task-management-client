import { AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo/logo.png";
import Container from "../Container/Container";
// import useAuth from "../../hooks/useAuth";
// import toast from "react-hot-toast";
// import { useTheme } from "../../hooks/useTheme";
// import { FaMoon } from 'react-icons/fa';
// import { BsFillSunFill } from 'react-icons/bs';

const Navbar = () => {
  //   const { user, userLogout } = useAuth();

  //   const {changeTheme, mode} = useTheme();

  //   const handleLogout = () => {
  //     userLogout()
  //       .then(() => {
  //         toast.success("Logout Successfully");
  //       })
  //       .catch();
  //   };

  const navItems = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isActive ? "text-[#0087EB] underline" : isPending ? "pending" : ""
        }
      >
        <li className="text-[16px] ml-4 font-medium ">Home</li>
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isActive ? "text-[#0087EB] underline" : isPending ? "pending" : ""
        }
      >
        <li className="text-[16px] font-medium ml-4">About</li>
      </NavLink>

      <NavLink
        to="/newTask"
        className={({ isActive, isPending }) =>
          isActive ? "text-[#0087EB] underline" : isPending ? "pending" : ""
        }
      >
        <li className="text-[16px] font-medium  ml-4">New Task</li>
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isActive ? "text-[#0087EB] underline" : isPending ? "pending" : ""
        }
      >
        <li className="text-[16px] font-medium ml-4">Contact</li>
      </NavLink>
    </>
  );

  return (
    <div>
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <AiOutlineMenu className="text-2xl"></AiOutlineMenu>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-4 font-medium dark:text-black"
              >
                {navItems}
              </ul>
            </div>

            <div className="flex justify-center items-center">
              <Link to="/">
                <a className="cursor-pointer">
                  {" "}
                  <img
                    className="hidden lg:block lg:w-[100px] rounded-md lg:ml-[-12px] lg:pt-2"
                    src={logo}
                    alt="logo image"
                  />{" "}
                </a>
              </Link>

              {/* <button onClick={changeTheme} className="mt-[-4px] lg:mt-1"> {mode === 'dark'? <BsFillSunFill className="lg:text-xl"></BsFillSunFill> : <FaMoon className="lg:text-xl"></FaMoon>} </button> */}
            </div>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>

          <div className="navbar-end">
            {/* {user?.email ? (
    <>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={user.photoURL} />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="justify-between">{user.displayName}</a>
          </li>
          <li>
            <a>{user.email}</a>
          </li>
          <li>
            <a onClick={handleLogout}>Logout</a>
          </li>
        </ul>
      </div>
    </>
  ) : (
    <Link to="/login">
      {" "}
      <button className="text-[16px] font-medium bg-[#0087EB] hover:bg-gray-700  text-white px-4 py-1 lg:py-2 rounded-md">
        Login
      </button>
    </Link>
  )} */}

            <button className="text-[16px] font-medium">Learn More</button>

          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
