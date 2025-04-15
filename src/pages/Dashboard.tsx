import { DashboarCards } from "../components/DashboardCards";
import { useEffect } from "react";

export function DashBoard() {

  useEffect(() => {
      document.title = "DashBoard";
    }, []);

  return(
    <div className="w-full min-h-screen bg-gray-200 flex justify-center"> 
      <DashboarCards ProjectName="Projeto - Novo Dev da SPOT"/>
    </div>
  )
}
