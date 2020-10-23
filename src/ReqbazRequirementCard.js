import { html, css, LitElement } from 'lit-element';

export class ReqbazRequirementCard extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--test-component-two-text-color, #000);
      }

      #container {
        border: 1px solid black;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <div id="container">
        <h2>${this.title} Nr. ${this.counter}!</h2>
        <button @click=${this.__increment}>increment</button>
      </div>
    `;
  }
}
