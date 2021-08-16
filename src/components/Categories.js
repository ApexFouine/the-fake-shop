import '../styles/Categories.css'

function Categories({ setActiveCategory, categories, activeCategory }) {
	return (
		<div className='tfs-categories'>
            <label>Choisissez une catégorie</label>
			<select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className='tfs-categories-select'
			>
				<option value=''>---</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<button onClick={() => setActiveCategory('')} className="tfs-underline">Réinitialiser</button>
		</div>
	)
}

export default Categories