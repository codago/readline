
function stringManipulation(word) {
  //write your code here
  var vokal = ["a","i","u","e","o"] ;
  var konsonan = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"] ;
  var string =''
  vokal.forEach(function(replace) {
    if (replace === word.toLowerCase().charAt(0)){
      string = word;
    }
  })
  konsonan.forEach(function(replace){
    if (replace === word.toLowerCase().charAt(0)) {
      string = word.slice(1) + word.toLowerCase().charAt(0) + "nyo";
    }
  })
  return string;
}

function sentencesManipulation(sentence) {
var kalimat = sentence.split(" ");
var kandang = [];
for (var w = 0; w < kalimat.length; w++){
  kandang.push(stringManipulation(kalimat[w]))
}
return kandang.join(' ');
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt('tulis kalimatmu disini >')
 rl.prompt();

 rl.on('line',(line) => {
   console.log('hasil konversi : '+sentencesManipulation(line.trim()))

  rl.prompt();

}).on('close',() => {
    console.log('Good Bye!');
    process.exit(0);
  });
