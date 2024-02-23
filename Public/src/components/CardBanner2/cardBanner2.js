class cardBanner2 extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		//this.H2Text = '';
		//this.button = '';
	}

	static get observedAttributes() {
		return ['tittle', 'image', 'H3Text', 'button']; //lista de cosas que quiero que sean dinamicas en el componente "backgroundColor", "color", "fontSizes"
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
		const tittles = this.getAttribute('tittle') || 'por defecto';
		const imageUrl = this.getAttribute('image') || 'por defecto';
		const h3Text = this.getAttribute('H3Text') || 'por defecto';
		const buttonText = this.getAttribute('button') || 'por defecto';

		this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./src/components/cardBanner2/cardBanner2.css">
            <h2>${tittles}</h2>
            <img class="img" src="${imageUrl}">
            <h3>${h3Text}</h3>
            <button class="button">${buttonText}</button>
    `;
	}
}

customElements.define('card-banner2', cardBanner2);
export default cardBanner2;
