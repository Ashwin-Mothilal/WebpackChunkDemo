// I'm not called from anywhere, but I'm still downloaded and bundled

import { join } from "lodash";

export default function printMe() {
    console.log('I get called from print.js!', join(["Hello", "from", "another-module"], ""));
}