class cardFeatured extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['image', 'H3Text', 'tag', 'price', 'pText', 'heart']; //lista de cosas que quiero que sean dinamicas en el componente "backgroundColor", "color", "fontSizes"
	}

	//este codigo se ejecuta cuando el componente se incrusta en el DOM
	connectedCallback() {
		this.render();
	}

	//este metodo se encarga de darle el nuevo valor a las propiedades que queremos observar
	attributeChangedCallBack(propName, oldValue, newValue) {
		this[propName] = newValue;
		this.render();
	}

	render() {
		const imageUrl = this.getAttribute('image') || 'por defecto';
		const h3Text = this.getAttribute('H3Text') || 'por defecto';
		const tagText = this.getAttribute('tag') || 'por defecto';
		const price = this.getAttribute('price') || 'por defecto';
		const pT = this.getAttribute('pText') || 'por defecto';
		const heart = this.getAttribute('heart') || 'por defecto';

		this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./src/components/cardFeatured/cardFeatured.css">
		<section class="card-featured">
		<img class="img" src="${imageUrl}">
            <h3>${h3Text}</h3>
            <p>${tagText}</p>
						<p>${pT}</p>
						<p>${price}</p>
						<img src="${heart}">
						</section>
    `;
	}
}

customElements.define('card-featured', cardFeatured);
export default cardFeatured;
