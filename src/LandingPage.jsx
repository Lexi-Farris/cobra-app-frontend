import { Collapse, Ripple, initTE } from "tw-elements";

initTE({ Collapse, Ripple });

export function LandingPage() {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-no-repeat bg-blue-500 opacity-25 "
      style={{
        backgroundPosition: "100%",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1593358578769-b7a7cf27cba7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        height: "900px",
      }}
    ></div>
  );
}
