import { join } from "lodash";

export default function printMe2() {
    console.log(join(["Hello", "from", "another-module-2"], " "));
}