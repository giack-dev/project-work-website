class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Nome Notizia</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="./index.html"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./autori.html">Autori</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./bibliografia.html"
                >Bibliografia</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
      `;
  }
}

customElements.define("nav-bar", NavBar);