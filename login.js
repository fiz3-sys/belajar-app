function handleLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "1234") {
    localStorage.setItem("loggedIn", true);
    window.location.href = "dashboard.html";
  } else {
    alert("Username atau password salah!");
  }
}