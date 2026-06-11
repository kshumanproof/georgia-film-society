(function () {
  const publicPages = [
    "/",
    "/index.html",
    "/access.html",
    "/404.html"
  ];

  const currentPath = window.location.pathname;

  if (publicPages.includes(currentPath)) {
    return;
  }

  const accessKey = "gfsInstitutionalAccess";
  const activityKey = "gfsInstitutionalLastActivity";
  const twoHours = 2 * 60 * 60 * 1000;

  const now = Date.now();
  const hasAccess = sessionStorage.getItem(accessKey) === "granted";
  const lastActivity = Number(sessionStorage.getItem(activityKey) || 0);

  function denyAccess() {
    sessionStorage.removeItem(accessKey);
    sessionStorage.removeItem(activityKey);
    window.location.replace("/access.html");
  }

  if (!hasAccess) {
    denyAccess();
    return;
  }

  if (!lastActivity || now - lastActivity > twoHours) {
    denyAccess();
    return;
  }

  function refreshActivity() {
    sessionStorage.setItem(activityKey, String(Date.now()));
  }

  refreshActivity();

  ["click", "keydown", "mousemove", "scroll", "touchstart"].forEach((eventName) => {
    window.addEventListener(eventName, refreshActivity, { passive: true });
  });

  setInterval(() => {
    const latestActivity = Number(sessionStorage.getItem(activityKey) || 0);

    if (!latestActivity || Date.now() - latestActivity > twoHours) {
      denyAccess();
    }
  }, 60000);
})();