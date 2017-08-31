function stringManipulation(word) {

  var vokal=['a','i','u','e','o']
  var konsonan=['b','c','d','f','g','h','j','k','l',
  'm','n','p','q','r','s','t','v','w','x','y','z']

  var string =''

  vokal.forEach(function(replace){
    if (replace === word.charAt(0)){
      string = word;
    }
  });

  konsonan.forEach(function(replace){
    if (replace === word.charAt(0)) {
      string = word.slice(1) + word.charAt(0) + 'nyo';
    }
  })

  return string;
}

function sentencesmanipulation(sentences){
  var array = sentences.split(' ')
  var hasil= []
  for (var i = 0; i < array.length; i++) {
    hasil.push(stringManipulation(array[i]))
  }
return hasil.join(' ')

}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,

});
rl.setPrompt( 'Tulis kalimatmu disini> ')
rl.prompt();

rl.on('line',function (answer) {
  switch (answer.trim()){
    case (answer):
      console.log('hasil konversi:'+sentencesmanipulation(answer));
      break;
}

  rl.prompt();
rl.on('line',function(close)  {
  console.log('good bye');
  process.exit(0);
});
})

/*const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('tulis kalimatmu disini ', (answer) => {
  // TODO: Log the answer in a database
  console.log('hasil konversi:'+sentencesmanipulation(answer));


  rl.question('close', () => {
 console.log('Have a great day!')
 process.exit(0);
})*/
