process.on('message', (msg) => {
  console.log('Message from Papa to ramesh : ', msg);
});

setTimeout(() => {
  process.send({ jawab : 'Pitaji mein phirse fail ho gya !!!' });
}, 2000);

setTimeout(() => {
  process.exit();
}, 2200);
