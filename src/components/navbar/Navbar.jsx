
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";
const Navbar = ({ color = "white", showSingOutButton=true, homeRoute=true}) => {
const navigate = useNavigate();

  const handleLogOut = async () =>{
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    try {
      const res = await fetch(`${BASE_URL}/api/userauth/userlogout`,{
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials:'include',
      });
      if(!res.ok){
        throw new Error('Failed to Sign Out');
      }
      if(res.ok){
        localStorage.removeItem('userData');
        navigate('/')
        toast.success("Successfully Sign Out")
      }
    } catch (error) {
      toast.error(error);
    }
  }


  return (
    <div className={`h-20 flex justify-between items-center w-full bg-${color}`}>
        <div className="">{homeRoute && (<Link to={"/"}><span className='text-mygreen text-3xl pl-20 font-bold'> JobBoard</span></Link>) || <span className='text-mygreen text-3xl pl-20 font-bold'> JobBoard</span>}</div>
        {showSingOutButton && <div className='mr-10 ' ><button onClick={handleLogOut} className='h-full w-full border p-1 border-mygreen font-semibold text-mygreen rounded-lg text-2xl hover:bg-mygreen hover:text-white'>Log out</button></div>}
    </div>
  )
}

export default Navbar;

Navbar.propTypes = {
  color: PropTypes.string,
  showSingOutButton: PropTypes.bool,
  homeRoute: PropTypes.bool
};

