const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");
document.getElementById("display").focus();

buttons.forEach((itm) => {
  itm.addEventListener("click", "keypress", (e) => {
    switch (itm.value) {
      case "AC":
        display.value = "";
        break;
      case "DE" || "Backspace":
        display.value = display.value.slice(0, -1);
        break;
      case "=" || "Enter":
        try {
          display.value = eval(display.value);
        } catch {
          alert("Error Calculation!");
          display.value = "";
        }
        break;
      default:
        display.value += itm.value;
    }
  });
});
