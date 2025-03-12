import { html, LitElement } from "lit";
import { BulmaStyles } from "../../../assets/bulma";

class UserInformation extends LitElement{
    static get styles(){
        return [
            BulmaStyles.styles
        ]
    };

    constructor(){
        super()
    }

    render(){
        return html`
    <section class="section">
        <div class="container">
            <h1 class="title">User Information Form</h1>
            <form>
                <div class="field is-horizontal">
                    <div class="field-body">
                        <div class="field">
                            <label class="label">First Name</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Enter first name">
                            </div>
                        </div>
                        
                        <div class="field">
                            <label class="label">Last Name</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Enter last name">
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Date of Birth</label>
                            <div class="control">
                                <input class="input" type="date">
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="field">
                    <label class="label">Gender</label>
                    <div class="control">
                        <div class="select">
                            <select>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <div class="field">
                    <label class="label">Address</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Enter address">
                    </div>
                </div>
                
                <div class="field">
                    <label class="label">Street</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Enter street">
                    </div>
                </div>
                
                <div class="field is-horizontal">
                    <div class="field-body">
                        <div class="field">
                            <label class="label">City</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Enter city">
                            </div>
                        </div>
                        
                        <div class="field">
                            <label class="label">County</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Enter county">
                            </div>
                        </div>
                        
                        <div class="field">
                            <label class="label">State</label>
                            <div class="control">
                                <div class="select">
                                    <select>
                                        <option value="">Select a state</option>
                                        <option value="AL">Alabama</option>
                                        <option value="AK">Alaska</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="CA">California</option>
                                        <option value="CO">Colorado</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="HI">Hawaii</option>
                                        <option value="ID">Idaho</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IN">Indiana</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MI">Michigan</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NV">Nevada</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="OH">Ohio</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="OR">Oregon</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="TX">Texas</option>
                                        <option value="UT">Utah</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WA">Washington</option>
                                        <option value="WV">West Virginia</option>
                                        <option value="WI">Wisconsin</option>
                                        <option value="WY">Wyoming</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        
                        <div class="field">
                            <label class="label">Zip Code</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Enter zip code">
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="field has-text-right">
                    <div class="control">
                        <button class="button is-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
        `;
    }
}

window.customElements.define('user-information', UserInformation)