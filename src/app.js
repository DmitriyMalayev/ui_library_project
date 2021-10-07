import Tooltip from "./ui_info/tooltip";
import Dropdown from "./ui_info/dropdown";
import Tabs from "./ui_info/tabs";
import SnackBar from "./ui_info/snackbar";

const tooltip = new Tooltip(document.querySelector(".tooltip")); // create tooltip
tooltip.init();

const dropdowns = document.querySelectorAll(".dropdown"); // select all dropdown classes

dropdowns.forEach((dropdown) => {
  const instance = new Dropdown(dropdown); //new instance for each dropdown.
  instance.init(); //setup the constructor and initialize a drop down for each dropdown
});

// create tabs
const tabs = new Tabs(document.querySelector(".tabs")); // passing in the container
tabs.init();

const snackbar = new SnackBar();
snackbar.init();

const buttons = document.querySelector("button");  //only button on the html page
button.addEventEventListener("click", () => {
  snackbar.show("You clicked me!");
});
