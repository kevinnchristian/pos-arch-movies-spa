import { moviesApi } from "../config/http.js";

const getPopularMovies = async () => {
	try {
		const response = await moviesApi.get("/movie/popular", {
			params: {
				language: 'pt-BR'
			}
		});

		return response;

	} catch (error) {
		console.error("Erro ao buscar filmes populares:", error);
		throw error;
	}
};

const getDetailsMovie = async (movieId) => {
	try {
		const response = await moviesApi.get(`/movie/${movieId}`);
		return response;

	} catch (error) {
		console.error("Erro ao buscar detalhes do filme:", error);
		throw error;
	}
};

export { getPopularMovies, getDetailsMovie };