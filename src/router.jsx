import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Cadastrar from "./pages/Cadastrar"
import Acessar from "./pages/Acessar"
import Objetivo from "./pages/Objetivo"
import Treinamento from "./pages/Treinamento"

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastrar" element={<Cadastrar />} />
            <Route path="/acessar" element={<Acessar />} />
            <Route path="/objetivo" element={<Objetivo />} />
            <Route path="/treinamento" element={<Treinamento />} />
        </Routes>
    );
}

export default Router