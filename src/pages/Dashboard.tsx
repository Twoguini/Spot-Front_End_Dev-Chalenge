import { DashboarCards } from "../components/DashboardCards";
import { useEffect } from "react";

export function DashBoard() {

  useEffect(() => {
      document.title = "DashBoard";
    }, []);

  return(
    <div className="fixed flex justify-center w-full min-h-full bg-gray-200">
      <DashboarCards ProjectName="Projeto - Novo Dev da SPOT"/>
    </div>
  )
}
