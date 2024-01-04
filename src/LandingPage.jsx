import { Collapse, Ripple, initTE } from "tw-elements";
import { Link } from "react-router-dom";
initTE({ Collapse, Ripple });

export function LandingPage(props) {
  console.log(props);

  return (
    <div className="relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black">
        <h1 className="text-5xl font-bold">Cobra Pose</h1>
        <p className="text-lg mt-4">Connecting You to Yoga Studios Wherever You Roam.</p>
      </div>
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 mb-4 z-10 ">
        <div
          onClick={props.onSelectButton}
          className="inline-block bg-green-fam-400 hover:bg-blue-700 text-white font-semibold py-2 px-4 border border-light-white-200 rounded shadow bg-opacity-50 hover:bg-opacity-100"
        >
          Find your zen now
        </div>
      </div>

      <div
        className="relative overflow-hidden bg-cover bg-no-repeat bg-blue-500 opacity-25 "
        style={{
          backgroundPosition: "100%",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1598297340628-e525aec0b79d?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          height: "900px",
        }}
      ></div>
    </div>
  );
}
