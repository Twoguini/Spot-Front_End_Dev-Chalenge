import { useState } from "react"
import { UserAvatar } from "./UserAvatar";
import { useNavigate } from "react-router-dom";

interface UseNavbarProps {
  ProjectName: string;
};

function NavBar({ProjectName}: UseNavbarProps) {
  const [ open, setOpen ] = useState(false);
  const navigate = useNavigate();

  const logOut = () => {
    navigate('/');
  };

  return (
    <>
      <nav className="w-full bg-white px-3 py-3 flex items-center justify-between border-b-2 border-gray-200 rounded-t-lg">
        <div className="md:text-2xl text-xl font-bold text-gray-700">
          DashBoard
        </div>
        <div className="hidden text-xl font-bold text-gray-700 -ml-[7%] md:block">
          {ProjectName}
        </div>
        <div className="flex items-center space-x-4">
          <UserAvatar open={open} setOpen={setOpen} BgOrange={true} />
        </div>
      </nav>

      {open && (<div id="userOptions" className={`rounded-md fixed p-2 right-0 bg-white shadow transform transition-transform duration-300 ease-in-out z-50 ${open? '-translate-x-[88%] md:-translate-x-[200%]' : 'translate-x-full'}`}>
        <button className="font-bold text-sm rounded-full w-14 hover:bg-orange-300 text-center" onClick={logOut}>Sair</button>
      </div>)}
    </>
  )
}

export default NavBar