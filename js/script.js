/// Display a welcome message when the page loads
welcomeMessage();

function welcomeMessage() {
    /// Prompt the user for their name
    let name = prompt("Please enter your name:");

    if (name != null) {

        /// Set the welcome message
        document.getElementById('welcome-speech').innerHTML = 'Hello ' + name + ', welcome to Julian Company!';
    }
} // Tangkap elemen form dan tabel
const form = document.getElementById("messageForm");
const tableBody = document.querySelector("#infoTable tbody");

// Saat form disubmit
form.addEventListener("submit", function(e) {
    e.preventDefault(); // mencegah reload halaman

    // Ambil nilai dari input
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validasi sederhana
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields!");
        return;
    }

    // Buat baris baru di tabel
    const newRow = document.createElement("tr");
    newRow.classList.add("border-b", "hover:bg-green-100", "transition");

    // Isi kolom tabel
    newRow.innerHTML = `
    <td class="p-3 border border-green-200">${name}</td>
    <td class="p-3 border border-green-200">${email}</td>
    <td class="p-3 border border-green-200 text-left">${message}</td>
  `;

    // Tambahkan ke tabel
    tableBody.appendChild(newRow);

    // Reset form
    form.reset();

    // Pesan sukses
    alert("Data berhasil ditambahkan ke tabel!");
});