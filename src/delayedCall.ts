// function for a function who call a function after 1000ms

function delayedCall(anotherFn: () => void) {
  setTimeout(anotherFn, 1000);
}

function log(): void {
  console.log("hello");
}

delayedCall(log);
