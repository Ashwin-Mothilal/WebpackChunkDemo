import { join } from "lodash";

export default function printMe() {
    import(/* webpackChunkName: "async module" */ './another-async-module.js');
    console.log(join(["Hello", "from", "another-module"], " "));
}