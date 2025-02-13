import { Actor, Director, Genre, Movie } from "@prisma/client";

export default function ProductCard(data:{ movie : Movie, genre: Genre, directors: Director, actors: Actor} ) {
  return (
    <div className="border p-2">
      <p>{data.movie.title}</p>
      <p>Price: {data.movie.price}</p>
    </div>
  )
}