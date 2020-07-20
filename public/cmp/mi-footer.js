class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `Copyright &copy; 2020 Pichardo Vilchis Alfonso.`;
    }
}
customElements.define("mi-footer", MiFooter);