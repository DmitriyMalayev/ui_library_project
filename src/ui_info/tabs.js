import "./styles/tabs.css";

class Tabs {
  constructor(container) {
    //called on the tabs class
    this.container = container;
    this.tabs = container.querySelectorAll(".trigger");
  }
  init() {
    this.tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        if (e.target.tagName === "LI") {
          this.toggleTabs(e);
          this.toggleContent(e);
        }
      });
    });
  }
  toggleTabs(e) {
    this.tabs.forEach((tab) => tab.classList.remove("active")); // Remove current active classes
    e.target.classList.add("active"); // add new active class to the one clicked
  }
  toggleContent(e) {
    this.container.querySelectorAll(".content").forEach((item) => {
      item.classList.remove("active"); // remove current active classes
    });
    // add new active class
    const selector = e.target.getAttribute("data-target");
    const content = this.container.querySelector(selector);
    content.classList.add("active");
  }
}

export { Tabs as default };
