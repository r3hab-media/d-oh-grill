//header
class MyNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav>
      <h2 class="nav-title">
        D'oh! Grill
      </h2>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="order.html">Order</a></li>
        <li><a href="catering.html">We Cater</a></li>
        <li><a href="comments.html">Comments</a></li>
        <li><a href="js.html">JS</a></li>
      </ul>
    </nav>    
    `
  }
}
customElements.define('my-nav', MyNav);

//footer
class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
      D'oh! Grill | Established in 1989
    </footer>    
    `
  }
}
customElements.define('my-footer', MyFooter);