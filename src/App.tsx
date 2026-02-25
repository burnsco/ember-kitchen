import type React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import PrivateDining from "./pages/PrivateDining";
import Reservations from "./pages/Reservations";

const App: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/menu" element={<Menu />} />
			<Route path="/reservations" element={<Reservations />} />
			<Route path="/private-dining" element={<PrivateDining />} />
			<Route path="/about" element={<About />} />
		</Routes>
	);
};

export default App;
