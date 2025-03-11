import { LitElement, html } from 'lit-element';
import { BulmaStyles } from '../../assets/bulma';

export class ForgotPage extends LitElement{
    constructor(){
        super()
    }

    static get styles(){
        return [
            BulmaStyles.styles]
    }

    render(){
        return html`
            <section class="section">
                <div class="container">
                    <div class="columns is-centered">
                        <div class="column is-half">
                            <div class="box">
                                <h1 class="title has-text-centered">Forgot Password</h1>
                                <form>
                                    <div class="field">
                                        <label class="label">Email</label>
                                        <div class="control">
                                            <input class="input" type="email" placeholder="Enter email">
                                        </div>
                                    </div>

                                    <div class="field">
                                        <div class="control">
                                            <button class="button is-primary is-fullwidth">Send Email</button>
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

window.customElements.define('forgot-page', ForgotPage);