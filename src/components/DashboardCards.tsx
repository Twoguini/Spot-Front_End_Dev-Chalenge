import { Calendar } from "./Calendar";
import { MetricsGraphic } from "./MetricsGraphic";
import NavBar from "./Navbar";
import { UserAvatar } from "./UserAvatar";
import '../index.css'

interface DashboarCardsProps {
  ProjectName: string;
};

export function DashboarCards({ProjectName}: DashboarCardsProps) {
  return(
    
    <div className="md:overflow-hidden mt-[8%] md:mt-[2%] w-9/10 md:w-8/10 shadow-lg shadow-gray-300 h-fit rounded-b-lg"> 
      {/* Navbar Component */}
      <NavBar ProjectName={ProjectName} />
      {/* Columns Div*/}
      <div className="w-full bg-gray-100 md:gap-4 md:flex md:justify-center">
        {/* Left Column Div */}
        <div className="mx-auto md:mx-0 md:w-6/13 h-fit mt-2">
          {/* OverView */}
          <div className="w-full h-fit bg-white py-2 rounded-lg">
            <div className="flex justify-between text-gray-700 hover:text-orange-400">
              <div className="ml-3 font-bold">Visão Geral</div>
              <div className="mr-3 font-extrabold">&gt;</div>
            </div>
            <div className="flex justify-evenly">
              <div className="text-center text-gray-700 hover:text-orange-400 mt-3">
                <div className="font-semibold font-Montserrat">R$5000.00</div>
                <div className="text-xs font-medium">Receita</div>
              </div>
              <div className="text-center text-gray-700 hover:text-orange-400 mt-3">
                <div className="font-semibold font-Montserrat">1.282</div>
                <div className="text-xs font-medium">Leads</div>
              </div>
              <div className="text-center text-gray-700 hover:text-orange-400 mt-3">
                <div className="font-semibold font-Montserrat">R$600.00</div>
                <div className="text-xs font-medium">Conversions</div>
              </div>
            </div>
          </div>
          {/* Demand Requests */}
          <div className="w-full h-fit bg-white p-3 rounded-lg mt-4">
            <div className="flex justify-between text-gray-700 hover:text-orange-400">
              <div className="font-bold">Solicitações de Demandas</div>
              <div className="font-extrabold">&gt;</div>
            </div>
            <ul className="list-disc font-medium text-sm mt-3 list-inside">
              <li>Estratégia de Socialmedia</li>
              <li>Roteiro dos Vídeos Insta</li>
              <li>Contratação de Modelos</li>
            </ul>
            <button className="mt-3 w-full mx-auto bg-orange-500 text-center text-white font-medium text-sm rounded-sm py-1 hover:bg-orange-600">Criar Nova Solicitação</button>
          </div>
          {/* Calendar */}
          <div className="w-full h-fit bg-white p-3 rounded-lg mt-4">
            <Calendar />
          </div>
          {/* Activity History */}
          <div className="w-full h-fit bg-white px-3 pt-3 rounded-lg mt-4">
            <div className="flex justify-between text-gray-700 hover:text-orange-400">
              <div className="font-bold">Histórico de Atividades</div>
              <div className="font-extrabold">&gt;</div>
            </div>
            <div className="mt-3 flex justify-between">
              <ul className="list-disc font-medium text-sm list-inside">
                <li>Campanha Editada</li>
                <li>Parceria Primo Rico Editado</li>
                <li>Reunião das Métricas</li>
              </ul>
              <ul className="font-medium text-sm">
                <li>1 Dias Atrás</li>
                <li>4 Dias Atrás</li>
                <li>8 Dias Atrás</li>
              </ul>
            </div>
          </div>
          {/* End Left Column Div */}
        </div>
        {/* Rigth Column Div */}
        <div className="mx-auto md:mx-0 md:w-6/13 h-full mt-2">
          {/* Metrics Graphic */}
          <div className="w-full h-fit bg-white p-3 rounded-lg justify-center flex">
              <MetricsGraphic />
          </div>
          {/* Notifications */}
          <div className="w-full h-fit bg-white p-2 rounded-lg mt-2">
              <div className="text-left font-semibold text-lg border-b-1 border-gray-300">Notificações</div>
              <ul>
                <li>
                  <div className="py-1 border-b-1 border-gray-300 flex text-gray-700 hover:text-orange-500">
                    <div className="w-4 h-4 m-4 rounded-lg bg-white border-4 border-orange-500"></div> 
                    <div>
                      <div className="font-semibold">Diminuição no Alcance da Campanha</div>
                      <div className="text-xs font-semibold">2 Horas Atrás</div>
                    </div>
                    <div className="ml-auto font-extrabold my-auto">&gt;</div>
                  </div>
                </li>
                <li>
                  <div className="py-1 border-b-1 border-gray-300 flex text-gray-700 hover:text-orange-500">
                    <div className="w-4 h-4 m-4 rounded-lg bg-white border-4 border-orange-500"></div> 
                    <div>
                      <div className="font-semibold">Pagar Facebook Ads</div>
                      <div className="text-xs font-semibold">2 Horas Atrás</div>
                    </div>
                    <div className="ml-auto font-extrabold my-auto">&gt;</div>
                  </div>
                </li>
                <li>
                  <div className="py-1 border-b-1 border-gray-300 flex text-gray-700 hover:text-orange-500">
                    <div className="w-4 h-4 m-4 bg-orange-500 rounded-lg"></div> 
                    <div>
                      <div className="font-semibold">Vencimento da Fatura Cartão Nubank</div>
                      <div className="text-xs font-semibold">2 Horas Atrás</div>
                    </div>
                    <div className="ml-auto font-extrabold my-auto">&gt;</div>
                  </div>
                </li>
              </ul>
          </div>
          {/* Settings */}
          <div className="w-full h-fit bg-white pt-2 pl-2 rounded-lg mt-4">
            <div className="text-left font-semibold text-lg border-b-1 border-gray-300">Configurações</div>
            <div className="flex py-2 border-b-1 border-gray-300 text-gray-700 hover:text-orange-500 pr-2">
              <UserAvatar open={false} setOpen={() => {return false}} BgOrange={false} />
              <div ml-4>
                <div className="font-semibold">Guilherme Comunian</div>
                <div className="text-xs font-medium">guilhermerscomunian@gmail.com</div>
              </div>
              <div className="ml-auto font-extrabold my-auto">&gt;</div>
            </div>
            <div className="flex mt-2 ml-2 text-gray-700 hover:text-orange-500 pr-2 pb-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
                <path d="M19.43 12.98c.04-.32.07-.66.07-1s-.03-.68-.07-1l2.11-1.65a.5.5 0 00.12-.64l-2-3.46a.5.5 0 00-.6-.22l-2.49 1a7.03 7.03 0 00-1.73-1L14.5 2.5a.5.5 0 00-.5-.5h-4a.5.5 0 00-.5.5l-.38 2.51a7.03 7.03 0 00-1.73 1l-2.49-1a.5.5 0 00-.6.22l-2 3.46a.5.5 0 00.12.64L4.57 10c-.04.32-.07.66-.07 1s.03.68.07 1l-2.11 1.65a.5.5 0 00-.12.64l2 3.46a.5.5 0 00.6.22l2.49-1a7.03 7.03 0 001.73 1l.38 2.51a.5.5 0 00.5.5h4a.5.5 0 00.5-.5l.38-2.51a7.03 7.03 0 001.73-1l2.49 1a.5.5 0 00.6-.22l2-3.46a.5.5 0 00-.12-.64L19.43 12.98zM12 15a3 3 0 110-6 3 3 0 010 6z"/>
              </svg>
              <div className="font-semibold">Preferências</div>
              <div className="ml-auto font-extrabold my-auto">&gt;</div>
            </div>
          </div>
          {/* End Rigth Div */}
        </div>
        {/* End Columns Div */}
      </div>
    </div>
  );
}