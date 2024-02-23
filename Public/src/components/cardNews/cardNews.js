class cardNews extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['image', 'date', 'H4Text', 'pText', 'more']; //lista de cosas que quiero que sean dinamicas en el componente "backgroundColor", "color", "fontSizes"
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
		const dateText = this.getAttribute('date') || 'por defecto';
		const h4Text = this.getAttribute('H4Text') || 'por defecto';
		const PText = this.getAttribute('pText') || 'por defecto';
		const moreText = this.getAttribute('more') || 'por defecto';

		this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./src/components/cardNews/cardNews.css">
            <img src="${imageUrl}">
            <p>${dateText}</p>
            <h4>${h4Text}</h4>
            <p>${PText}</p>
            <p>${moreText}</p>
    `;
	}
}

customElements.define('card-news', cardNews);
export default cardNews;
