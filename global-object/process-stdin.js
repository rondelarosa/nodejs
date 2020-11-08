const questions = [
  "What's your name?",
  "What would you rather doing?",
  "What's your prepared programming language?",
];

const ask = (i = 0) => {
  process.stdout.write(`${questions[i]}`);
  process.stdout.write(">");
};

ask();

const answers = [];

process.stdin.on("data", (data) => {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});
