//button status
const listButtonStatus = document.querySelectorAll("[btn-status]");

if (listButtonStatus.length > 0) {
  let url = new URL(window.location.href);
  listButtonStatus.forEach((button) => {
    button.addEventListener("click", () => {
      const status = button.getAttribute("btn-status");
      if (status) {
        url.searchParams.set("status", status);
      } else {
        url.searchParams.delete("status");
      }
      window.location.href = url.href;
    });
  });
  const statusCurrent = url.searchParams.get("status") || "";
  const buttonCurrent = document.querySelector(
    `[btn-status="${statusCurrent}"]`
  );
  buttonCurrent.classList.add("active");
}
//end button status
