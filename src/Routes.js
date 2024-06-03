import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './Pages/Inicio';
import Portifolio from './Pages/Portifolio'

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/inicio' pagina={<Inicio/>}></Route>
                <Route path='/portifolio' pagina={<Portifolio/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes