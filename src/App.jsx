import "./App.css";
import { Apresentacao } from "./sections/Apresentacao";
import { Projetos } from "./sections/Projetos";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Sobre } from "./sections/Sobre";

function App() {
  return (
    <div>
      <Header />
      <Apresentacao />
      <Sobre />
      <Projetos />
      <Footer />
    </div>
  );
}

export default App;
