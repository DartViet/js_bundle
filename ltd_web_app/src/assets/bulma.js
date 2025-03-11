import { css, LitElement } from "lit";

export class BulmaStyles extends LitElement{
    static get styles(){
        const { cssRules } = document.styleSheets[0]
        // @ts-ignore
        const globalStyle = css([Object.values(cssRules).map(rule => 
        rule.cssText).join('\n')])
        return [globalStyle];
    };
}