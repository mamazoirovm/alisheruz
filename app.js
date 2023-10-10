// 1). Masala Alisher haqida
let alisher = prompt("Kerakli summani kiriting") * 1;

let dollarKurs = 750 * 11000.34;
let yevroKurs = 120 * 12354.03;
let results = dollarKurs + yevroKurs;

if (alisher >= results) {
  document.write("Alisher aka oq yol, yaxshi boring");
} else {
  document.write("Alisher aka ozgina sabr qiling, puliz yetmadi?");
}



/*
1-masasla 
*/ 
function sonniOshirish(son) {
    if (son > 0) {
      return son + 1;
    } else {
      return son;
    }
  }
  
  let a = prompt("Son kiriting")*1; 
  
  let natija1 = sonniOshirish(a);
  console.log(natija1);

  /* 2-masala */
function sonliFunc(son) {
  if (son > 0) {
    return son + 1;
  } else {
    return son - 2;
  }
}

let b = prompt("Son kiriting manfiy ham bo'lishi mumkin") * 1; 

let natija2 = sonliFunc(b);
console.log(natija2);

function onliFunc(on) {
  if (on > 0) {
    return on + 1;
  } else if (on < 0) {
    return on - 2;
  } else {
    return 10;
  }
}
let on = 0; // Değiştirilebilir

let natija3 = onliFunc(on);
console.log(natija3);
/* *
6.masala

let son1 = 5
let son2 = 7
  if (son1 > son2) {
    return son1;
  } else if (son2 > son1) {
    return son2;
  } else {
    return "Sonlar teng.";
  }
}
------------
15.masala
function engKattaIkkita(son1, son2, son3) {
  var maksimum = Math.max(son1, son2, son3);
  var ikkitasi = Math.max(Math.min(son1, son2), Math.min(son1, son3), Math.min(son2, son3));
  return ikkitasi;
}

var son1 = 10; // İstediğiniz sayıları buraya girin
var son2 = 5;
var son3 = 8;

var enKattaIkkita = engKattaIkkita(son1, son2, son3);
console.log(enKattaIkkita);


*/
