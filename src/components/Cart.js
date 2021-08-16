import '../styles/Cart.css'

function Cart({cart, updateCart}) {
    const total = cart.reduce(
		(acc, productType) => acc + productType.amount * productType.price,
		0
	)
    return(
        cart.length > 0 ? (
            <div className="full-cart">
                <h2 className="font-color">Panier</h2>
                <ul className="font-color">
                    {cart.map(({ name, price, amount }, index) => (
                        <div key={`${name}-${index}`}>
                            {name} {price}€ x {amount}
                        </div>
                    ))}
                </ul>
                <h3 className="font-color">Total :{total}€</h3>
                <button onClick={() => updateCart([])}>Vider le panier</button>
            </div>
        ) : null

    )
}

export default Cart