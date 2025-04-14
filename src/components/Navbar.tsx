import { useState } from "react"
import { UserAvatar } from "./UserAvatar";
import { Navigate, useNavigate } from "react-router-dom";

function NavBar() {
  const [ open, setOpen ] = useState(false);
  const navigate = useNavigate();

  const logOut = () => {
    navigate('/login');
  };

  return (
    <>
      <nav className="w-full bg-white shadow-sm shadow-orange-300 px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold text-orange-400">
          DashBoard
        </div>
        <div className="flex items-center space-x-4">
          <UserAvatar open={open} setOpen={setOpen} />
        </div>
      </nav>

      {open && (<div id="userOptions" className={`rounded-md fixed p-2 right-0 bg-white shadow transform transition-transform duration-300 ease-in-out z-50 ${open? 'translate-x-0' : 'translate-x-full'}`}>
        <button className="font-bold text-sm rounded-full w-14 hover:bg-orange-300 text-center" onClick={logOut}>Sair</button>
      </div>)}
    </>
  )
}

export default NavBar