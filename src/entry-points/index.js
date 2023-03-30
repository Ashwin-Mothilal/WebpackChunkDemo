import { join } from "lodash";

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    btn.textContent = join(['Hello', 'world'], ' ');
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());