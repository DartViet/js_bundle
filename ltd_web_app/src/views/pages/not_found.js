import { html, LitElement } from "lit";
import { BulmaStyles } from "../../assets/bulma";

export class NotFoundPage extends LitElement{
    constructor(){
        super()
    }

    render(){
        return html`
            <section class="section">
                <div class="container has-text-centered">
                    <h1 class="title is-1 has-text-danger">404</h1>
                    <h2 class="subtitle is-3">Page Not Found</h2>
                    <p class="mb-5">Sorry, the page you are looking for does not exist.</p>
                    <a href="/" class="button is-primary">Go Home</a>
                </div>
            </section>
        `;
    }

    static get styles(){
        return [
            BulmaStyles.styles
        ]
    }
}

window.customElements.define('not-found-page', NotFoundPage);
