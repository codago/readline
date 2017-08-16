'use strict'

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sentencesManipulation(kalimat)
{
  var tampung = kalimat.split(' ');
  var hasil   = [];

  for (let i=0; i<tampung.length; i++)
  {
    var awalKata = tampung[i].charAt(0);
    if (awalKata=='a' || awalKata=='i' || awalKata=='u' || awalKata=='e' || awalKata=='o' )
    {
      hasil.push(tampung[i]);
    }
    else
    {
      var awal = tampung[i].charAt(0);
      var tambah = 'nyo';
      var hapus = tampung[i].substr(1);
      hasil.push(hapus.concat(awal,tambah));
    }
  }
    return hasil.join(" ");
}

console.log('Masukkan kalimat mu di sini?');
rl.on('line', (kalimat) =>
      {
        sentencesManipulation(kalimat)
        console.log('\nHasil konversi:\n',sentencesManipulation(kalimat),'\n');

        rl.question(console.log('Masukkan kalimat mu di sini?'));
      }
    ).on('close',() =>
          {
           console.log('Good Bye!');
           process.exit(0);
          });
