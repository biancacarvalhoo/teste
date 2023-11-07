import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Cadastrar from "./pages/Cadastrar"
import Acessar from "./pages/Acessar"
import Objetivo from "./pages/Objetivo"
import Treinamento from "./pages/Treinamento"
import CadastrarM2 from "./pages/CadastrarM2"

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastrar" element={<Cadastrar />} />
            <Route path="/cadastrar2" element={<CadastrarM2 />} />
            <Route path="/acessar" element={<Acessar />} />
            <Route path="/objetivo" element={<Objetivo />} />
            <Route path="/treinamento" element={<Treinamento />} />
        </Routes>
    );
}

export default Router