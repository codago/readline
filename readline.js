const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt('tulis kalimatmu disini > ');
  rl.prompt();

rl.on('line', function(line){
  console.log('hasil conversi : ' + stringManipulation(line));
    rl.prompt();
})

function stringManipulation(word) {
	var vokal = ["a", "i", "u", "e", "o"];
	var konsonan = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
	var result = '';
	vokal.forEach(function(element) {
		if(element === word.toLowerCase().charAt(0)) {
			result = word;
    }
  })
	konsonan.forEach(function(element) {
		if(element === word.toLowerCase().charAt(0)) {
			result = word.slice(1) + word.toLowerCase().charAt(0) + "nyo";
      }
    })
	return result;
}
