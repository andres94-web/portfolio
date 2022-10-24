import {BrowserRouter, Routes, Route} from "react-router-dom"
import Background from "./Background";
import Navbar from "../components/Navbar";
import Certificados from "./Certificados";
import Proyectos from "./Proyectos";
import Contacto from "./Contacto";
import NotFound from "./NotFound";

function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar/>

        <Routes>
          <Route path="/" element={<Background/>}/>
          <Route path="/certificados" element={<Certificados/>}/>
          <Route path="/proyectos" element={<Proyectos/>}/>
          <Route path="contacto" element={<Contacto/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
