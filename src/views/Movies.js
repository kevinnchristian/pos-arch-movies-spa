import { useMovies } from "../hooks/useMovies.js";

export function Movies() {
	const movies = useMovies();

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