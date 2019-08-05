import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";

/**
 * @customElement
 * @polymer
 */
class CardApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

        form {
          width: 220px;
          margin: auto auto;
        }

        .button {
          margin: 0px 60px;
        }

        fieldset {
          margin: 10px 0;
        }

        input {
          margin: 10px 0;
          border-bottom: solid grey 3px;
        }
      </style>
      <form>
        <fieldset name="personalInfo">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="[[email]]" />
        </fieldset>

        <fieldset name="cardInfo">
          <label for="cardNum" required>Card Number</label>
          <input type="tel" id="cardNum" placeholder="[[cardNum]]" />

          <label for="cardExp" required>Expires</label>
          <input type="tel" id="cardExp" placeholder="[[dateFormat]]" />

          <label for="cardCVC" required>CVC</label>
          <input type="tel" id="cardCVC" placeholder="[[cvc]]" />
        </fieldset>

        <input class="button" type="submit" value="Donate {{amount}}" />
      </form>
    `;
  }
  static get properties() {
    return {
      amount: {
        type: String
      },
      email: {
        type: String
      },
      cvc: {
        type: Number
      },
      cardNum: {
        type: String
      },
      dateFormat: {
        type: String
      }
    };
  }
}

window.customElements.define("card-app", CardApp);
