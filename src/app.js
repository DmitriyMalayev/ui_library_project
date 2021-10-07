import Tooltip from "./ui_info/tooltip";
import Dropdown from "./ui_info/dropdown";
import Tabs from "./ui_info/tabs";

const tooltip = new Tooltip(document.querySelector(".tooltip")); // create tooltip
tooltip.init();

const dropdowns = document.querySelectorAll(".dropdown"); // select all dropdown classes 

dropdowns.forEach((dropdown) => {  
  const instance = new Dropdown(dropdown); //new instance for each dropdown.
  instance.init();  //setup the constructor and initialize a drop down for each dropdown
});

// create tabs
const tabs = new Tabs(document.querySelector(".tabs"));
tabs.init();
