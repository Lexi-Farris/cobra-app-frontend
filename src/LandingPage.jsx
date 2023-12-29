import { Collapse, Ripple, initTE } from "tw-elements";

initTE({ Collapse, Ripple });
export function LandingPage() {
  return (
    <div className="relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black">
        <h1 className="text-5xl font-bold">Cobra Pose</h1>
        <p className="text-lg mt-4">
          Find Your Serenity Nearby: Cobra Pose - Connecting You to Yoga Studios Wherever You Roam.
        </p>
      </div>

      <div
        className="relative overflow-hidden bg-cover bg-no-repeat bg-blue-500 opacity-25 "
        style={{
          backgroundPosition: "100%",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1593358578769-b7a7cf27cba7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          height: "900px",
        }}
      ></div>
    </div>
  );
}
