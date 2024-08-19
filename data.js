const body = document.body;

let jawabUser = prompt(
  "masukan jawaban anda. jawab dengan bilangan bulat / puluhan ribu"
);

const jawaban = 53.0;

if (jawabUser == jawaban) {
  alert("Jawaban Benar");
} else {
  alert("Jawaban Salah");
}

if (jawabUser == jawaban) {
  const benar = document.createElement("p");
  benar.innerHTML =
    "Selamat Jawaban Anda Benar!!!🥳. Silahkan klik 'level berikutnya' Untuk Ke Level Berikutnya👇";
  benar.style.textAlign = "center";
  benar.style.marginTop = "20px";
  benar.style.marginBottom = "200px";
  benar.style.fontSize = "25px";
  benar.style.textTransform = "capitalize";
  benar.style.fontWeight = "bold";
  benar.style.fontFamily = "sans-serif";

  body.append(benar);
} else {
  const salah = document.createElement("p");
  salah.innerHTML =
    "maaf jawaban anda salah😓. mohon untuk merefresh halaman web untuk menjawab kembali";
  salah.style.textAlign = "center";
  salah.style.marginTop = "20px";
  salah.style.marginBottom = "200px";
  salah.style.fontSize = "25px";
  salah.style.textTransform = "capitalize";
  salah.style.fontWeight = "bold";
  salah.style.fontFamily = "sans-serif";

  body.append(salah);
}

if (jawabUser == jawaban) {
  const levelBerikutnya = document.createElement("a");
  levelBerikutnya.href = "level2.html";
  levelBerikutnya.innerHTML = "lanjut ke level berikutnya";
  levelBerikutnya.style.textDecoration = "none";
  levelBerikutnya.style.color = "blue";
  levelBerikutnya.style.fontFamily = "sans-serif";
  levelBerikutnya.style.fontSize = "25px";
  levelBerikutnya.style.marginLeft = "550px";
  levelBerikutnya.style.textTransform = "capitalize";

  body.append(levelBerikutnya);
} else {
  const beranda = document.createElement("a");
  beranda.href = "main.html";
  beranda.innerHTML = "kembali ke beranda";
  beranda.style.textDecoration = "none";
  beranda.style.color = "blue";
  beranda.style.fontFamily = "sans-serif";
  beranda.style.fontSize = "25px";
  beranda.style.marginLeft = "550px";
  beranda.style.textTransform = "capitalize";

  body.append(beranda);
}