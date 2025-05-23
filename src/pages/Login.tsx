import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login";
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const defaultUser = import.meta.env.VITE_CHALLENGE_DEFAULT_USER;
    const defaultPass = import.meta.env.VITE_CHALLENGE_DEFAULT_PASSWORD;

    if (user === defaultUser && pass === defaultPass) {
      navigate('/dashboard');
    } else {
      setError("Usuário ou senha inválidos.");
    }
  };

  return(
    <div className="fixed left-0 w-full h-full flex items-center place-content-center bg-gray-200">
      <div className="text-center bg-gray-200 rounded-sm">
        <div className="mb-2 text-6xl font-bold subpixel-antialiased text-gray-700 hidden md:block">Bem Vindo de Volta!</div>
        <div className="mb-2 text-6xl font-bold subpixel-antialiased text-gray-700 md:hidden">Bem Vindo!</div>
        <div className="mb-2 text-gray-700 text-xl">Login.</div>
        <div className="w-xs md:w-xl">
          <form onSubmit={handleLogin}>
            <div className="mb-2 text-left">
              <label htmlFor="user" className="font-semibold text-gray-700">Usuário:</label>
              <input type="text" id="user" className="bg-white w-full h-10 rounded-md border-1 border-gray-300 pl-1 focus:outline-orange-600 hover:border-orange-600" value={user} onChange={(e) => setUser(e.target.value)} required/>
            </div>
            <div className="mb-2 text-left">
              <label htmlFor="password" className="font-semibold text-gray-700">Senha:</label>
              <input type="password" id="password" className="bg-white w-full h-10 rounded-md border-1 border-gray-300 pl-1 focus:outline-orange-600 hover:border-orange-600" value={pass} onChange={(e) => setPass(e.target.value)} required/>
            </div> 
            <div className="flex items-center gap-1 mb-2">
              <input type="checkbox" name="rememberMe" id="rememberMe" className="accent-orange-600"/>
              <label htmlFor="rememberMe" className="font-semibold text-sm text-gray-700">Mantenha Conectado</label>
            </div>
            <input type="submit" value="Entrar" className="bg-orange-500 p-1 rounded-md w-full border-1 border-orange-600 text-white font-semibold text-lg hover:bg-orange-700"/>
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}