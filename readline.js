function stringManipulation(word) {
  var prefik = "nyo";
  var tempWord = "";
  var vocal = "aiueo";

    if(!vocal.includes(word[0].toLowerCase())){
        tempWord = word.slice(1,word.length)+word[0]+prefik;
        return tempWord;
    }
    return word;
  
}

function sentencesManipulation(sentence) {
  //write your code here
  var sentencesArr = sentence.split(" ");
  var tempArr = [];
  
  for(var i=0;i<sentencesArr.length;i++){
    tempArr.push(stringManipulation(sentencesArr[i]))
  }
  return tempArr.join(" ");
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'tulis kalimatmu disini '
});

rl.prompt();

rl.on('line', (line) => {
  if(line.trim().toLowerCase() === 'Good bye!'.toLowerCase()){
    process.exit(0);
  }
  console.log(sentencesManipulation(line.trim()))
  rl.prompt();
}).on('close', () => {
  console.log('Good bye!');
  process.exit(0);
});