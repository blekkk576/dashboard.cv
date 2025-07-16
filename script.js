document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("loginMessage");

 document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("loginMessage");

  // Ambil data user dari localStorage
  const userDataString = localStorage.getItem("user");

  // Jika belum pernah register
  if (!userDataString) {
    message.style.color = "red";
    message.innerText = "Belum ada akun. Silakan daftar terlebih dahulu.";
    return;
  }

  const userData = JSON.parse(userDataString);

  // Cek login
  if (username === userData.username && password === userData.password) {
    message.style.color = "green";
    message.innerText = "Login berhasil!";
    document.getElementById("loginSection").style.display = "none";
    window.location.href = "dashboard.html";
  } else {
    message.style.color = "red";
    message.innerText = "Username atau password salah!";
  }
});
});

document.getElementById("dataForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const hobi = document.getElementById("hobi").value;

  const output = `
    <h3>Data Terkirim:</h3>
    <p><strong>Nama:</strong> ${nama}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Hobi:</strong> ${hobi}</p>
  `;

  document.getElementById("outputData").innerHTML = output;

  // Reset form input
  document.getElementById("dataForm").reset();
});
function logout() {
  window.location.href = "index.html";
}
  const imageInput = document.getElementById("uploadPhoto");
  const profileImg = document.getElementById("profileImage");