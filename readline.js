function stringManipulation(n) {
  var vocal = ('a, i, u, e, o');
  var add = ('nyo');
  var result = " ";

   if (!vocal.includes(n[0])) {
     result = n.slice(1, n.length)+n[0]+add;
     return result;
   }
   return n;
}
function sentenceManipulation(n) {
  var sentence = n.split(' ');
  var results = [];

  for (i = 0; i < sentence.length; i++) {
    results.push(stringManipulation(sentence[i]));
  }
  return results.join(' ');
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt('Tulis kalimatmu disini > ');

rl.prompt();

rl.on('line', (answer) => {
  if (answer.trim() === "Goodbye") {
    rl.close();
    } else {
    console.log(`The sentence you put will be turned into: ` +sentenceManipulation(answer));
    console.log("tulis kalimatmu disini >");
    }
}).on('close', () => {
  console.log('Good bye madafaka!');
  process.exit(0);
});
