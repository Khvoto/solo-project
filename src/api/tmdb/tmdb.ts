'use server'

import { env } from 'process'

const token = env.TMDB_USE_KEY

//Rework the search query to work with the api
function formatString(input: string) {
	return input.replaceAll(' ', '%20')
}

export async function tmdb(input: string) {
	console.log('Input:', input)
	//Authentication etc.
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: token,
			/* 	'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTZkOWZkZjM0Yjg1YmFjZWRiM2Q1MDM0YTg5ZDNiYSIsIm5iZiI6MTczOTM3MTY2Ni4yOTIsInN1YiI6IjY3YWNiNDkyZjg1ZjE5OTEzYTliOTBkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AMpKtBQ6te2Lq1W0dxFJH6J10LDbbBpkjZgPfXz82ww' */
		},
	}

	//append the search qyery to the fetch all movies found that fits the search parameter
	const query =
		formatString(input) + '&include_adult=false&language=en-US&page=1'

	console.log('Pre-fetch:', query)

	fetch('https://api.themoviedb.org/3/search/movie?query=' + query + options)
		.then((res) => res.json())
		.then((res) => console.log(res))

		.catch((err) => console.error(err))
}
