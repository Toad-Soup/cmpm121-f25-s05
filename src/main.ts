let counter = 0;

function setup() {
  // Create the HTML for the counter
  document.body.innerHTML = `
    <h1>CMPM 121 Project</h1>
    <p>Counter: <span id="counter">0</span></p>
    <button id="increment">Click Me!</button>
    <button id="dec">Decrement</button>
    <button id="reset">Reset</button>
  `;

  const increment = document.getElementById("increment");
  const decrement = document.getElementById("decrement");
  const reset = document.getElementById("reset");
  const counterSpan = document.getElementById("counter");

  if (!increment || !decrement || !reset || !counterSpan) return;

  increment.addEventListener("click", () => {
    counter++;
    display();
  });

  decrement.addEventListener("click", () => {
    counter--;
    display();
  });

  reset.addEventListener("click", () => {
    counter = 0;
    display();
  });

  function display() {
    if (counterSpan) {
      counterSpan.innerHTML = `${counter}`;
    }

    document.title = "Clicked " + counter;
    document.body.style.backgroundColor = counter % 2 ? "pink" : "lightblue";
  }
}

setup();
