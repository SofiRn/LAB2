class cardBanner extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		//this.H2Text = '';
		//this.button = '';
	}

	static get observedAttributes() {
		return ['image', 'H1Text', 'button']; //lista de cosas que quiero que sean dinamicas en el componente "backgroundColor", "color", "fontSizes"
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
		const h1Text = this.getAttribute('H1Text') || 'por defecto';
		const buttonText = this.getAttribute('button') || 'por defecto';

		this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./src/components/cardBanner/cardBanner.css">
            <img class="img" src="${imageUrl}">
            <h1 class="tittle">${h1Text}</h1>
            <button class="button">${buttonText}</button>
    `;
	}
}

customElements.define('card-banner', cardBanner);
export default cardBanner;
