import "./App.css";
import { AllRoute } from "./routes/AllRoute";
import { Header, Footer } from "./components";

function App() {
  return (
    <>
      <Header />
      <main>
        <AllRoute />
      </main>

      <Footer />
    </>
  );
}

export default App;
