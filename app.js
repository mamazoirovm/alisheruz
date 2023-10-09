let alisher = prompt("Kerakli summani kiriting") * 1

let dollarKurs = 750 * 11000.34
let yevroKurs = 120 * 12354.03
let results = dollarKurs + yevroKurs

if (alisher == 9732738.6) {
    document.write("Alisher aka oq yol, yaxshi boring")
}else{
    document.write("Alisher aka ozgina sabr qiling, puliz yetmadi?")
}

function sonliFunc(son) {
    if (son > 0) {
      return son + 1;
    } else {
      return son - 2;
    }
  }
  
  var a = -6; // O'zgartirilishi mumkin
  
  var natija = sonliFunc(a);
  console.log(natija);