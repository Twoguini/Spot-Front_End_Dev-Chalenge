export function MetricsGraphic() {
  return(
    <div className="w-5/6 bg-white rounded-lg shadow-lg">
      <h2 className="text-base font-bold text-gray-700 hover:text-orange-400 text-center">Desempenho da Campanha</h2>

      <div className="flex items-end justify-between h-64 border-l border-b border-gray-700 px-4 relative">
        <div className="flex flex-col items-center w-4/50 text-gray-700 hover:text-orange-600">
          <div className="h-16 bg-orange-500 w-full rounded-t-md hover:bg-orange-600"></div>
          <span className="mt-2 text-sm">Seg</span>
        </div>
        <div className="flex flex-col items-center w-4/50 text-gray-700 hover:text-orange-600">
          <div className="h-32 bg-orange-500 w-full rounded-t-md hover:bg-orange-600"></div>
          <span className="mt-2 text-sm">Ter</span>
        </div>
        <div className="flex flex-col items-center w-4/50 text-gray-700 hover:text-orange-600">
          <div className="h-48 bg-orange-500 w-full rounded-t-md hover:bg-orange-600"></div>
          <span className="mt-2 text-sm">Qua</span>
        </div>
        <div className="flex flex-col items-center w-4/50 text-gray-700 hover:text-orange-600">
          <div className="h-28 bg-orange-500 w-full rounded-t-md hover:bg-orange-600"></div>
          <span className="mt-2 text-sm">Qui</span>
        </div>
        <div className="flex flex-col items-center w-4/50 text-gray-700 hover:text-orange-600">
          <div className="h-40 bg-orange-500 w-full rounded-t-md hover:bg-orange-600"></div>
          <span className="mt-2 text-sm">Sex</span>
        </div>
        <div className="flex flex-col items-center w-4/50 text-gray-700 hover:text-orange-600">
          <div className="h-20 bg-orange-500 w-full rounded-t-md hover:bg-orange-600"></div>
          <span className="mt-2 text-sm">Sáb</span>
        </div>
        <div className="flex flex-col items-center w-4/50 text-gray-700 hover:text-orange-600">
          <div className="h-10 bg-orange-500 w-full rounded-t-md hover:bg-orange-600"></div>
          <span className="mt-2 text-sm">Dom</span>
        </div>

        <div className="absolute left-0 w-full h-full flex flex-col justify-between text-sm text-gray-700 pointer-events-none">
          <div className="border-t border-gray-400"><span className="ml-[-2.5rem]">100%</span></div>
          <div className="border-t border-gray-400"><span className="ml-[-2.5rem]">75%</span></div>
          <div className="border-t border-gray-400"><span className="ml-[-2.5rem]">50%</span></div>
          <div className="border-t border-gray-400"><span className="ml-[-2.5rem]">25%</span></div>
          <div><span className="ml-[-2.5rem]">0%</span></div>
        </div>
      </div>
    </div>
  );
}