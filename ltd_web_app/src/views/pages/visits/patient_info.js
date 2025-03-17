import { LitElement, html } from 'lit-element';
import { BulmaStyles } from '../../../assets/bulma';
import '../../menu.js'

export class PatientInfo extends LitElement {
    static get styles() {
        return [
            BulmaStyles.styles
        ]
    }

    static get properties() {
        return {
            patientId: { type: String }
        }
    }

    constructor() {
        super();
        this.patientId = "1234";
        
    }

    render() {
        return html`
            <menu-page></menu-page>
            <section class="section">
                <div class="container">
                    <h1 class="title">Patient Information</h1>
                    <div class="columns">
                        <div class="column is-hRalf">
                            <div class="box">
                                <h1 class="title is-4">Patient Information</h1>
                                <div class="content">
                                    <p>Patient ID: ${this.patientId}</p>
                                    <p>Name: John Doe</p>
                                    <p>Age: 25</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `
    }
}

window.customElements.define('patient-info', PatientInfo);