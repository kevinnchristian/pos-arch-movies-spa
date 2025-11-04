import { MovieItem } from "../components/movieItem/MovieItem.js";
import { useMovies } from "../hooks/useMovies.js";
import style from "./Movies.module.css";

export function Movies() {
	const movies = useMovies();

	return (
		<section>
			<h1>Filmes Populares</h1>

			<div className={style.moviesList}>
				{movies.map((movie) => (
					< MovieItem key={movie.id} movie={movie} />
				))}
			</div>
		</section>
	);
}