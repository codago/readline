'use strict'

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan kalimat mu di sini? ', (kalimat) => {
  // TODO: Log the answer in a database

  function sentencesManipulation(kalimat)
  {
    var tampung = kalimat.split(' ');
    var hasil   = [];

    for (let i=0; i<tampung.length; i++)
    {
      if (tampung[i].charAt(0)=='a' || tampung[i].charAt(0)=='i' || tampung[i].charAt(0)=='u' || tampung[i].charAt(0)=='e' || tampung[i].charAt(0)=='o' )
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

  console.log(`Hasil konversi:
    ${
        sentencesManipulation(kalimat)
    }`);

  rl.close();
});
