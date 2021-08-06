process.on('message', (msg) => {
  console.log('Message from Papa to suresh : ', msg);
});

setTimeout(() => {
  process.send({ jawab : 'Pitaji mein bhi  phirse fail ho gya !!!' });
}, 1500);

setTimeout(() => {
  process.exit(1);
}, 2500);
