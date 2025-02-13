import { z } from 'zod'

export const validatePerson = z.object({
	id: z.string().optional(),
	name: z.string(),
	birthYear: z.number().optional(),
	nationality: z.string().optional(),
	updatedAt: z.date().optional(),
})

export const validateGenre = z.object({
	id: z.string().optional(),
	name: z.string(),
	updatedAt: z.date().optional(),
})

export const validateMovie = z.object({
	id: z.string().optional(),
	title: z.string(),
	price: z.number(),
	stock: z.number().optional(),
	releaseDate: z.date().optional(),
	runtime: z.number().optional(),
	imageUrl: z.string(),
	trailer: z.string().optional(),
	directors: z.array(validatePerson).optional(),
	actors: z.array(validatePerson).optional(),
	genres: z.array(validateGenre).optional(),
	description: z.string().optional(),
})

const statusEnum = z.enum([
	'ORDERED',
	'PACKAGED',
	'SHIPPED',
	'DELIVERED',
	'RETURNED',
])
type statusEnum = z.infer<typeof statusEnum>

export const validateOrder = {
	id: z.string(),
	totalAmount: z.number(),
	status: statusEnum,
	userId: z.string().optional(),
	updatedAt: z.date().optional(),
}

export const validateDelete = z.object({
	id: z.string(),
})
