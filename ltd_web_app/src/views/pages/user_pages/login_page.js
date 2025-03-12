import { LitElement, html } from 'lit'
import { BulmaStyles } from '../../../assets/bulma';

/**
 * An example element.
 *
 */
export class LoginPage extends LitElement {
  static get properties() {
    return {
      /**
       * Copy for the read the docs hint.
       */
      docsHint: { type: String },

      /**
       * The number of times the button has been clicked.
       */
      count: { type: Number },
    }
  }

  constructor() {
    super()
    this.docsHint = 'Click on the Vite and Lit logos to learn more'
    this.count = 0
  }

  render() {
    return html`
    <section class="section">
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-half">
                    <div class="has-text-centered block">
                        <h1 class="title">
                            MDS Login
                        </h1>
                    </div>
                    <div class="box">
                        <form>
                            <div class="field">
                                <label class="label">Email</label>
                                <div class="control">
                                    <input class="input" type="email" placeholder="Enter your email">
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Password</label>
                                <div class="control">
                                    <input class="input" type="password" placeholder="Enter your password">
                                </div>
                            </div>

                            <div class="field has-text-right">
                                <a href="/forgot-password" class="is-size-7">Forgot password?</a>
                            </div>

                            <div class="field has-text-centered">
                                <div class="control">
                                    <button class="button is-primary is-fullwidth">Login</button>
                                </div>      
                            </div>

                            <div class="field has-text-centered has-text-danger is-size-7">
                               <p>Username or password not correct.</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `
  }

  static get styles() {
    return [
      BulmaStyles.styles,
    ];
  }
}

window.customElements.define('login-page', LoginPage)
