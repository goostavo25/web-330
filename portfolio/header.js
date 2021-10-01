class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="cbp-af-header">
	    <div class="cbp-af-inner">
		    <h1>Gustavo Roo Gonzalez</h1>
		    <nav>
			    <a href="index.html">Home</a>
			    <a href="about.html">About</a>
			    <a href="projects.html">Projects</a>
                <a href="devops.html">DevOps</a>
			    <a href="resume.html">Resume</a>
		    </nav>
	    </div>
    </div>
        `;
  }
}

customElements.define("header-component", Header);
