const { fork } = require('child_process');

const ramesh = fork('./beta-ramesh.js');
const suresh = fork('./beta-suresh.js');

ramesh.send({ sawal: 'Beta ramesh kitne marks aaye ?' });
suresh.send({ sawal: 'Beta suresh kitne marks aaye ?' });

ramesh.on('message', (msg) => {
  console.log('Message from Beta ramesh: ', msg);
});

suresh.on('message', (msg) => {
  console.log('Message from Beta suresh : ', msg);
});

ramesh.on('exit', (data) => {
  console.log(' Ramesh bhaag gaya : ', data);
});

suresh.on('exit', (data) => {
  console.log(' Suresh bhaag gaya : ', data);
});
