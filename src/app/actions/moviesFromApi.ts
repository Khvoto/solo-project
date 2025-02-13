'use server'

import { prisma } from '@/utils/prisma'
import { validateMovie } from './validate'

export async function getMovies() {
	return await prisma.movie.findMany({
		include: {
			genres: true,
			actors: true,
			directors: true,
		},
	})
}

export async function createMovie(previousState: unknown, formData: FormData) {
	console.log(formData)
	try {
		const checkedForm = await validateMovie.safeParse(
			Object.fromEntries(formData)
		)
		console.log(checkedForm.data)

		if (!checkedForm.success) return

		return await prisma.movie.create({
			data: {
				title: checkedForm.data.title,
				price: checkedForm.data.price,
				imageUrl: 'temp',
			},
		})
	} catch (err) {
		console.log(err)
	}
}
