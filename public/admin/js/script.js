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
  if (buttonCurrent) {
    buttonCurrent.classList.add("active");
  }
}
//end button status

//Form search
const formSearch = document.querySelector("[form-search]");
if (formSearch) {
  formSearch.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Runned");
    const keyword = event.target.elements.keyword.value;
    let url = new URL(window.location.href);
    if (keyword) {
      url.searchParams.set("keyword", keyword);
    } else {
      url.searchParams.delete("keyword");
    }
    window.location.href = url;
  });
}
//end form search
// Pagination
const listButtonPagination = document.querySelectorAll("[button-pagination]");
if (listButtonPagination.length > 0) {
  let url = new URL(window.location.href);

  listButtonPagination.forEach((button) => {
    button.addEventListener("click", () => {
      const page = button.getAttribute("button-pagination");

      url.searchParams.set("page", page);

      window.location.href = url.href;
    });
  });
}
// End Pagination
