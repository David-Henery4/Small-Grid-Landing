// Elements
const BurgerIconBtn: HTMLButtonElement | null = document.getElementById(
  "burger-icon",
) as HTMLButtonElement;
const SidebarElement = document.getElementById("sidebar");
const Overlay: HTMLDivElement | null = document.getElementById(
  "overlay",
) as HTMLDivElement;

let isSidebarOpen: boolean;

BurgerIconBtn.addEventListener("click", () => {
  isSidebarOpen = !isSidebarOpen;
  toggleElement(SidebarElement);
  toggleElement(Overlay);
});

Overlay.addEventListener("click", () => {
  isSidebarOpen = !isSidebarOpen;
  toggleElement(SidebarElement);
  toggleElement(Overlay);
});

const toggleElement = (element: HTMLDivElement | HTMLElement | null) => {
  if (element) {
    element.classList.toggle("hidden");
    isSidebarOpen
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "scroll");
  }
};
