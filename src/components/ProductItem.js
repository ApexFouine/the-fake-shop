import '../styles/ProductItem.css'

function ProductItem({cover, name, price}) {
    return(
    <li className="tfs-item">
        <span className="tfs-price-item">{price} €</span>
        <img className="tfs-cover-item" src={cover} alt={`${name} cover`} />
		<span className="tfs-name-item">{name}</span>
    </li>
    )
}

export default ProductItem