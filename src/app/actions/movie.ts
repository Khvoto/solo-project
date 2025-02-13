// import { prisma } from '@/utils/prisma'
// import { validateMovie } from './validate'
// import { revalidatePath } from 'next/cache'
import { tmdb } from '@/api/tmdb/tmdb'

/* export async function addMovie(previousState: unknown, formData: FormData) {
	console.log(formData)

	try {
		const result = validateMovie.safeParse(Object.fromEntries(formData))
		console.log(result)
		if (!result.success) return
	} catch (e) {
		console.log(e)
	}
} */

export async function addMovie(previousState: unknown, formData: FormData) {
	console.log('Formdata:', formData)

	try {
				const search = Object.fromEntries(formData)
		const title = search.title as string
		console.log('Title type:', typeof title)
		console.log('Title: ', title)
		await tmdb(title)

		await tmdb('Test')

		return {
			success: true,
			//message: list,
		}
	} catch (e) {
		console.log(e)
	}

	/* try {
		const result = validateMovie.safeParse(Object.fromEntries(formData))
		console.log(result)
		if (!result.success) return
		const book = await prisma.movie.create({
			data: {
				title: result.data.title,
				directors: result.data.author,
				releaseDate: result.data.published,
				stock: result.data.isbn,
			},
		})
		console.log(book)
		revalidatePath('/')
		return {
			id: book.id,
			success: true,
			message: 'book added successfully',
		}
	} catch (e) {
		console.log(e)
		return {
			id: null,
			success: false,
			message: 'An error has occurred while adding book.',
		}
	} */
}
