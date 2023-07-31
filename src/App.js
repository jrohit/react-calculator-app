import "./App.css";
import { FaCalculator } from "react-icons/fa";
import Calculator from "./component/calculator";

function App() {
  return (
    <>
      <div className="text-center">
        <div className="min-h-screen bg-gray-500">
          <div className="bg-gray-400 justify-center items-center flex px-4 py-2 md:px-8 md:py-4">
            <FaCalculator size={35} />
            <div className="mx-2 md:mx-10 font-extrabold text-xl md:text-2xl">
              Calculator App
            </div>
          </div>
          <div className="px-4 md:px-8">
            <Calculator />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
