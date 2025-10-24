import axios from "axios";

export const moviesApi = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	headers: {
		"Content-Type": "application/json;charset=utf-8",
		Accept: "application/json",
		Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzgzYTY3NjJlNmYyNzNiMmQ4NDFkOTAzNjE4NTdjNCIsIm5iZiI6MTc2MTI2ODI0Ni44MjcwMDAxLCJzdWIiOiI2OGZhZDIxNmUwNmMzZWM5ZTc1ZGRhZDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.TLMOd9XNtb0I5VmK-EBoMjwy2xA9XPA1Ug0cU0ySxFA`,
	},
});