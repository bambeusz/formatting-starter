import path from "path";
import { example } from "@app/example";

if (example.foo) {
  console.log(example, `${example}/endpoint`);
}

console.log(
  example.foo,
  "1" + "1" + "1" + "1" + "1" + "1" + "1" + "1" + "1" + "1" + "1" + "1" + "1" + +" " + "" + "1" + "1" + "1"
);

console.log(path.resolve(__dirname, "example.ts"));

const foo = {
  a: "a",
  b: "b",
};

console.log(foo);
