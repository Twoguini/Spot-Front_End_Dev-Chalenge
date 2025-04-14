import NavBar from "./Navbar";

export function DashboarCards() {
  return(
    <div className="mt-[8%] md:mt-[2%] w-7/10 md:w-8/10 shadow-lg shadow-gray-300"> 
      <NavBar />
      <div className="w-full h-9/10 bg-gray-100 columns-2 gap-4 flex justify-center">
        <div className="w-4/10 h-fit mt-4 bg-white p-3 rounded-lg">
          <div className="text-left">Overview</div>
          <div className="columns-4">
            <div>
              <div>Revenue</div>
            </div>
            <div>Leads</div>
            <div>Conversions</div>
            <div>Coatper Lead</div>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}