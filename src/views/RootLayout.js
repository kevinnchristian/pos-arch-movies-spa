import { Outlet } from "react-router-dom";
import { Header } from "../components/Header.js";

export function RootLayout() {
	return (
		<>
			{/* Área comum entre as páginas */}
			<Header />

			{/* Área atualizável entre as páginas  */}
			<Outlet />
		</>
	);
}