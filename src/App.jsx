import { useState } from "react";

function App() {
  const [color, setcolor] = useState("White");

  return (
    <div
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center top-20 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-inner shadow-gray-600  px-3 py-2 rounded-3xl ">
          <div className="text-gray-600 font-bold px-3 py-3 rounded-3xl">
            Background Color Changer
          </div>
        </div>
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-inner shadow-gray-600  px-3 py-3 rounded-3xl">
          <button
            onClick={() => setcolor("#EDE8F5")}
            className="outline-none px-4 py-1 rounded-full text-gray-500 font-bold shadow-inner shadow-gray-600 "
            style={{ backgroundColor: "#EDE8F5" }}
          >
            OffWhite
          </button>
          <button
            onClick={() => setcolor("#BAB2B5")}
            className="outline-none px-4 py-1 rounded-full text-gray-500 font-bold shadow-inner shadow-gray-800"
            style={{ backgroundColor: "#BAB2B5" }}
          >
            Cream
          </button>
          <button
            onClick={() => setcolor("#123C69")}
            className="outline-none px-4 py-1 rounded-full text-gray-500 font-bold shadow-inner shadow-gray-800"
            style={{ backgroundColor: "#123C69" }}
          >
            Green
          </button>
          <button
            onClick={() => setcolor("pink")}
            className="outline-none px-4 py-1 rounded-full text-gray-500 font-bold shadow-inner shadow-gray-800"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setcolor("#FBE9D0")}
            className="outline-none px-4 py-1 rounded-full text-gray-500 font-bold shadow-inner shadow-gray-800"
            style={{ backgroundColor: "#FBE9D0" }}
          >
            White
          </button>
          <button
            onClick={() => setcolor("#90AEAD")}
            className="outline-none px-4 py-1 rounded-full text-gray-500 font-bold shadow-inner shadow-gray-800"
            style={{ backgroundColor: "#90AEAD" }}
          >
            Sky
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
