import { Header } from "./Header";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
