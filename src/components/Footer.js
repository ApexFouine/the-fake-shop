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
			
			<div>Restons en contact :</div>
			<input
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
            <div className="tfs-infos">
                <p className="tfs-footer-end">Site de démonstration</p>
                <p className="tfs-footer-end">Framework : React JS</p> 
                <p className="tfs-footer-end">Styles : CSS vanilla</p> 
                <p className="tfs-footer-end">Icones : fontawesome</p>
			</div>
		</footer>
	)
}

export default Footer