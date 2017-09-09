  function stringManipulation(word) {
    //write your code here
    var vokal = ["a","i","u","e","o"];
    var konsonan = ["b","c","d","f","g","h","i","j","k","l","m","n","p","q","r","s","t","u","v","w","x","y","z"];
    var tempat ='';

    vokal.forEach(function(checkvokal) {
      if (checkvokal === word.toLowerCase().charAt(0)) { //toLowerCase: merubah string menjadi kecil semua
        tempat = word;
      }
    })
    konsonan.forEach(function(checkvokal){
      if (checkvokal === word.toLowerCase().charAt(0)) {
        tempat = word.slice(1) + word.toLowerCase().charAt(0) + "nyo"; //toLowerCase: merubah string menjadi kecil semua + kata nyo
      }
    })
  return tempat;
  }

  function sentencesManipulation(sentence) {
    //write your code here
    var kalimatBaru = sentence.split(" "); //kata yang masuk maka di pisahkan
    var hasil = [];
    for (var z = 0; z < kalimatBaru.length; z++){
      hasil.push(stringManipulation(kalimatBaru[z]))
    }
return hasil.join(''); //mengembalikan hasil lalu di gabungkan (join)
  }

//untuk baca baris :
  const readline = require('readline');

  const rl = readline.createInterface({  //menyediakan antarmuka untuk membaca data
    input: process.stdin, //kalimat yang masuk
    output: process.stdout, //kalimat yang di munculkan
  });

  rl.setPrompt('tulis kalimatmu disini >') //set petanyaan
   rl.prompt();

   rl.on('line', (answer) => {
   if (answer.trim() === "Goodbye"|| "bye" || "Good bye") {
     rl.close();
     } else {
     console.log(`The sentence you put will be turned into: ` +sentencesManipulation(answer));
     console.log("tulis kalimatmu disini >");
 }

  }).on('close',() => {
      console.log('Good Bye!');
      process.exit(0);
  });
