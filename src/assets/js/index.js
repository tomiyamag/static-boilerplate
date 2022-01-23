import Example from "./utils/Example";

class Main {
  constructor() {
    const ex = new Example();
    ex.console("Static Boilerplate");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  new Main();
});
