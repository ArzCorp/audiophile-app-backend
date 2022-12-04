class Title extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: 'open' })
	}

	getTemplate() {
		const template = document.createElement('template')
		template.innerHTML = `
      <div>
        <p>Mi titulo</p>
      </div>
    `
		return template
	}

	render() {
		this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
	}

	connectedCallback() {
		this.render()
	}
}

customElements.define('mi-title', Title)
