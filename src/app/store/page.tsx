
import { AddMovie } from "@/components/movies/addMovie";
import ProductList from "@/components/shop/products/productList";

export default function Page () {
  return (
    <div>
      <h1>Store</h1>
      <AddMovie />
      <ProductList />
    </div>
  )
}