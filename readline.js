  function stringManipulation(word) {

  var includer = 'nyo';
  var vocal =  'aiueo';
  var placeWord = " ";

  if(!vocal.includes(word[0].toLowerCase()))
  {
    placeWord = word.slice(1,word.length)+word[0]+includer;
    return placeWord;
  }
  return word;
  }

  function sentenceManipulation(sentence) {

  var  sentencePjg = sentence.split(" ");
  var placeSent = [];

  for(var x=0; x<sentencePjg.length; x++){
    placeSent.push(stringManipulation(sentencePjg[x]))
  }
  return placeSent.join(" ");
  }

  const readline = require('readline');
  const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
   question: 'masukin kalimat ngana!'
  });

  rl.question();

  rl.on('line',(line)=>{
  console.log(sentenceManipulation(line.trim()))
  rl.question();
}).on('close',() =>{
  console.log('Good Bye!');
  process.exit(0);
});
