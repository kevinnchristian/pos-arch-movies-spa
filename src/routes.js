import { createBrowserRouter } from "react-router-dom";
import { Home } from "./views/Home.js";
import { Movies } from "./views/Movies.js";
import { RootLayout } from "./views/RootLayout.js";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <Home />
			},
			{
				path: "/movies",
				element: <Movies />
			}
		]
	}
]);

export default routes;