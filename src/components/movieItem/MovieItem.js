import { Link } from 'react-router-dom';
import style from './MovieItem.module.css'

export function MovieItem({ movie }) {
	return (
		<div className={style.movie}>
			{
				movie.poster_path &&
				<img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
			}
			<h3>{movie.title}</h3>
			<p>
				<Link
					className={style.detailsBtn}
					to={`/movies/${movie.id}`}>
					Ver Detalhes
				</Link>
			</p>
		</div>
	);
}