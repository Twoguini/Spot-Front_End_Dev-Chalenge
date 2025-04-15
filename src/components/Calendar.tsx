export function Calendar() {
  return(
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex justify-between items-center p-2 bg-gray-700 text-white">
        <button className="font-bold text-sm">&lt;</button>
        <h2 className="text-sm font-semibold">Abril 2025</h2>
        <button className="font-bold text-sm">&gt;</button>
      </div>

      <div className="grid grid-cols-7 bg-orange-100 text-gray-700 font-semibold text-center py-1 text-xs">
        <div>Dom</div>
        <div>Seg</div>
        <div>Ter</div>
        <div>Qua</div>
        <div>Qui</div>
        <div>Sex</div>
        <div>Sáb</div>
      </div>

      <div className="grid grid-cols-7 gap-2 p-4 text-center text-gray-800 text-xs">
        <div className="py-1 hover:bg-orange-600 hover:text-white hover:font-semibold hover:rounded-sm"></div>
        <div className="py-1 hover:bg-orange-600 hover:text-white hover:font-semibold hover:rounded-sm"></div>
        <div className="py-1 hover:bg-orange-600 hover:text-white hover:font-semibold hover:rounded-sm">1</div>
        <div className="py-1 hover:bg-orange-600 hover:text-white hover:font-semibold hover:rounded-sm">2</div>
        <div className="py-1 hover:bg-orange-600 hover:text-white hover:font-semibold hover:rounded-sm">3</div>
        <div className="py-1 hover:bg-orange-600 hover:text-white hover:font-semibold hover:rounded-sm">4</div>
        <div className="py-1 hover:bg-orange-600 hover:text-white hover:font-semibold hover:rounded-sm">5</div>

        <div className="py-1 py-1 hover:bg-orange-600 hover:text-white hover:font-semibold hover:rounded-sm">6</div>
        <div className="py-1 py-1 hover:bg-orange-600 hover:text-white hover:font-semibold hover:rounded-sm">7</div>
        <div className="py-1 py-1 hover:bg-orange-600 hover:text-white hover:font-semibold hover:rounded-sm">8</div>
        <div className="py-1 py-1 hover:bg-orange-600 hover:text-white hover:font-semibold hover:rounded-sm">9</div>
        <div className="py-1 py-1 hover:bg-orange-600 hover:text-white hover:font-semibold hover:rounded-sm">10</div>
        <div className="py-1 py-1 hover:bg-orange-600 hover:text-white hover:font-semibold hover:rounded-sm">11</div>
        <div className="py-1 py-1 hover:bg-orange-600 hover:text-white hover:font-semibold hover:rounded-sm">12</div>

        <div className="py-1 py-1 hover:bg-orange-600 hover:text-white hover:font-semibold hover:rounded-sm">13</div>
        <div className="py-1 py-1 hover:bg-orange-600 hover:text-white hover:font-semibold hover:rounded-sm">14</div>
        <div className="py-1 py-1 hover:bg-orange-600 hover:text-white hover:font-semibold hover:rounded-sm">15</div>
        <div className="py-1 py-1 hover:bg-orange-600 hover:text-white hover:font-semibold hover:rounded-sm">16</div>
        <div className="py-1 py-1 bg-orange-600 text-white font-semibold rounded-sm">17</div>
        <div className="py-1 py-1 hover:bg-orange-600 hover:text-white hover:font-semibold hover:rounded-sm">18</div>
        <div className="py-1 py-1 hover:bg-orange-600 hover:text-white hover:font-semibold hover:rounded-sm">19</div>

        <div className="py-1 py-1 hover:bg-orange-600 hover:text-white hover:font-semibold hover:rounded-sm">20</div>
        <div className="py-1 py-1 hover:bg-orange-600 hover:text-white hover:font-semibold hover:rounded-sm">21</div>
        <div className="py-1 py-1 hover:bg-orange-600 hover:text-white hover:font-semibold hover:rounded-sm">22</div>
        <div className="py-1 py-1 hover:bg-orange-600 hover:text-white hover:font-semibold hover:rounded-sm">23</div>
        <div className="py-1 py-1 hover:bg-orange-600 hover:text-white hover:font-semibold hover:rounded-sm">24</div>
        <div className="py-1 py-1 hover:bg-orange-600 hover:text-white hover:font-semibold hover:rounded-sm">25</div>
        <div className="py-1 py-1 hover:bg-orange-600 hover:text-white hover:font-semibold hover:rounded-sm">26</div>

        <div className="py-1 py-1 hover:bg-orange-600 hover:text-white hover:font-semibold hover:rounded-sm">27</div>
        <div className="py-1 py-1 hover:bg-orange-600 hover:text-white hover:font-semibold hover:rounded-sm">28</div>
        <div className="py-1 py-1 hover:bg-orange-600 hover:text-white hover:font-semibold hover:rounded-sm">29</div>
        <div className="py-1 py-1 hover:bg-orange-600 hover:text-white hover:font-semibold hover:rounded-sm">30</div>
      </div>
  </div>
  )
}