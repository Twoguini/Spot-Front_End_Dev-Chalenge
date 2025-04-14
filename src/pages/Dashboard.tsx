import NavBar from "../components/Navbar"
import { useEffect } from "react";

export function DashBoard() {

  useEffect(() => {
      document.title = "DashBoard";
    }, []);

  return(
    <NavBar />
  )
}