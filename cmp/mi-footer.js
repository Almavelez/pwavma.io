class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      
    `
    &copy; 2021 Alma velez 
    <br>
     Fuente de Información:
     <a href="https://gilpgdm.github.io/index.html">
      https://gilpgdm.github.io/index.html</a>. de Gilberto Pacheco Gallegos.`; 
       
     
  }
}
customElements.define(
  "mi-footer", MiFooter);
