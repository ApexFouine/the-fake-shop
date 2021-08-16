
import { useState } from "react"
import { productList } from "../data/productList";
import ProductItem from "./ProductItem";
import Categories from './Categories'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart }) {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = productList.reduce(
		(acc, product) =>
			acc.includes(product.category) ? acc : acc.concat(product.category),
		[]
	)
	function addToCart(name, price) {
		const currentProductSaved = cart.find((product) => product.name === name)
		if (currentProductSaved) {
			const cartFilteredCurrentProduct = cart.filter(
				(product) => product.name !== name
			)
			updateCart([
				...cartFilteredCurrentProduct,
				{ name, price, amount: currentProductSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}
	return (
		<div className="tfs-list">
			{/* <ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul> */}
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>
			<ul className="tfs-product-list">
				{productList.map(({ id, cover, name, price, category }) =>
					!activeCategory || activeCategory === category ? (

						<div key={id}>
							<ProductItem
								cover={cover}
								name={name}
								price={price}
							/>
							<i className="fas fa-cart-plus" onClick={() => addToCart(name, price)}> Ajouter au panier</i>
						</div>
					) : null
				)}

			</ul>
		</div>
	)
}

export default ShoppingList