import { render } from '../node_modules/lit-html/lit-html.js';


class litRender {
    constructor() {
        
    }

    createRenderHandler(domElement) {
        return function(templateResult) {
            render(templateResult, domElement);
        }
    }
}

export default litRender;