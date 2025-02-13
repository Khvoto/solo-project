import { getMovies } from "@/app/actions/moviesFromApi";
import ProductCard from "./productCard";

export type Movie = Awaited <ReturnType<typeof getMovies>>

export default async function ProductList () {
  const movies : Movie = await getMovies()

  return (
    <div className="container text-center items-center">
      <p>Prod list</p>
      <div className="flex flex-row gap-4 mt-10 place-content-center" >
        { movies.map((movie) => (
          <ProductCard key={movie.id} movie={movie} directors={movie.directors} actors={movie.actors} genres={movie.genres} />
        ))}
      </div>
    </div>
  )
}