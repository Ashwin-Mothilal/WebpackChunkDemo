import { join } from "lodash";

export default function printMe() {
    console.log(join(["Hello", "from", "another-module"], " "));
}