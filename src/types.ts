type sumInput = string | number;

function sum(a: sumInput, b: sumInput): sumInput {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return String(a) + String(b);
  }
}
