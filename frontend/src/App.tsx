import Layout from "./components/layout/Layout";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import BilleteraPage from "./pages/billeteraPage/BilleteraPage";
import CotizacionesPage from "./pages/cotizacionesPage/CotizacionesPage";
import MovimientosPage from "./pages/movimientosPage/MovimientosPage";
import ExchangePage from "./pages/exchangePage/ExchangePage";

function App() {
  return (
    <Routes>
      <Route
        path=""
        element={
          <div>
            <Layout />
          </div>
        }
      >
        <Route path="/" element={<HomePage />} />
        <Route path="/billetera" element={<BilleteraPage />} />
        <Route path="/cotizaciones" element={<CotizacionesPage />} />
        <Route path="/movimientos" element={<MovimientosPage />} />
        <Route path="/exchange" element={<ExchangePage />} />

        <Route path="*" element={<h1>404</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
