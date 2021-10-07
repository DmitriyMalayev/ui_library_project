import Tooltip from "./ui_info/tooltip";
import Dropdown from "./ui_info/dropdown";
import Tabs from "./ui_info/tabs";

const tooltip = new Tooltip(document.querySelector(".tooltip")); // create tooltip
tooltip.init();

const dropdowns = document.querySelectorAll(".dropdown"); // create dropdowns

dropdowns.forEach((dropdown) => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

// create tabs
const tabs = new Tabs(document.querySelector(".tabs"));
tabs.init();
