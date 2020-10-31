import { html, css, LitElement } from 'lit-element';
import '@appnest/masonry-layout';
import '../reqbaz-project-card.js';

/**
 * Here is a description of my web component.
 *
 * @element reqbaz-projects-grid
 *
 */
export class ReqbazProjectsGrid extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        width: 100%;
        justify-content: center;
      }

      #container {
        width: 100%;
        max-width: 1279px;
        justify-content: center;
        margin: 0 24px;
      }

      a {
        width: 300px;
        color: inherit;
        background-color: inherit;
        text-decoration: inherit;
      }

      reqbaz-project-card {
        flex-direction: column;
        box-sizing: border-box;
        background-color: white;
        font-family: 'Roboto';
      }

      reqbaz-project-card:hover {
        border: 1px solid #97a0a4;
      }
    `;
  }

  static get properties() {
    return {
      loading: { type: Boolean },
      projects: { type: Array },
      /**
       * Base URL of the Requirements Bazaar instance to work with.
       */
      baseUrl: { type: String },
      perPage: { type: Number },
      _intersectionObserver: { type: Object },
      _page: { type: Number },
      _isSentinelVisible: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.baseUrl = 'https://requirements-bazaar.org/bazaar/';
    this.projects = [];
    this.perPage = 10;
    this._isSentinelVisible = true;
  }

  render() {
    return html`
      <div id="container">
        <masonry-layout>
          ${this.projects.map(
            project => html`
              <a href="https://requirements-bazaar.org/projects/${project.id}" target="_blank">
                <reqbaz-project-card
                  name=${project.name}
                  description=${project.description}
                  numberOfFollowers=${project.numberOfFollowers}
                  numberOfCategories=${project.numberOfCategories}
                  numberOfRequirements=${project.numberOfRequirements}
                >
                </reqbaz-project-card>
              </a>
            `,
          )}
        </masonry-layout>
        <div id="sentinel"></div>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();

    // initialize page so fetching can start
    this._page = 0;
  }

  async fetchProjects() {
    this.loading = true;

    const url = `${this.baseUrl}projects?page=${this._page}&per_page=${this.perPage}&sort=-date&state=open&search=`;
    const response = await fetch(url);
    const jsonResponse = await response.json();
    if (!this.projects) {
      this.projects = [];
    }
    Array.prototype.push.apply(this.projects, jsonResponse);
    this.loading = false;
    if (jsonResponse.length > 0 && this._isSentinelVisible) {
      this._page += 1;
    }
  }

  firstUpdated() {
    const sentinel = this.shadowRoot.getElementById('sentinel');
    this._intersectionObserver = new IntersectionObserver(this._handleIntersection.bind(this), {
      rootMargin: '0px 0px 400px 0px',
    });
    this._intersectionObserver.observe(sentinel);
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === '_page') {
        this.fetchProjects();
      }
    });
  }

  _handleIntersection(intersections) {
    const intersection = intersections[0];
    this._isSentinelVisible = intersection.isIntersecting;
    if (intersection.isIntersecting) {
      this._page += 1;
    }
  }
}
