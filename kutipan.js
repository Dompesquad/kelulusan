const nama = localStorage.getItem('nama');
document.getElementById('nama-siswa').innerText = `Hai, ${nama}!`;

const kutipanGuru = [
  {
    teks: "Teruslah belajar dan menjadi pribadi yang lebih baik.",
    foto: "foto1.jpg"
  },
  {
    teks: "Kelulusan ini bukan akhir, tapi awal dari perjalanan panjangmu.",
    foto: "foto2.jpg"
  },
  {
    teks: "Banggalah pernah menjadi bagian dari MTs Muhammadiyah Malino.",
    foto: "foto3.jpg"
  },
  {
    teks: "Jaga nama baik almamater, dan teruslah berdoa.",
    foto: "foto4.jpg"
  },
  {
    teks: "Doa kami selalu menyertai kalian, anak-anak hebat!",
    foto: "foto5.jpg"
  }
];

let index = 0;

function tampilkanKutipan() {
  const kutipan = kutipanGuru[index];
  document.getElementById('isi-kutipan').innerText = `"${kutipan.teks}"`;
  document.getElementById('foto-guru').src = kutipan.foto;
}

function lanjut() {
  index++;
  if (index < kutipanGuru.length) {
    tampilkanKutipan();
  } else {
    window.location.href = 'pesan-akhir.html';
  }
}

window.onload = tampilkanKutipan;
