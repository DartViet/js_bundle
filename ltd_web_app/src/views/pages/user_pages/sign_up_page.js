import { LitElement, html } from "lit";
import { BulmaStyles } from "../../../assets/bulma";

export class SignUpPage extends LitElement {
    static get styles() {
        return [
            BulmaStyles.styles
        ]
    }

    render() {
        return html`
            <section class="section">
                <div class="container">
                    <div class="columns is-centered">
                        <div class="column is-half">
                            <div class="box">
                                <h1 class="title has-text-centered">Sign Up</h1>
                                <form>
                                    <div class="field">
                                        <label class="label">Username</label>
                                        <div class="control">
                                            <input class="input" type="text" placeholder="Enter username">
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="label">Email</label>
                                        <div class="control">
                                            <input class="input" type="email" placeholder="Enter email">
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="label">Password</label>
                                        <div class="control">
                                            <input class="input" type="password" placeholder="Enter password">
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="label">Confirm Password</label>
                                        <div class="control">
                                            <input class="input" type="password" placeholder="Confirm password">
                                        </div>
                                    </div>

                                    <div class="field">
                                        <div class="control">
                                            <button class="button is-primary is-fullwidth">Sign Up</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('sign-up-page', SignUpPage);