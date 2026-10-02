const { managerPhone } = window.VELIBERI_CONFIG;

const callLinks = document.querySelectorAll(".js-call");
const dialog = document.querySelector("#phone-dialog");

callLinks.forEach((link) => {
  if (managerPhone) {
    link.href = `tel:${managerPhone}`;
    return;
  }

  link.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.showModal();
  });
});

dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.querySelector(".dialog-ok").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

document.querySelector("#year").textContent = new Date().getFullYear();
