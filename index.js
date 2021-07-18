// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');

const generateMarkdown = (answers) =>
// code for read me goes here here ${answers.github} format 

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: "What is your Github username?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email?"
    },
    {
        type: 'input',
        name: 'title',
        message: "What is the title of the project?"
    },
    {
        type: 'input',
        name: 'installation',
        message: "What are the installation instructions?"
    },
    {
        type: 'input',
        name: 'usage',
        message: "What is the usage information?"
    },
    {
        type: 'input',
        name: 'contribution',
        message: "What are the contribution guidelines?"
    },
    {
        type: 'input',
        name: 'tests',
        message: "What are the test instructions?"
    },
    {
        type: 'list',
        message: 'What is your license for this applications?',
        name: 'license',
        choices: ['mit', 'cc', 'isc'],
      },


];


// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    // add stuff after comma
return fs.writeFileSync(path.join(process.cwd(), ))

}



// TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions).then((answers) => {
//     writeToFile
//     })
//  }

.then((answers) => {
    const readMePageContent = generateMarkdown(answers);

    fs.writeFile('README.md', readMePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });

// Function call to initialize app
init();
