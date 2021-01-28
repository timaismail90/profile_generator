// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What do you think of Node.js? ', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

'use strict'

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('what is your name? Nicknames are acceptable ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`)
      resolve()
    })
  })
}

const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question('What is an activity you like doing? ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`)
      resolve()
    })
  })
}

const main = async () => {
  await question1()
  await question2()
  rl.close()
}

main()