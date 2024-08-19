const body = document.body;

let jawabUser = prompt("masukan jawaban anda");
const jawaban = 78.5;

if (jawabUser == jawaban) {
  alert("jawaban benar🥳 silahkan ke level berikutnya");
  const benar = document.createElement("a");
  benar.href = "level4.html";
  benar.innerHTML = "pergi ke level selanjutnya";
  benar.style.textDecoration = "none";
  benar.style.fontSize = '2rem'
  benar.style.textTransform = 'capitalize'

  body.append(benar);
} else {
  alert(
    "jawaban masi salah😓. silahkan menghitung kembali dan jawab dengan benar"
  );
}
