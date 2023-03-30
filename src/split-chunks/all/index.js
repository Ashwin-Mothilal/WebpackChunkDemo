import "./style.css";
import printMe from "./another-sync-module.js";
import { join } from "lodash";

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    btn.textContent = join(['Hello', 'world'], ' ');
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());