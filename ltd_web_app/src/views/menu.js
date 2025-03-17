import { LitElement, html } from 'lit-element';
import { BulmaStyles } from '../assets/bulma';

class Menu extends LitElement {
    static get properties() {
        return {
            _isActive: { type: String }
        };
    }

    static get styles() {
        return [
            BulmaStyles.styles
        ];
    }

    constructor() {
        super();
        this._isActive = "";
    }

    toggleMenu() {
        console.log("Toggling menu");
        if (this._isActive == "is-active") {
            this._isActive = "";
        } else {
            this._isActive = "is-active";
        }
    }

    render() {
        return html`
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="#">
                Home
            </a>
            <a role="button" class="navbar-burger ${this._isActive}" aria-label="menu" aria-expanded="false" data-target="navbarMenu" @click="${() => this.toggleMenu()}">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbarMenu" class="navbar-menu ${this._isActive}">
            <div class="navbar-start">
                <a class="navbar-item has-text-white" href="/login-page">Login</a>
                <a class="navbar-item" href="/patient-search">Search Patient</a>
                <a class="navbar-item" href="#">Add Patient</a>

            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <a class="navbar-item button is-light has-text-white" href="/user-information">Dao Ngo</a>
                </div>
            </div>
        </div>
    </nav>
    `;
    }
}

window.customElements.define('menu-page', Menu);