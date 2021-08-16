import { useState } from "react";
import '../styles/Footer.css'

function Footer() {
    const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Votre saisie ne semble pas correspondre à une adresse mail standard")
		}
	}

	return (
		<footer>
			
			<div>Abonnez-vous à notre newsletter :</div>
			<input
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
			
            <div className="tfs-infos">
                <p className="tfs-footer-end">Site de démonstration</p>
                <p className="tfs-footer-end"><span className="ts-infos-bold">Framework :</span> React JS</p>
                <p className="tfs-footer-end"><span className="ts-infos-bold">Styles :</span> CSS vanilla</p> 
                <p className="tfs-footer-end"><span className="ts-infos-bold">Librairie d'icônes :</span> Font Awesome</p>
				<p className="tfs-footer-end"><a href="https://www.fabiencador.fr/">www.fabiencador.com</a></p>
			</div>
		</footer>
	)
}

export default Footer