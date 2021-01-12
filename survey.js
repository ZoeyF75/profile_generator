const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable? ", (name) => {
  rl.question("What's an adjective that describes you? ", (adj) => {
    rl.question("Can you tie your shoes? yes/no ", (bool) => {
      //bool = bool.toLowerCase;
      bool.toLowerCase() === 'yes' ? bool = 'can' : bool = "can't";
      rl.question("Whats your favourite dinosaur? ", (dino) => {
        rl.question("What do you like to do in your free time? ", (activity) => {
          rl.question("Whats your favourite food? ", (food) => {
            rl.question("Your favourite place to be is the...? ", (place) => {
              console.log(`Hello, I'm ${name}. I'm super ${adj} and I ${bool} tie my shoes.\nMore importantly, my favourite dinosaur is a ${dino}, haha rawr.\nIn my free time I like to ${activity} and eat ${food} at the ${place}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});




