import { useState } from "react"

function NavBar() {
  const [ open, setOpen ] = useState(false);

  return (
    <>
      <nav className="w-full bg-white shadow-sm shadow-orange-300 px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold text-orange-400">
          DashBoard
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xl" onClick={() => setOpen(!open)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-orange-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"/>
            </svg>
          </div>
        </div>
      </nav>

      <div id="userOptions" className={`rounded-md fixed p-2 right-0 bg-white shadow transform transition-transform duration-300 ease-in-out z-50 ${open? 'translate-x-0' : 'translate-x-full'}`}>
        <button className="font-bold text-sm rounded-full w-14 hover:bg-orange-300 text-center">Sair</button>
      </div>
    </>
  )
}

export default NavBar