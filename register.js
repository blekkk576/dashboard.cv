document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("newUsername").value;
  const password = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const message = document.getElementById("registerMessage");

  if (password !== confirmPassword) {
    message.style.color = "red";
    message.innerText = "Password tidak sama!";
    return;
  }

  // Simpan akun ke localStorage
  const userData = {
    username: username,
    password: password
  };

  localStorage.setItem("user", JSON.stringify(userData));

  message.style.color = "green";
  message.innerText = "Akun berhasil dibuat! Mengalihkan ke halaman login...";

  setTimeout(() => {
    window.location.href = "index.html";
  }, 2000);
});

