import "./style.css";
import('./another-async-module.js');
import('./another-async-2-module.js');
// import printMe from "./another-sync-module.js";
import { join } from "lodash";

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    btn.textContent = "Hello world";
    btn.textContent = join(["Lodash will be", "this will be moved to sync"], " ");
    // btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());