(function () {
  const allowedPages = [
    "/access.html",
    "/index.html",
    "/404.html"
  ];

  const currentPath = window.location.pathname;

  if (allowedPages.includes(currentPath) || currentPath === "/") {
    return;
  }

  const hasAccess = sessionStorage.getItem("gfsInstitutionalAccess") === "granted";

  if (!hasAccess) {
    window.location.replace("/access.html");
  }
})();