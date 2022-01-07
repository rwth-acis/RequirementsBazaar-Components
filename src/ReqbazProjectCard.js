import { html, css, LitElement } from 'lit';

import { followersIcon, categoriesIcon, requirementsIcon } from './reqbaz-icons.js';

/**
 * Here is a description of my web component.
 *
 * @element reqbaz-project-card
 *
 */
export class ReqbazProjectCard extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        width: 300px;
        font-family: Roboto;
        border: 1px solid #e8e8e8;
        border-radius: 3px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
          0 3px 1px -2px rgba(0, 0, 0, 0.2);
        overflow: hidden;
      }

      #header {
        height: 30px;
      }

      #content {
        padding: 8px;
      }

      #name {
        font-size: 22px;
      }

      #description {
        position: relative;
        display: inline-block;
        max-height: 280px;
        margin: 5px 0;
        font-size: 16px;
        color: #757575;
        overflow-y: hidden;
        text-overflow: clip ellipsis;
      }

      #description:before {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        left: 0;
        bottom: 0px;
        background: linear-gradient(transparent 120px, white);
      }

      #actions {
        display: flex;
        flex-direction: row;
        border-top: 1px solid #e8e8e8;
        padding: 5px 16px;
        color: #757575;
      }

      #actions > div {
        flex: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .icon {
        width: 24px;
        height: 24px;
        fill: #757575;
        margin-right: 10px;
      }
    `;
  }

  static get properties() {
    return {
      projectId: { type: Number },
      name: { type: String },
      description: { type: String },
      numberOfFollowers: { type: Number },
      numberOfCategories: { type: Number },
      numberOfRequirements: { type: Number },
    };
  }

  constructor() {
    super();
    this.name = 'Requirements Bazaar';
    this.description =
      'This project is about Requirements Bazaar. We are happy for your feedback, suggestions and ideas. We invite you to help us to improve Requirements Bazaar.';
    this.numberOfFollowers = 0;
    this.numberOfCategories = 0;
    this.numberOfRequirements = 0;
  }

  render() {
    return html`
      <div id="container">
        <div id="header" style="background-color:${this._calculateHeaderColor(this.name)}"></div>
        <div id="content">
          <div id="name">${this.name}</div>
          <div id="description">${this.description}</div>
        </div>
        <div id="actions">
          <div id="followers">
            <div class="icon">${followersIcon}</div>
            ${this.numberOfFollowers}
          </div>
          <div id="categories">
            <div class="icon">${categoriesIcon}</div>
            ${this.numberOfCategories}
          </div>
          <div id="requirements">
            <div class="icon">${requirementsIcon}</div>
            ${this.numberOfRequirements}
          </div>
        </div>
      </div>
    `;
  }

  _calculateHeaderColor(title) {
    return this.hashStringToColor(title);
  }

  // thanks to https://stackoverflow.com/questions/11120840/hash-string-into-rgb-color/16533568#16533568

  /* eslint-disable no-bitwise */
  // eslint-disable-next-line class-methods-use-this
  djb2(str) {
    let hash = 5381;
    for (let i = 0; i < str.length; i += 1) {
      hash = (hash << 5) + hash + str.charCodeAt(i); /* hash * 33 + c */
    }
    return hash;
  }

  hashStringToColor(str) {
    const hash = this.djb2(str);
    const r = (hash & 0xff0000) >> 16;
    const g = (hash & 0x00ff00) >> 8;
    const b = hash & 0x0000ff;
    return `#${`0${r.toString(16)}`.substr(-2)}${`0${g.toString(16)}`.substr(-2)}${`0${b.toString(
      16,
    )}`.substr(-2)}`;
  }
}
