// var randomBroj = Math.floor(Math.random() * (+25 - +10) + +10);
// document.getElementById("naslov").innerHTML = "Broj kamenčića : " + randomBroj;
// var potezIgraca = Math.floor(Math.random() * 2) + 1;
// igraTrenutno(potezIgraca);
//
// function odigraj() {
//     var broj = document.getElementById("input").value;
//
//     if (broj < 1 || broj > randomBroj / 2) {
//         alert("Input not valid!");
//     } else {
//         randomBroj = randomBroj - broj;
//         var lista = document.createElement("li");
//
//         if (potezIgraca == 1) {
//             potezIgraca++;
//             igraTrenutno(potezIgraca);
//             lista.innerHTML = "Igrač B je birao broj : " + broj;
//
//             if (randomBroj == 1) {
//                 kraj("B");
//             }
//         } else if (potezIgraca == 2) {
//             potezIgraca--;
//             igraTrenutno(potezIgraca);
//             lista.innerHTML = "Igrač A je birao broj : " + broj;
//
//             if (randomBroj == 1) {
//                 kraj("A");
//             }
//         }
//         document.getElementById("ul").appendChild(lista);
//         document.getElementById("naslov").innerHTML = "Broj kamenčića : " + randomBroj;
//         document.getElementById("igra").style.visibility = "visible";
//     }
// }
//
// function igraTrenutno(pi){
//     if (pi == 1) {document.getElementById("igrac").innerHTML = "Na potezu je igrač B"; }
//     else {document.getElementById("igrac").innerHTML = "Na potezu je igrač A";}
// }
//
// function kraj(p) {
//     document.body.style.backgroundColor = "#c2d6d6";
//     document.getElementById("igrac").innerHTML = "Čestitamo!";
//     document.getElementById("submit").setAttribute('disabled','disabled');
//     document.getElementById("igrajPonovo").style.visibility = "visible";
//     alert("Kraj igre, pobjedio je igrač " + p);
// }