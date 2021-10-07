import "./styles/snackbar.css";

class SnackBar {
  constructor() {
    this.snackBar = document.createElement("div");
  }
  init() {
    this.snackBar.classList.add("snackbar");
    document.querySelector("body").appendChild(this.snackBar);
  }
  show(message) {
    this.snackBar.textContent = message;
    this.snackBar.classList.add("active");
    setTimeout(() => {
      this.snackBar.classList.remove("active");
    }, 4000);
  }
}

export { SnackBar as default };
