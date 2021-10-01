class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <div id="footer">
                <p class="copyright">
                    Copyright &copy; 2021. Gustavo Roo Gonzalez.  <a target="_blank" href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/">Bellevue University Web Development</a>
                </p>
                <p class="social">   
                    <a target="_blank" class="youtube" title="Course's YouTube channel" href="https://www.youtube.com/user/bellevueuniversity"><i class="fa fa-fw fa-2x fa-inverse fa-youtube"></i></a>
                    <a target="_blank" class="github" title="My GitHub repositories" href="https://www.github.com/goostavo25"><i class="fa fa-fw fa-2x fa-inverse fa-github"></i></a>
                    <a target="_blank" class="github" title="Courses GitHub repositories" href="https://github.com/buwebdev/web-330"><i class="fa fa-fw fa-2x fa-inverse fa-github"></i></a>
                    <a target="_blank" class="instagram" title="Bellevue University's Instagram" href="https://www.instagram.com/bellevueuniversity/"><i class="fa fa-fw fa-2x fa-inverse fa-instagram"></i></a>
                    <a target="_blank" class="twitter" title="Bellevue University's Twitter" href="https://www.twitter.com/BellevueU/"><i class="fa fa-fw fa-2x fa-inverse fa-twitter"></i></a>
                    <a target="_blank" class="facebook" title="Bellevue University's Facebook" href="https://www.facebook.com/BellevueUniversity/"><i class="fa fa-fw fa-2x fa-inverse fa-facebook"></i></a>
                </p>
            </div>
          
        `;
  }
}

customElements.define("footer-component", Footer);
