import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/movies.services";

export function Movies() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		try {
			getPopularMovies().then(({ data }) => setMovies(data.results));

		} catch (error) {
			console.error("[Erro - useEffect] Ao buscar filmes populares:", error);
		}
	}, []);

	return (
		<section>
			<h1>Filmes Populares</h1>

			<ul>
				{movies.map((movie) => (
					<li key={movie.id}>{movie.title}</li>
				))}
			</ul>
		</section>
	);
}