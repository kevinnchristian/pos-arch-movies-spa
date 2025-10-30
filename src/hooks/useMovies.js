import { useState, useEffect } from 'react';
import { getPopularMovies, getDetailsMovie } from '../services/movies.services';

// Função para listagem de filmes populares
export function useMovies() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		try {
			getPopularMovies().then(({ data }) => setMovies(data.results));
		} catch (error) {
			console.error("[Erro - useEffect] Ao buscar filmes populares:", error);
		}
	}, []);

	return movies;
}


// Função para detalhes de um filme específico
export function useMovie(movieId) {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		try {
			getDetailsMovie(movieId).then(({ data }) => setMovie(data));
		} catch (error) {
			console.error("[Erro - useEffect] Ao detalhar um filme: ", error);
		}
	}, [movieId]); // Adiciona 'movieId' como dependência, para atualizar quando o valor mudar

	return movie;
}