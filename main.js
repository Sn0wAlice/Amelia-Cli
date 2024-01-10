const readline = require('readline');
const fs = require('fs');

console.clear()
console.log(fs.readFileSync('./utils/ascii.art', 'utf8'));

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Amelia ~> ',
});

rl.prompt();

rl.on('line', (input) => {
  console.log(`Unrecognized command: ${input}`)

  // Prompt again
  rl.prompt();
});

rl.on('close', () => {
  console.log('Exiting YourShell');
  process.exit(0);
});
