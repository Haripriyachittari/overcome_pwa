import "./App.css";
import Lottie from "react-lottie";
import animationData from "./lotties/otgirl.json";
import confetti from "./lotties/confetti.json";
import { useState } from "react";

function App() {
  const confusedOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const confettiOptions = {
    loop: true,
    autoplay: true,
    animationData: confetti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [seeSolution, setSeeSolution] = useState(false);
  return (
    <div className="p-4  flex flex-col  justify-center  bg-[#242424] items-center h-[100vh]">
      {seeSolution ? (
        <div className="    h-full w-full  flex flex-col justify-center items-center relative">
          <p className="md:text-5xl relative top-10 text-center text-4xl font-extrabold bg-gradient-to-r  from-pink-500 bg-clip-text text-transparent to-yellow-500">
            Shut the fuck up
          </p>
          <Lottie options={confettiOptions} height={200} width={200} />
          <p className="text-lg sm:text-2xl text-center my-2 font-semibold    text-white">
            Stop it, Overthinking is the roller coaster ride with no end. Time
            to get off and enjoy the carnival of life!
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl md:text-4xl my-2  font-extrabold bg-gradient-to-r  from-pink-500 bg-clip-text text-transparent to-yellow-500">
            Hi, Folks
          </p>
          <p className="text-lg sm:text-2xl  text-center my-2 font-semibold    text-white">
            I'm Hp, the former overthinking champion! But not anymore.
          </p>
          <Lottie options={confusedOptions} height={250} width={250} />
          <button
            onClick={() => setSeeSolution(true)}
            className="rounded-md text-xl p-4 font-bold bg-gradient-to-r cursor-pointer  from-pink-500 my-3 to-yellow-500 text-white"
          >
            Find out how
          </button>
        </div>
      )}
      <p className="text-xs text-gray-400 fixed bottom-0 pb-3">
        Powered by Hp.
      </p>
    </div>
  );
}

export default App;
