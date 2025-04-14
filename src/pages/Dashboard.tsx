import { DashboarCards } from "../components/DashboardCards";
import { useEffect } from "react";

export function DashBoard() {

  useEffect(() => {
      document.title = "DashBoard";
    }, []);

  return(
    <div className="fixed flex justify-center w-full h-full bg-gray-100">
      <DashboarCards />
    </div>
  )
}