window.onload = function() {
  const loggedIn = localStorage.getItem("loggedIn");
  if (!loggedIn) {
    window.location.href = "index.html";
  }
};

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}