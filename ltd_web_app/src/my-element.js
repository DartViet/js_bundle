import { LitElement, css, html } from 'lit'
import { Router} from '@lit-labs/router';
import './pages/user_pages/login_page.js';
import './pages/user_pages/sign_up_page.js';
import './pages/user_pages/user_information.js';
import './pages/not_found.js';
import './pages/user_pages/forgot_password.js';

/**
 * An example element.
 */
export class MyElement extends LitElement {
  static get properties() {
    return {
    }
  }

  constructor() {
    super()
    this.router = new Router(this, [
      {
        name: 'Home',
        path: '/',
        render: () => html`<h1>Home</h1>`,

      },
      {
        name: 'User Information',
        path: '/user-information',
        render: () => html`<user-information></user-information>`
      },

      {
        name: 'Login',
        path: '/login',
        render: () => html`<login-page></login-page>`
      },
      {
        name: 'Forgot Password',
        path: '/forgot-password',
        render: () => html`<forgot-page></forgot-page>`
      },
      {
        name: 'Sign Up',
        path: '/signup',
        render: () => html`<sign-up-page></sign-up-page>`
      },
      {
        name: '404',
        path: '/*',
        render: () => html`<not-found-page></not-found-page>`
      }
    ])
  }

  

  render() {
    return this.router.outlet();;
  }

  static get styles() {
    return css``;
  }
}

window.customElements.define('my-element', MyElement)
