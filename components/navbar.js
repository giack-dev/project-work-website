class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <img src="./assets/logo.png" alt="Logo" width="100" height="100" class="d-inline-block align-text-top">
        <a class="navbar-brand" href="#">Archivio Terremoti</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="./index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../autori.html">Authors</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../bibliografia.html">Bibliography</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">IT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      `;
  }
}

customElements.define("nav-bar", NavBar);

//Translate Section

const li = document.querySelectorAll("li");
const ulSelection = document.querySelector("ul");

li.forEach((el) => {
  el.addEventListener("click", () => {
    ulSelection
      .querySelector(".nav-link active")
      .classList.remove("nav-link active");
    el.classList.add("nav-link active");
  });
});

const data = {
  italian: {
    title: "Archivio Terremoti",
  },
  english: {
    title: "Earthquake Archive",
  },
};
