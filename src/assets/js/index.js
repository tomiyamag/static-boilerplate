import Example from "./utils/Example";

class Main {
  constructor() {
    const ex = new Example();
    ex.consooole("Static Boilerplate");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  new Main();
});
