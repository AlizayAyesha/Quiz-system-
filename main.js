import inquirer from 'inquirer';
import chalk from 'chalk';
const questions = [
    {
        question: 'What is the largest galaxy in the universe?',
        choices: ['Milky Way', 'Andromeda', 'Messier 87', 'Sombrero'],
        correctAnswerIndex: 2 // Correct answer: Messier 87
    },
    {
        question: 'What is the largest planet in our solar system?',
        choices: ['Earth', 'Jupiter', 'Saturn', 'Neptune'],
        correctAnswerIndex: 1 // Correct answer: Jupiter
    },
    {
        question: 'Which galaxy contains the Milky Way?',
        choices: ['Andromeda', 'Messier 87', 'Sombrero', 'Virgo'],
        correctAnswerIndex: 0 // Correct answer: Andromeda
    }
];
async function runQuiz() {
    const answers = [];
    console.log(chalk.bold.green('Welcome to the Quiz System!\n'));
    for (const question of questions) {
        const answer = await inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: question.question,
                choices: question.choices
            }
        ]);
        const correct = question.choices.indexOf(answer.choice) === question.correctAnswerIndex;
        answers.push({ question: question.question, choice: answer.choice, correct });
    }
    console.log('\n' + chalk.bold.green('Quiz Results:\n'));
    let correctCount = 0;
    for (const answer of answers) {
        const result = answer.correct ? chalk.green('Correct') : chalk.red('Incorrect');
        console.log(`${chalk.bold(answer.question)} - Your answer: ${answer.choice} (${result})`);
        if (answer.correct)
            correctCount++;
    }
    const score = (correctCount / questions.length) * 100;
    console.log('\n' + chalk.bold(`Your score: ${score.toFixed(2)}%\n`));
    if (score >= 70) {
        console.log(chalk.green('Congratulations! You passed the quiz!'));
    }
    else {
        console.log(chalk.red('Sorry, you did not pass the quiz. Better luck next time!'));
    }
}
runQuiz();
