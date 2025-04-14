import { useEffect, useRef, useState } from "react";
import { Login } from "./Login"; // This is the next screen
import { useNavigate } from "react-router-dom";

export function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [exit, setExit] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loginAnimateIn, setLoginAnimateIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Landing-Page";
  }, []);

  useEffect(() => {
    containerRef.current?.focus();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleExit();
    }, 6000);

    return () => clearTimeout(timeout);
  }, []);

  const  handleExit = () => {
    setExit(true);
    setShowLogin(true);

    setTimeout(() => {
      setLoginAnimateIn(true);
    }, 50);
  };

  return (
    <>
      <div ref={containerRef} tabIndex={0} className={`fixed left-0 z-20 bg-orange-500 w-full h-full text-center flex items-center justify-center transition-transform duration-700 ease-in-out ${exit ? '-translate-x-full' : 'translate-x-0' }`} onClick={handleExit} onKeyDown={handleExit}>
        <div>
          <div className="text-4xl font-extrabold text-white font-sans sm:text-6xl">SPOT MKT</div>
          <p className="text-white font-semibold">Faça seu marketing mais eficiente</p>
        </div>
      </div>

      {showLogin && (
        <div
          className={`fixed top-0 left-0 z-10 w-full h-full bg-white flex items-center justify-center transition-transform duration-700 ease-in-out ${ loginAnimateIn ? "translate-x-0" : "translate-x-full"}`} onTransitionEnd={ () => navigate('/login')}>
          <Login />
        </div>
      )}
    </>
  );
}