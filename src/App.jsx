import Nav from "./components/Nav";
import image from "../public/house.jpg";
function App() {
  return (
    <div className="bg-black h-screen w-screen px-20 py-5">
      <Nav />

      <div className="container text-white flex flex-row justify-around items-center py-5 h-[70%] px-24">
        <div className="space-y-4 w-2/3">
          <h1 className="text-7xl capitalize font-semibold">
            Discover the best properties in Sukrakarta
          </h1>
          <p className="text-gray-500">
            Lorem Ipsum is simply text of the printing typesetting industry
          </p>
          <button className="bg-orange-500 px-4 py-2 rounded-md text-white block mb-10">
            Get started
          </button>
          <div className="flex flex-row w-2/3 justify-center items-center text-white gap-3 text-center gap-y-11">
            <div className="flex flex-col">
              <p>12</p>
              <small className="text-gray-400">Years Experience</small>
            </div>
            <div className="flex flex-col">
              <p>29</p>
              <small className="text-gray-400">Awards Gained</small>
            </div>
            <div className="flex flex-col">
              <p>725+</p>
              <small className="text-gray-400">Properties Build</small>
            </div>
          </div>
        </div>
        <img src={image} alt="House" className="rounded-md w-1/3" />
      </div>
    </div>
  );
}

export default App;
