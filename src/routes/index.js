import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Description from "../views/Description";
import Home from "../views/Home";
import Layout from "./Layout";

const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cocktails/:id" element={<Description />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Rutas;
