import { LitElement, html } from 'lit-element';
import { BulmaStyles } from '../../../assets/bulma';
import '../../menu.js'

class PatientSearch extends LitElement {
    static get properties() {
        return {
            _dropdownActive: { type: String }
        }
    }

    constructor() {
        super();
        this._dropdownActive = "";
    }

    render() {
        return html`
            <menu-page></menu-page>
            <section class="section">
        <div class="container">
            <h1 class="title">Patient Search</h1>
            <div class="field has-addons">
                <div class="control is-expanded">
                    <input class="input" type="text" placeholder="Search..." id="search-input" @focus="${() => this._dropdownActive = "is-active"}" @blur="${() => this._dropdownActive = ""}">
                    <div class="dropdown is-expanded ${this._dropdownActive}" id="search-dropdown">
                        <div class="dropdown-menu" role="menu">
                            <div class="dropdown-content" id="dropdown-items">
                                <a class="dropdown-item">John Doe</a>
                                <a class="dropdown-item">Jane Smith</a>
                                <a class="dropdown-item">Alice Johnson</a>
                                <a class="dropdown-item">Bob Brown</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="control">
                    <button class="button is-primary">
                        <p>Search</p>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container has-text-right">
            <a href="#" class="button is-primary is-rounded">Add Patient</a>
        </div>
    </section>

    
        `;
    }

    static get styles() {
        return [
            BulmaStyles.styles
        ]
    }
}

window.customElements.define('patient-search', PatientSearch);