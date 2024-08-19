const body = document.body;

function jawabanBenarA() {
  alert("jawaban benar");
  const benar = document.createElement("p");
  benar.innerHTML = "Jawaban Anda Benar Silahkan Ke Level Berikutnya";
  benar.style.textAlign = "center";
  benar.style.margin = "30px";
  benar.style.fontSize = "2rem";
  benar.style.fontFamily = "sans-serif";

  const br = document.createElement('br')
  br.br

  const levelBerikutnya = document.createElement("a");
  levelBerikutnya.href = "level3.html";
  levelBerikutnya.innerHTML = "Lanjut Ke Level Berikutnya";
  levelBerikutnya.style.textDecoration = "none";
  levelBerikutnya.style.color = "blue";
  levelBerikutnya.style.fontFamily = "sans-serif";
  levelBerikutnya.style.fontSize = "25px";
  levelBerikutnya.style.marginLeft = "550px";
  levelBerikutnya.style.marginTop = "50px";
  levelBerikutnya.style.textTransform = "capitalize";

  body.append(levelBerikutnya);
  body.append(benar);
}

function jawabanSalahB() {
  alert("jawaban anda salah");
  const salah = document.createElement("p");
  salah.innerHTML =
    "maaf jawaban anda salah silahkan refresh halaman web untuk menjawab kembali";
  salah.style.textAlign = "center";
  salah.style.margin = "30px";
  salah.style.fontSize = "2rem";
  salah.style.fontFamily = "sans-serif";
  salah.style.textTransform = "capitalize";

  body.append(salah);
}
function jawabanSalahC() {
  alert("jawaban anda salah");
  const salah = document.createElement("p");
  salah.innerHTML =
    "maaf jawaban anda salah silahkan refresh halaman web untuk menjawab kembali";
  salah.style.textAlign = "center";
  salah.style.margin = "30px";
  salah.style.fontSize = "2rem";
  salah.style.fontFamily = "sans-serif";
  salah.style.textTransform = "capitalize";

  body.append(salah);
}
function jawabanSalahD() {
  alert("jawaban anda salah");
  const salah = document.createElement("p");
  salah.innerHTML =
    "maaf jawaban anda salah silahkan refresh halaman web untuk menjawab kembali";
  salah.style.textAlign = "center";
  salah.style.margin = "30px";
  salah.style.fontSize = "2rem";
  salah.style.fontFamily = "sans-serif";
  salah.style.textTransform = "capitalize";

  body.append(salah);
}
