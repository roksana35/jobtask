import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../authprovider/Authprovider";
import logo from "../../assets/logo3.png.png";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);

  const handleLogOut = () => {
    logoutUser();
  };

  const navInfo = (
    <>
      <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-green-600 font-semibold' : 'font-semibold'}>Home</NavLink></li>
      <li><NavLink to='/login' className={({ isActive }) => isActive ? 'text-green-600 font-semibold' : 'font-semibold'}>Login</NavLink></li>
      <li><NavLink to='/register' className={({ isActive }) => isActive ? 'text-green-600 font-semibold' : 'font-semibold'}>Register</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown relative">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box absolute z-50 mt-3 w-52 p-2 shadow-md"
          >
            {navInfo}
          </ul>
        </div>
        <img src={logo} className="w-[120px] lg:w-[190px] h-full lg:ml-8" alt="Logo" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navInfo}
        </ul>
      </div>
      <div className="navbar-end">
        {user && (
          <div className="dropdown dropdown-end flex items-center justify-center">
            <div title={user?.displayName} className="w-10 h-10 rounded-full overflow-hidden">
              <img className="w-full h-full object-cover" src={user?.photoURL} alt={user?.displayName} />
            </div>
            <button onClick={handleLogOut} className="btn bg-purple-600 text-white ml-2">LogOut</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
